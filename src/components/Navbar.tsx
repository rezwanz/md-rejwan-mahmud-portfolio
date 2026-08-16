import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { site } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_IDS, useNavItems } from "../lib/nav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const navItems = useNavItems();
  const activeId = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-light bg-bg-light/80 backdrop-blur-lg dark:border-border dark:bg-bg/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-heading text-lg font-semibold tracking-tight">
          <span className="text-primary">&lt;</span>
          {site.initials}
          <span className="text-primary">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
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

        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <button type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? t("nav.switch_to_light_aria")
                : t("nav.switch_to_dark_aria")
            }
            className="rounded-full p-2 text-text-light/70 transition-colors hover:bg-black/5 hover:text-primary dark:text-text/70 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <LanguageSwitcher />
          <a href={site.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full bg-primary p-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark sm:px-4 sm:py-2"
          >
            <Download size={16} />
            <span className="hidden sm:inline">{t("nav.resume")}</span>
          </a>

          <button type="button"
            className="rounded-full p-2 text-text-light/70 transition-colors hover:bg-black/5 hover:text-primary md:hidden dark:text-text/70 dark:hover:bg-white/10"
            aria-label={t("nav.toggle_menu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={
                      activeId === item.href.slice(1) ? "location" : undefined
                    }
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 hover:text-primary dark:hover:bg-white/10 ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
