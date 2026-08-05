import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "border-divider bg-background/90 border-b backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Logo light={!scrolled} />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                className={`rounded-md text-sm font-semibold transition-colors ${
                  scrolled ? "text-body hover:text-brand-deep" : "text-on-primary/90 hover:text-on-primary"
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
            scrolled ? "border-divider text-heading" : "text-on-primary border-white/40"
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