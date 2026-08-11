import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Store, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";
import { Section } from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrandButton } from "@/components/ui/brand-button";
import {
  submitVendorApplication,
  vendorApplicationSchema,
  type VendorApplicationInput,
} from "@/lib/vendor-application";

const benefits = [
  { icon: Users, text: "Reach more customers in your area." },
  { icon: TrendingUp, text: "Grow orders with live tracking and smart delivery." },
  { icon: Store, text: "Simple onboarding — our team guides you through setup." },
] as const;

const fields = [
  {
    name: "business_name",
    label: "Business name",
    placeholder: "e.g. Al-Rehman Biryani",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "owner_name",
    label: "Business owner name",
    placeholder: "e.g. Ahmed Khan",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@business.com",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+92 3XX XXXXXXX",
    type: "tel",
    autoComplete: "tel",
  },
] as const;

export function PartnerSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<VendorApplicationInput>({
    resolver: zodResolver(vendorApplicationSchema),
    defaultValues: { business_name: "", owner_name: "", email: "", phone: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await submitVendorApplication({ data: values });
      if (result.ok) {
        reset();
        setSubmitted(true);
        return;
      }

      // Attach the backend's per-field messages (e.g. a phone/email already
      // submitted) to the exact inputs, and focus the first one.
      const fields = Object.entries(result.fieldErrors) as [keyof VendorApplicationInput, string][];
      fields.forEach(([field, message]) => setError(field, { type: "server", message }));
      if (fields[0]) setFocus(fields[0][0]);

      // Also surface the meaningful message in a toast so it's unmistakable.
      const primaryMessage = result.formError ?? fields[0]?.[1];
      toast.error(primaryMessage ?? "Please check your details and try again.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  });

  return (
    <Section id="partner" className="bg-surface-low scroll-mt-24">
      <div className="card-surface grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Pitch */}
        <div>
          <p className="text-brand-deep mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            Partner with us
          </p>
          <h2 className="text-[1.75rem] leading-tight font-bold sm:text-[2.125rem]">
            Grow your business with Dooria
          </h2>
          <p className="text-body mt-3 text-base leading-relaxed">
            List your restaurant on Dooria and start receiving orders. Tell us about your business
            and our team will get back to you.
          </p>
          <ul className="mt-7 space-y-3.5">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="bg-primary/10 text-brand-deep mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-body text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form / success */}
        {submitted ? (
          <div className="border-divider bg-card flex flex-col items-center justify-center rounded-2xl border p-8 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="size-7" aria-hidden="true" />
            </span>
            <h3 className="text-heading mt-5 text-xl font-bold">Application received</h3>
            <p className="text-body mt-2 max-w-sm text-sm leading-relaxed">
              Thanks for your interest in Dooria. We&apos;ve received your application — our team
              will review it and contact you by email or phone shortly.
            </p>
            <BrandButton
              type="button"
              variant="secondary"
              size="sm"
              className="mt-6"
              onClick={() => setSubmitted(false)}
            >
              Submit another
            </BrandButton>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  aria-invalid={errors[field.name] ? true : undefined}
                  className="h-11 bg-card"
                  {...register(field.name)}
                />
                {errors[field.name] ? (
                  <p className="text-destructive text-xs">{errors[field.name]?.message}</p>
                ) : null}
              </div>
            ))}

            <div className="sm:col-span-2">
              <BrandButton
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-1 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Submitting…
                  </>
                ) : (
                  "Submit application"
                )}
              </BrandButton>
              <p className="text-muted mt-3 text-xs leading-relaxed">
                By submitting, you agree to be contacted by the Dooria team about partnering.
              </p>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
