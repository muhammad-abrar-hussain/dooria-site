import { ArrowUp } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalLayout({ title, intro, lastUpdated, sections }: LegalLayoutProps) {
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
        <header className="border-divider max-w-3xl border-b pb-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
          <p className="text-body mt-4 text-lg leading-relaxed">{intro}</p>
          <p className="text-muted mt-4 text-sm">
            Last updated: <time dateTime="2026-08-05">{lastUpdated}</time>
          </p>
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
                <div className="text-body mt-4 space-y-4 leading-relaxed [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
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