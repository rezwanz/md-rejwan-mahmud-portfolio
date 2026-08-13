import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { site, socialLinks } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import { socialIconMap } from "../lib/social-icons";
import AuroraArcs from "./AuroraArcs";

export default function Hero() {
  const role = useTypewriter(site.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-blob absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl md:h-96 md:w-96" />
        <div className="animate-blob absolute right-10 top-1/2 h-56 w-56 rounded-full bg-primary-light/20 blur-3xl [animation-delay:4s]" />
      </div>

      <AuroraArcs />

      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-accent text-sm text-primary"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 h-10 font-heading text-2xl font-semibold text-muted sm:text-3xl"
        >
          {role}
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-xl text-base text-text-light/80 sm:text-lg dark:text-text/80"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-border-light px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary dark:border-border"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="rounded-full border border-border-light p-2.5 text-text-light/70 transition-colors hover:border-primary hover:text-primary dark:border-border dark:text-text/70"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
