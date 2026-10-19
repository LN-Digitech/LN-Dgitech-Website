"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import styles from "./ContactForm.module.css";
import { Button } from "@/components/ui/Button";
import {
  budgetOptions,
  contactFormSchema,
  serviceOptions,
  timelineOptions,
  type ContactApiResponse,
} from "@/lib/validation";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<string, string>>;

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  packageId: "",
  message: "",
  consent: false,
  website: "", // honeypot
};

/**
 * Contact form with client-side pre-validation, server-side Zod validation,
 * honeypot spam defence and honest error reporting.
 *
 * The form NEVER reports success without a confirmed `ok: true` response
 * from the API. Server failures are surfaced to the user.
 *
 * Wrapped in a Suspense boundary by the page because useSearchParams
 * requires it during static rendering.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const presetPackage = searchParams.get("package") ?? "";
  const presetServiceParam = searchParams.get("service") ?? "";

  const [values, setValues] = useState(() => ({
    ...initialValues,
    packageId: ["launch", "growth", "scale", "enterprise"].includes(presetPackage)
      ? presetPackage
      : "",
    service: serviceOptions.includes(presetServiceParam as never)
      ? presetServiceParam
      : "",
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [stubbed, setStubbed] = useState(false);

  function updateField(field: keyof typeof initialValues, value: string | boolean) {
    setValues((current) => ({ ...current, [field]: value }));
    // Clear the field's error as soon as the user edits it.
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);
    setStubbed(false);

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0]);
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      // Focus the first invalid field for keyboard users.
      const first = parsed.error.issues[0];
      if (first) {
        const el = document.querySelector<HTMLElement>(`[name="${String(first.path[0])}"]`);
        el?.focus();
      }
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as ContactApiResponse & { stubbed?: boolean };

      if (!response.ok || !data.ok) {
        setStatus("idle");
        setServerError(
          "fieldErrors" in data && data.fieldErrors
            ? "Some fields need attention. Please review the highlighted fields."
            : (data as { error?: string }).error ||
              "Something went wrong submitting your inquiry. Please try again or email us directly.",
        );
        if ("fieldErrors" in data && data.fieldErrors) {
          const nextErrors: FieldErrors = {};
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            if (messages && messages[0]) nextErrors[field] = messages[0];
          }
          setErrors(nextErrors);
        }
        return;
      }

      setStubbed(Boolean(data.stubbed));
      setStatus("success");
    } catch {
      setStatus("idle");
      setServerError(
        "We could not reach the server. Please check your connection and try again, or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <CheckCircle2 size={28} aria-hidden="true" className={styles.successIcon} />
        <h3 className={styles.successTitle}>Thank you. Your inquiry has been received.</h3>
        <p className={styles.successText}>
          We review every inquiry personally and typically respond within one to two business
          days. If your request is time-sensitive, mention it in a follow-up email.
        </p>
        {stubbed ? (
          <p className={styles.stubNote}>
            Development mode: this inquiry was validated successfully but not delivered,
            because email is not configured on this server. See README.md for setup.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {serverError ? (
        <div className={styles.serverError} role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="fullName" className={styles.label}>
            Full name <span className={styles.required}>*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className={cn(styles.input, errors.fullName && styles.inputError)}
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className={styles.error}>
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Business email <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className={cn(styles.input, errors.email && styles.inputError)}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className={styles.error}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Phone number <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            className={cn(styles.input, errors.phone && styles.inputError)}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className={styles.error}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company or brand <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            className={styles.input}
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="service" className={styles.label}>
            Service of interest <span className={styles.required}>*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className={cn(styles.select, errors.service && styles.inputError)}
            value={values.service}
            onChange={(e) => updateField("service", e.target.value)}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className={styles.error}>
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="budget" className={styles.label}>
            Estimated budget <span className={styles.required}>*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            className={cn(styles.select, errors.budget && styles.inputError)}
            value={values.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            aria-invalid={errors.budget ? true : undefined}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            <option value="">Select a budget range…</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p id="budget-error" className={styles.error}>
              {errors.budget}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="timeline" className={styles.label}>
            Project timeline <span className={styles.required}>*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            className={cn(styles.select, errors.timeline && styles.inputError)}
            value={values.timeline}
            onChange={(e) => updateField("timeline", e.target.value)}
            aria-invalid={errors.timeline ? true : undefined}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
          >
            <option value="">Select a timeline…</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
          {errors.timeline ? (
            <p id="timeline-error" className={styles.error}>
              {errors.timeline}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="packageId" className={styles.label}>
            Package of interest <span className={styles.optional}>(optional)</span>
          </label>
          <select
            id="packageId"
            name="packageId"
            className={styles.select}
            value={values.packageId}
            onChange={(e) => updateField("packageId", e.target.value)}
          >
            <option value="">No preference yet</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}, {pkg.priceLabel}
              </option>
            ))}
          </select>
        </div>

        <div className={cn(styles.field, styles.fullWidth)}>
          <label htmlFor="message" className={styles.label}>
            Project description <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={4000}
            placeholder="What are you trying to achieve? What does success look like? Any constraints we should know about?"
            className={cn(styles.textarea, errors.message && styles.inputError)}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
          />
          {errors.message ? (
            <p id="message-error" className={styles.error}>
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className={styles.hint}>
              Minimum 20 characters. The more context you give us, the more useful our
              response will be.
            </p>
          )}
        </div>

        {/* Honeypot, hidden from real users, tempting to bots. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        <div className={cn(styles.field, styles.fullWidth, styles.consentField)}>
          <label className={styles.consentLabel} htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className={cn(styles.checkbox, errors.consent && styles.inputError)}
              checked={values.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span>
              I agree that LN Digitech may use my details to respond to this inquiry, as
              described in the{" "}
              <a href="/privacy-policy" className={styles.inlineLink}>
                privacy policy
              </a>
              . <span className={styles.required}>*</span>
            </span>
          </label>
          {errors.consent ? (
            <p id="consent-error" className={styles.error}>
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" size="lg" loading={status === "submitting"} className={styles.submit}>
        <Send size={17} aria-hidden="true" style={{ marginRight: "0.45rem" }} />
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
