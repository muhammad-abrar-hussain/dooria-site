import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5 rounded-xl", className)}
      aria-label="Dooria home"
    >
      <img
        src="/apple-touch-icon.png"
        alt="Dooria"
        width={40}
        height={40}
        className="size-10 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
      />
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
