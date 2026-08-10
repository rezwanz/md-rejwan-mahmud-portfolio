import { Code2, Server, Database, Layers, Smartphone } from "lucide-react";
import { services, type ServiceItem } from "../data/content";
import SectionReveal from "./SectionReveal";

const serviceIconMap: Record<ServiceItem["icon"], typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  layers: Layers,
  smartphone: Smartphone,
};

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-border-light bg-surface-light py-24 dark:border-border dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <p className="font-mono-accent text-sm text-primary">06. Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            What I Can Help With
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-bg-light p-6 transition-colors hover:border-primary/50 dark:border-border dark:bg-bg">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-heading font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light/80 dark:text-text/80">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
