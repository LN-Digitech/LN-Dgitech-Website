import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactNotification } from "@/lib/email";

/**
 * Contact form endpoint.
 *
 * Security & abuse prevention:
 *  - Full Zod validation on the server (authoritative).
 *  - Honeypot field: submissions with `website` filled are silently accepted
 *    but never delivered, so bots cannot tell they were filtered.
 *  - Request body size limit (32 KB) before parsing.
 *  - In-memory sliding-window rate limit per IP (per server instance).
 *  - No secrets exposed to the client; email happens server-side only.
 *  - Errors are logged without form contents; responses never leak stack
 *    traces.
 */

const MAX_BODY_BYTES = 32 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

/* Simple in-memory rate limiter. Suitable for a single server instance.
   For multi-instance deployments, replace with a shared store (Redis/Upstash). */
const attempts = new Map<string, number[]>();

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (attempts.get(identifier) ?? []).filter((time) => time > windowStart);

  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(identifier, recent);
    return true;
  }

  recent.push(now);
  attempts.set(identifier, recent);

  // Opportunistic cleanup to bound memory growth.
  if (attempts.size > 5000) {
    for (const [key, times] of attempts) {
      if (times.every((time) => time <= windowStart)) attempts.delete(key);
    }
  }

  return false;
}

export async function POST(request: Request) {
  // Reject oversized payloads before parsing.
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Request too large." },
      { status: 413 },
    );
  }

  const identifier =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Request too large." },
        { status: 413 },
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    }
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot triggered: pretend success, deliver nothing.
  if (parsed.data.website) {
    console.warn("[contact] Honeypot triggered — submission discarded.");
    return NextResponse.json({ ok: true });
  }

  const result = await sendContactNotification(parsed.data);

  if (result.stubbed) {
    // Development mode without email configured. Report success clearly
    // marked as stubbed so the UI can explain what happened.
    return NextResponse.json({ ok: true, stubbed: true });
  }

  if (!result.delivered) {
    // Do not claim success when delivery actually failed.
    return NextResponse.json(
      {
        ok: false,
        error:
          "We received your inquiry but could not deliver it to our team right now. Please try again shortly or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
