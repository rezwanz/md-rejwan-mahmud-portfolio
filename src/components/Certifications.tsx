import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/content";
import SectionReveal from "./SectionReveal";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <p className="font-mono-accent text-sm text-primary">
          06. Licenses & Certifications
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
          Certifications
        </h2>
      </SectionReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, i) => (
          <SectionReveal
            key={item.credentialId ?? item.title}
            delay={i * 0.1}
            className="h-full"
          >
            <div className="flex h-full gap-4 rounded-2xl border border-border-light bg-surface-light p-6 dark:border-border dark:bg-surface">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award size={20} />
              </span>
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Show credential for ${item.title}`}
                      className="shrink-0 text-muted transition-colors hover:text-primary"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                <p className="font-mono-accent mt-1 text-xs text-muted">
                  Issued {item.issued}
                </p>
                {item.credentialId && (
                  <p className="mt-2 text-xs text-text-light/80 dark:text-text/80">
                    Credential ID: {item.credentialId}
                  </p>
                )}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
