import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { nav, site } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(nav.map((item) => item.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-light bg-bg-light/80 backdrop-blur-lg dark:border-border dark:bg-bg/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          <span className="text-primary">&lt;</span>
          {site.initials}
          <span className="text-primary">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={
                  activeId === item.href.slice(1) ? "location" : undefined
                }
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeId === item.href.slice(1)
                    ? "text-primary"
                    : "text-text-light/80 dark:text-text/80"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full p-2 text-text-light/70 transition-colors hover:bg-black/5 hover:text-primary dark:text-text/70 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={site.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border-light bg-bg-light/95 backdrop-blur-lg md:hidden dark:border-border dark:bg-bg/95"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text-light/80 hover:bg-black/5 hover:text-primary dark:text-text/80 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between px-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  className="flex items-center gap-2 text-sm font-medium text-text-light/80 dark:text-text/80"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
                <a
                  href={site.resumeUrl}
                  download
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
                >
                  <Download size={16} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
