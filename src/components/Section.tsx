import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div" | "footer";
}

export function Section({ id, className, children, as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={cn("px-5 py-16 sm:px-8 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-brand-deep mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[1.75rem] leading-tight font-bold sm:text-[2.125rem]">{title}</h2>
      {subtitle ? (
        <p className="text-body mt-3 text-base leading-relaxed sm:text-[1.0625rem]">{subtitle}</p>
      ) : null}
    </div>
  );
}