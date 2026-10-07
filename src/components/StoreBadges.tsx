import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.dooria.customerapp";

/**
 * "dark" = classic black store badge, for light sections.
 * "light" = white badge, for the dark hero where a black badge would disappear.
 */
type Tone = "dark" | "light";

const shell =
  "relative inline-flex h-[58px] w-[13rem] items-center gap-3 rounded-2xl border px-4 transition duration-200";

const tones: Record<
  Tone,
  { live: string; soon: string; eyebrow: string; eyebrowSoon: string; icon: string }
> = {
  dark: {
    live: "border-black bg-[#121212] text-white shadow-card hover:-translate-y-0.5 hover:bg-black hover:shadow-lift",
    soon: "border-dashed border-divider bg-surface-low text-heading/70",
    eyebrow: "text-white/65",
    eyebrowSoon: "text-brand-deep/80",
    icon: "text-white",
  },
  light: {
    live: "border-white/80 bg-white text-heading shadow-lift hover:-translate-y-0.5 hover:bg-white/95",
    soon: "border-dashed border-white/45 bg-white/10 text-on-primary/85 backdrop-blur-sm",
    eyebrow: "text-muted",
    eyebrowSoon: "text-on-primary/70",
    icon: "text-heading",
  },
};

/** Apple's mark isn't in lucide (its `Apple` icon is a fruit), so inline the glyph. */
function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-20.6-29.5-51.7-45.8-92.8-48.9-38.9-3-81.4 22.5-97 22.5-16.4 0-54.1-21.5-83.7-21.5C34.3 136.7 0 176.1 0 236.9c0 26.1 4.8 53 14.3 80.8 12.7 36.6 58.5 126.2 106.3 124.8 25-.6 42.7-17.8 75.2-17.8 31.5 0 47.9 17.8 75.8 17.8 48.2-.7 89.6-82.1 101.7-118.8-64.6-30.5-54.6-89.4-54.6-91zM256.4 92.8c20.6-24.4 18.7-46.6 18.1-54.6-18.2 1.1-39.3 12.4-51.3 26.3-13.2 14.9-21 33.3-19.3 53.9 19.7 1.5 37.6-8.6 52.5-25.6z" />
    </svg>
  );
}

export function StoreBadges({ className, tone = "dark" }: { className?: string; tone?: Tone }) {
  const t = tones[tone];

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-3 gap-y-5", className)}>
      <li>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Download the Dooria app on Google Play"
          className={cn(
            shell,
            t.live,
            "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-2",
          )}
        >
          <Play className={cn("size-6 shrink-0 fill-current", t.icon)} aria-hidden="true" />
          <span className="text-left leading-none">
            <span
              className={cn(
                "block text-[0.625rem] font-semibold tracking-[0.12em] uppercase",
                t.eyebrow,
              )}
            >
              Get it on
            </span>
            <span className="mt-1.5 block text-[1.0625rem] font-semibold tracking-tight">
              Google Play
            </span>
          </span>
        </a>
      </li>

      <li>
        <span
          role="img"
          aria-label="The Dooria app for iPhone is coming soon to the App Store"
          title="Coming soon to the App Store"
          className={cn(shell, t.soon, "cursor-default select-none")}
        >
          <span className="bg-brand-gradient text-on-primary shadow-card absolute -top-2.5 left-4 rounded-full px-2 py-[0.1875rem] text-[0.5625rem] font-bold tracking-[0.1em] uppercase">
            Coming soon
          </span>
          <AppleGlyph className="size-[1.375rem] shrink-0" />
          <span className="text-left leading-none">
            <span
              className={cn(
                "block text-[0.625rem] font-semibold tracking-[0.12em] uppercase",
                t.eyebrowSoon,
              )}
            >
              Download on the
            </span>
            <span className="mt-1.5 block text-[1.0625rem] font-semibold tracking-tight">
              App Store
            </span>
          </span>
        </span>
      </li>
    </ul>
  );
}
