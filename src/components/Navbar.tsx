import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { BrandLink } from "./ui/brand-button";

const navLinks = [
  { label: "How it works", to: "/", hash: "how-it-works" },
  { label: "Features", to: "/", hash: "features" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });

  // The transparent, light-on-dark header is only for the home page's dark hero.
  // On every other page the top of the page is light, so keep the header solid.
  const overHero = pathname === "/";
  const transparent = overHero && !scrolled;

  // Legal pages get a minimal, distraction-free header: just a link back home.
  const isLegalPage = pathname === "/terms-and-conditions" || pathname === "/privacy-policy";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isLegalPage) {
    return (
      <header className="no-print border-divider bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur-md">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-full max-w-6xl items-center px-5 py-4 sm:px-8"
        >
          <Link
            to="/"
            className="text-body hover:text-brand-deep inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={`no-print sticky top-0 z-50 w-full transition-colors duration-200 ${
        transparent ? "bg-transparent" : "border-divider bg-background/90 border-b backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Logo light={transparent} />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                className={`rounded-md text-sm font-semibold transition-colors ${
                  transparent
                    ? "text-on-primary/90 hover:text-on-primary"
                    : "text-body hover:text-brand-deep"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <BrandLink href="#download" size="sm">
            Get the App
          </BrandLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`inline-flex size-11 items-center justify-center rounded-xl border md:hidden ${
            transparent ? "text-on-primary border-white/40" : "border-divider text-heading"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-divider bg-background border-t px-5 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  {...(link.hash ? { hash: link.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="text-body hover:text-brand-deep block py-3 font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <BrandLink href="#download" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Get the App
          </BrandLink>
        </div>
      ) : null}
    </header>
  );
}
