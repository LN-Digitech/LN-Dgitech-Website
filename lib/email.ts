import type { ContactFormValues } from "@/lib/validation";

/**
 * Contact-form email delivery via the Resend HTTP API.
 *
 * Resend is used because it needs no SDK, a single authenticated POST, * which keeps the dependency surface small. To use a different provider,
 * replace the implementation of `sendContactNotification` only.
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY           , server-only API key
 *   CONTACT_NOTIFICATION_EMAIL, inbox that receives inquiries
 *   CONTACT_FROM_EMAIL       , optional; must be on a verified domain
 *   CONTACT_CC_EMAILS        , optional; comma-separated extra recipients
 *
 * Development behaviour:
 *   Set CONTACT_DEV_STUB=true to validate and log success without sending.
 *   The API route labels these responses as stubbed so nobody mistakes them
 *   for delivered inquiries.
 */

export interface ContactEmailResult {
  delivered: boolean;
  /** Set when delivery was skipped intentionally (dev stub). */
  stubbed: boolean;
  /** Safe, non-sensitive error summary for logging. Never includes the body. */
  error?: string;
}

const MAX_RECIPIENTS = 5;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailBody(values: ContactFormValues): string {
  const rows: Array<[string, string]> = [
    ["Name", values.fullName],
    ["Email", values.email],
    ["Phone", values.phone || "Not provided"],
    ["Company", values.company || "Not provided"],
    ["Service", values.service],
    ["Budget", values.budget],
    ["Timeline", values.timeline],
    ["Package", values.packageId || "Not provided"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0;color:#55627a;font-weight:600;">${escapeHtml(label)}</th><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="font-family:ui-sans-serif,system-ui,sans-serif;color:#0B1220;">
  <h2 style="margin:0 0 4px;font-size:18px;">New project inquiry</h2>
  <p style="margin:0 0 16px;color:#55627a;font-size:13px;">Received via the LN Digitech website contact form.</p>
  <table style="border-collapse:collapse;font-size:14px;margin-bottom:16px;">${tableRows}</table>
  <h3 style="margin:0 0 6px;font-size:14px;">Project details</h3>
  <p style="margin:0;padding:12px 14px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;white-space:pre-wrap;font-size:14px;line-height:1.6;">${escapeHtml(values.message)}</p>
</body></html>`;
}

function textBody(values: ContactFormValues): string {
  return [
    "New project inquiry | LN Digitech website",
    "",
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Company: ${values.company || "Not provided"}`,
    `Service: ${values.service}`,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    `Package: ${values.packageId || "Not provided"}`,
    "",
    "Project details:",
    values.message,
  ].join("\n");
}

export async function sendContactNotification(
  values: ContactFormValues,
): Promise<ContactEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_NOTIFICATION_EMAIL;
  const isDev = process.env.NODE_ENV !== "production";
  const devStub = process.env.CONTACT_DEV_STUB === "true";

  if (!apiKey || !toAddress) {
    if (isDev && devStub) {
      console.warn(
        "[contact] CONTACT_DEV_STUB=true, inquiry validated but NOT delivered (missing RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL).",
      );
      return { delivered: false, stubbed: true };
    }
    return {
      delivered: false,
      stubbed: false,
      error: "Email delivery is not configured on this server.",
    };
  }

  if (isDev && devStub) {
    console.warn("[contact] CONTACT_DEV_STUB=true, inquiry validated but NOT delivered.");
    return { delivered: false, stubbed: true };
  }

  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const ccList = (process.env.CONTACT_CC_EMAILS ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean)
    .slice(0, MAX_RECIPIENTS);

  const payload: Record<string, unknown> = {
    from: `LN Digitech Website <${fromAddress}>`,
    to: [toAddress],
    reply_to: values.email,
    subject: `New inquiry: ${values.service} | ${values.fullName}`,
    html: buildEmailBody(values),
    text: textBody(values),
    ...(ccList.length > 0 ? { cc: ccList } : {}),
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      // Log only the status, never the response body or form contents.
      console.error(`[contact] Email provider returned ${response.status}.`);
      return {
        delivered: false,
        stubbed: false,
        error: `Email provider error (${response.status}).`,
      };
    }

    return { delivered: true, stubbed: false };
  } catch (error) {
    console.error(
      "[contact] Email provider request failed:",
      error instanceof Error ? error.name : "unknown error",
    );
    return {
      delivered: false,
      stubbed: false,
      error: "Could not reach the email provider.",
    };
  }
}
