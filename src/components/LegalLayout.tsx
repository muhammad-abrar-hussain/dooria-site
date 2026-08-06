import { ArrowUp } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  intro?: string;
  effectiveDate?: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalLayout({
  title,
  intro,
  effectiveDate,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="px-5 pt-12 pb-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="border-divider border-b pb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
            {intro ? <p className="text-body mt-4 text-lg leading-relaxed">{intro}</p> : null}
            <div className="text-muted mt-5 space-y-1 text-sm">
              {effectiveDate ? (
                <p>
                  <span className="text-heading font-semibold">Effective date:</span>{" "}
                  {effectiveDate}
                </p>
              ) : null}
              <p>
                <span className="text-heading font-semibold">Last updated:</span> {lastUpdated}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10 gap-14 lg:flex">
          <nav
            aria-label="On this page"
            className="no-print mb-10 lg:sticky lg:top-28 lg:mb-0 lg:h-fit lg:w-64 lg:shrink-0"
          >
            <h2 className="text-muted text-xs font-bold tracking-[0.18em] uppercase">
              On this page
            </h2>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={activeId === section.id ? "true" : undefined}
                    className={`hover:text-brand-deep block rounded-md border-l-2 py-1 pl-3 transition-colors ${
                      activeId === section.id
                        ? "text-brand-deep border-brand-deep bg-surface-low font-semibold"
                        : "text-body border-transparent"
                    }`}
                  >
                    <span className="text-muted mr-2">{i + 1}.</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="mb-10 scroll-mt-28">
                <h2 className="text-xl font-bold sm:text-2xl">
                  <span className="text-brand-deep mr-2">{i + 1}.</span>
                  {section.title}
                </h2>
                <div className="text-body mt-4 space-y-4 leading-relaxed [&_a:hover]:underline [&_a]:font-medium [&_a]:text-brand-deep [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-heading [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-heading [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-divider [&_td]:p-3 [&_td]:align-top [&_th]:border [&_th]:border-divider [&_th]:bg-surface-low [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-heading [&_ul]:space-y-2">
                  {section.body}
                </div>
              </section>
            ))}

            <a
              href="#top"
              className="no-print text-brand-deep border-divider bg-card hover:bg-surface-low inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
              Back to top
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}
