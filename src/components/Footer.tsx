import { ArrowUp } from "lucide-react";
import { nav, site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border-light px-6 py-10 dark:border-border">
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
