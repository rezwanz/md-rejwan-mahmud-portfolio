import { GraduationCap } from "lucide-react";
import { education } from "../data/content";
import SectionReveal from "./SectionReveal";

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-border-light bg-surface-light py-24 dark:border-border dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono-accent text-sm text-primary">
            05. Education
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Academic Background
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => (
            <SectionReveal
              key={item.institution}
              delay={i * 0.1}
              className="h-full"
            >
              <div className="flex h-full gap-4 rounded-2xl border border-border-light bg-bg-light p-6 dark:border-border dark:bg-bg">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {item.institution}
                  </p>
                  <p className="font-mono-accent mt-1 text-xs text-muted">
                    {item.start} — {item.end}
                  </p>
                  {item.details && (
                    <p className="mt-2 text-sm text-text-light/80 dark:text-text/80">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
