import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const social = [
  { label: "Dooria on Instagram", href: "#", icon: Instagram },
  { label: "Dooria on Facebook", href: "#", icon: Facebook },
  { label: "Dooria on LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="no-print border-divider bg-surface-low border-t px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="text-body mt-4 max-w-xs leading-relaxed">
            Dooria brings your favourite food to your door — hot, fast and tracked every step of the
            way. Groceries, parcels and daily essentials are next.
          </p>
          {/*<ul className="mt-6 flex gap-3">*/}
          {/*  {social.map(({ label, href, icon: Icon }) => (*/}
          {/*    <li key={label}>*/}
          {/*      <a*/}
          {/*        href={href}*/}
          {/*        aria-label={label}*/}
          {/*        className="border-divider bg-card text-brand-deep hover:border-brand-deep/40 hover:bg-surface flex size-10 items-center justify-center rounded-xl border transition-colors"*/}
          {/*      >*/}
          {/*        <Icon className="size-4" aria-hidden="true" />*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </div>

        <nav aria-label="Company">
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">Company</h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" hash="features" className="hover:text-brand-deep">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" hash="vision" className="hover:text-brand-deep">
                Our vision
              </Link>
            </li>
            <li>
              <Link to="/" hash="how-it-works" className="hover:text-brand-deep">
                How it works
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">Legal</h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            <li>
              <Link to="/terms-and-conditions" className="hover:text-brand-deep">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-brand-deep">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-heading text-xs font-semibold tracking-[0.14em] uppercase">Contact</h2>
          <ul className="text-body mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="text-brand-deep size-4" aria-hidden="true" />
              <a href="mailto:support@dooria.app" className="hover:text-brand-deep">
                support@dooria.app
              </a>
            </li>
            <li className="text-muted">[Registered Address], Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="border-divider text-muted mx-auto mt-12 w-full max-w-6xl border-t pt-6 text-sm">
        © {new Date().getFullYear()} Dooria. All rights reserved.
      </div>
    </footer>
  );
}