import { ArrowUp } from "lucide-react";
import { nav, site } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-light px-6 py-10 dark:border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Overlapping petal blobs, teal fading into violet/indigo */}
        <div className="absolute -bottom-16 right-40 h-40 w-40 rounded-full bg-primary/20 blur-2xl md:right-56 md:h-52 md:w-52" />
        <div className="absolute -bottom-20 right-24 h-44 w-44 rounded-full bg-primary-light/20 blur-2xl md:right-36 md:h-56 md:w-56" />
        <div className="absolute -bottom-24 right-8 h-48 w-48 rounded-full bg-violet-500/20 blur-2xl md:right-14 md:h-64 md:w-64" />
        <div className="absolute -bottom-28 -right-10 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl md:h-72 md:w-72" />

        {/* Dominant glowing sphere, bottom-right corner */}
        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-violet-500/15 to-transparent blur-3xl md:h-96 md:w-96" />

        {/* Thin diagonal light rays */}
        <div className="absolute -bottom-6 right-4 h-32 w-px rotate-[38deg] bg-gradient-to-t from-transparent via-primary-light/50 to-transparent md:h-40" />
        <div className="absolute -bottom-4 right-20 h-28 w-px rotate-[38deg] bg-gradient-to-t from-transparent via-violet-300/40 to-transparent md:h-36" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center gap-1.5 rounded-full border border-border-light px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary hover:text-primary dark:border-border"
        >
          <ArrowUp size={14} />
          Top
        </a>
      </div>
    </footer>
  );
}
