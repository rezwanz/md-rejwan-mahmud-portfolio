import { about } from "../data/content";
import { useI18n } from "../hooks/useI18n";
import SectionReveal from "./SectionReveal";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <p className="font-mono-accent text-sm text-primary">
          {t("about.section_label")}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
          {t("about.heading")}
        </h2>
      </SectionReveal>

      <div className="mt-10 grid gap-12 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {about.paragraphs.map((paragraph, i) => (
            <SectionReveal key={paragraph.slice(0, 20)} delay={i * 0.1}>
              <p className="text-text-light/80 leading-relaxed dark:text-text/80">
                {paragraph}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.15} className="md:col-span-2">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-border-light bg-surface-light p-4 dark:border-border dark:bg-surface"
              >
                <dt className="font-mono-accent text-xs uppercase tracking-wide text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </SectionReveal>
      </div>
    </section>
  );
}
