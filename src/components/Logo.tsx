import { Link } from "@tanstack/react-router";
import { UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5 rounded-xl", className)}
      aria-label="Dooria home"
    >
      <span className="bg-brand-gradient shadow-soft flex size-10 items-center justify-center rounded-[14px] transition-transform duration-200 group-hover:scale-105">
        <UtensilsCrossed className="size-5 text-on-primary" aria-hidden="true" />
      </span>
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight",
          light ? "text-on-primary" : "text-heading",
        )}
      >
        Dooria
      </span>
    </Link>
  );
}