import { skillGroups } from "../data/content";
import { useI18n } from "../hooks/useI18n";
import { skillIconMap } from "../lib/skill-icons";
import SectionReveal from "./SectionReveal";

const allSkills = skillGroups.flatMap((group) => group.items);

function SkillMarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex gap-12 pr-12" aria-hidden={ariaHidden}>
      {allSkills.map((skill) => {
        const Icon = skillIconMap[skill.icon];
        return (
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted transition-colors hover:text-primary"
          >
            {Icon && <Icon size={28} style={{ color: skill.color }} />}
            <span className="font-mono-accent text-sm">{skill.name}</span>
          </a>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      className="border-y border-border-light bg-surface-light py-24 dark:border-border dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono-accent text-sm text-primary">
            {t("skills.section_label")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            {t("skills.heading")}
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <SectionReveal key={group.category} delay={i * 0.08}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const Icon = skillIconMap[skill.icon];
                  return (
                    <li key={skill.name}>
                      <a
                        href={skill.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-border-light bg-bg-light px-3 py-2 text-sm transition-colors hover:border-primary hover:text-primary dark:border-border dark:bg-bg"
                      >
                        {Icon && (
                          <Icon size={16} style={{ color: skill.color }} />
                        )}
                        {skill.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-light to-transparent dark:from-surface" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-light to-transparent dark:from-surface" />
        <div className="animate-marquee flex w-max">
          <SkillMarqueeRow />
          <SkillMarqueeRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
