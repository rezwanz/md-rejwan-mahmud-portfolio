import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectFilters, projects, type Project } from "../data/content";
import SectionReveal from "./SectionReveal";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-2xl border border-border-light bg-surface-light p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 dark:border-border dark:bg-surface"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-heading text-lg font-semibold">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 text-muted">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="transition-colors hover:text-primary"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="transition-colors hover:text-primary"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {project.associatedWith && (
        <p className="mt-1 font-mono-accent text-xs text-muted">
          {project.associatedWith}
        </p>
      )}

      <p className="mt-3 flex-1 text-sm text-text-light/80 dark:text-text/80">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono-accent rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <p className="font-mono-accent text-sm text-primary">05. Projects</p>
        <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
          Things I've Built
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {projectFilters.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={filter === tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-primary text-white"
                  : "border border-border-light text-muted hover:border-primary hover:text-primary dark:border-border"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </SectionReveal>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
