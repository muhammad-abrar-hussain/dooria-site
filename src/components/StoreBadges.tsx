import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  { href: "#", icon: Apple, top: "Download on the", bottom: "App Store" },
  { href: "#", icon: Play, top: "Get it on", bottom: "Google Play" },
];

export function StoreBadges({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {badges.map(({ href, icon: Icon, top, bottom }) => (
        <li key={bottom}>
          <a
            href={href}
            className="border-divider bg-card text-heading hover:border-brand-deep/40 hover:bg-surface-low inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors duration-200"
          >
            <Icon className="text-brand-deep size-5" aria-hidden="true" />
            <span className="text-left leading-tight">
              <span className="text-muted block text-[0.65rem] tracking-wide uppercase">{top}</span>
              <span className="block text-sm font-semibold">{bottom}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}