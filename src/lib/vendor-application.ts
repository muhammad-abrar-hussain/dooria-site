import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Backend base URL for the public vendor-application endpoint.
 * Override per-environment with the DOORIA_API_URL env var.
 */
const API_URL = process.env["DOORIA_API_URL"] ?? "https://api.dooria.app";

/**
 * Accepts the common ways people type a Pakistani mobile number and returns it
 * in canonical E.164 form (`+923XXXXXXXXX`), or null if it isn't a valid one.
 * Handles spaces/dashes/parentheses and the `0`, `92`, `+92`, `0092`, or bare
 * `3XXXXXXXXX` prefixes so the user isn't rejected for formatting.
 */
export function normalizePakistaniPhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s()-]/g, "");
  const match = cleaned.match(/^\+?(\d+)$/);
  if (!match) return null;

  let digits = match[1] ?? "";
  if (digits.startsWith("00")) digits = digits.slice(2); // 0092...
  if (digits.startsWith("92"))
    digits = digits.slice(2); // 92... / +92...
  else if (digits.startsWith("0")) digits = digits.slice(1); // 0321...

  // Pakistani mobile national numbers are 10 digits and start with 3.
  if (!/^3\d{9}$/.test(digits)) return null;
  return `+92${digits}`;
}

/** Mirrors VendorApplicationRequest in the Dooria API schema. */
export const vendorApplicationSchema = z.object({
  business_name: z
    .string()
    .trim()
    .min(1, "Business name is required")
    .max(150, "Business name is too long"),
  owner_name: z.string().trim().min(1, "Your name is required").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(254),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .transform((value, ctx) => {
      const normalized = normalizePakistaniPhone(value);
      if (!normalized) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter a valid Pakistani mobile number",
        });
        return z.NEVER;
      }
      return normalized;
    }),
});

export type VendorApplicationInput = z.infer<typeof vendorApplicationSchema>;

/** Per-field messages the form can attach to individual inputs. */
export type VendorApplicationFieldErrors = Partial<Record<keyof VendorApplicationInput, string>>;

export type VendorApplicationResult =
  { ok: true } | { ok: false; fieldErrors: VendorApplicationFieldErrors; formError?: string };

/** Fields that map to a specific input; anything else becomes a form-level error. */
const KNOWN_FIELDS: (keyof VendorApplicationInput)[] = [
  "business_name",
  "owner_name",
  "email",
  "phone",
];

/** Flattens a field error value (string, string[], or nested) into plain strings. */
function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return value.trim() ? [value.trim()] : [];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

/**
 * Maps the Dooria 400 envelope — `{ error, code, details: { field: [msg] } }` —
 * into per-field messages plus a form-level fallback. The backend's wording is
 * final and intentional (e.g. the neutral "Our team will be in touch soon" for
 * duplicates), so messages are surfaced verbatim. Known fields attach to their
 * input; anything else (or a top-level `error`/plain-text body) becomes a
 * form-level message so the real reason always reaches the user.
 */
function parseValidationBody(body: unknown): {
  fieldErrors: VendorApplicationFieldErrors;
  formError?: string;
} {
  const fieldErrors: VendorApplicationFieldErrors = {};
  const otherMessages: string[] = [];

  if (typeof body === "string") {
    otherMessages.push(...collectStrings(body));
  } else if (body && typeof body === "object") {
    const obj = body as Record<string, unknown>;
    // Prefer the nested `details` map; tolerate a flat `{ field: [msg] }` body.
    const details =
      obj["details"] && typeof obj["details"] === "object"
        ? (obj["details"] as Record<string, unknown>)
        : obj;

    for (const [key, value] of Object.entries(details)) {
      const messages = collectStrings(value);
      const first = messages[0];
      if (!first) continue;
      if ((KNOWN_FIELDS as string[]).includes(key)) {
        fieldErrors[key as keyof VendorApplicationInput] = first;
      } else {
        otherMessages.push(...messages);
      }
    }

    // Fall back to the top-level summary only if nothing more specific was found.
    if (!Object.keys(fieldErrors).length && !otherMessages.length) {
      const summary = obj["error"] ?? obj["detail"];
      if (typeof summary === "string") otherMessages.push(summary);
    }
  }

  let formError = otherMessages[0];
  if (!Object.keys(fieldErrors).length && !formError) {
    formError = "Please check your details and try again.";
  }

  return formError ? { fieldErrors, formError } : { fieldErrors };
}

/**
 * Submits a vendor joining request. Runs on the server (avoids CORS and keeps
 * the API host out of the client bundle) and is CSRF-protected via start.ts.
 * Returns structured field errors on a 400 so the form can flag the exact input
 * (e.g. a phone/email that was already submitted); throws only for unexpected
 * server/network failures.
 */
export const submitVendorApplication = createServerFn({ method: "POST" })
  .validator((data: VendorApplicationInput) => vendorApplicationSchema.parse(data))
  .handler(async ({ data }): Promise<VendorApplicationResult> => {
    const res = await fetch(`${API_URL}/api/auth/vendor-applications/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) return { ok: true };

    // 400 → duplicate phone/email or invalid field; surface it per-field.
    if (res.status === 400) {
      const text = await res.text();
      let body: unknown = text;
      try {
        body = JSON.parse(text);
      } catch {
        // Not JSON — keep the raw text so its message can still be shown.
      }
      return { ok: false, ...parseValidationBody(body) };
    }

    throw new Error("Something went wrong on our end. Please try again in a moment.");
  });
