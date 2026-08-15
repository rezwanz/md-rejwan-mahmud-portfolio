import { experience } from "../data/content";
import { useI18n } from "../hooks/useI18n";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <p className="font-mono-accent text-sm text-primary">
          {t("experience.section_label")}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
          {t("experience.heading")}
        </h2>
      </SectionReveal>

      <ol className="relative mt-12 space-y-10 border-l border-border-light pl-8 dark:border-border">
        {experience.map((item, i) => (
          <SectionReveal key={`${item.company}-${item.start}`} delay={i * 0.1}>
            <li className="relative">
              <span className="absolute -left-[calc(2rem+9px)] h-4 w-4 rounded-full bg-primary ring-4 ring-bg-light dark:ring-bg" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-primary">
                    @{" "}
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </span>
                </h3>
                <span className="font-mono-accent text-xs text-muted">
                  {item.start} — {item.end}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm text-text-light/80 dark:text-text/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          </SectionReveal>
        ))}
      </ol>
    </section>
  );
}
