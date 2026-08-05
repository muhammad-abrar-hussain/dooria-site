import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "Features", to: "/", hash: "features" },
  { label: "Our vision", to: "/", hash: "vision" },
  { label: "How it works", to: "/", hash: "how-it-works" },
] as const;

const legalLinks = [
  { label: "Terms of Service", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

export function Footer() {
  return (
    <footer className="no-print border-divider bg-surface-low border-t px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="text-body mt-4 max-w-xs text-sm leading-relaxed">
            Delicious food, delivered to your door.
          </p>
        </div>

        <nav aria-label="Company">
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">
            Company
          </h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  hash={link.hash}
                  className="hover:text-brand-deep transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">Legal</h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-brand-deep transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">
            Contact
          </h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="text-brand-deep mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href="mailto:abrahussain304@gmail.com"
                className="hover:text-brand-deep break-words transition-colors"
              >
                abrahussain304@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="text-brand-deep mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>Lahore, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-divider text-muted mx-auto mt-12 w-full max-w-6xl border-t pt-6 text-center text-sm">
        © {new Date().getFullYear()} Dooria. All rights reserved.
      </div>
    </footer>
  );
}
