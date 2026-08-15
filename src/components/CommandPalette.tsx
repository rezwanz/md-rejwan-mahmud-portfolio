import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  Search,
  ArrowRight,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import { site, socialLinks } from "../data/content";
import { socialIconMap } from "../lib/social-icons";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";
import { useNavItems } from "../lib/nav";

interface Action {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ size?: number }>;
  perform: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const navItems = useNavItems();

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const actions = useMemo<Action[]>(() => {
    const sectionActions: Action[] = navItems.map((item) => ({
      id: `nav-${item.href}`,
      label: t("commands.go_to", { section: item.label }),
      hint: t("commands.hint_section"),
      icon: ArrowRight,
      perform: () => {
        document
          .querySelector(item.href)
          ?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const socialActions: Action[] = socialLinks
      .filter((link) => link.icon !== "mail")
      .map((link) => ({
        id: `social-${link.label}`,
        label: t("commands.open", { label: link.label }),
        hint: t("commands.hint_link"),
        icon: socialIconMap[link.icon],
        perform: () => window.open(link.href, "_blank", "noreferrer"),
      }));

    return [
      {
        id: "theme",
        label: theme === "dark" ? t("commands.theme_light") : t("commands.theme_dark"),
        hint: t("commands.hint_theme"),
        icon: theme === "dark" ? Sun : Moon,
        perform: toggleTheme,
      },
      {
        id: "resume",
        label: t("commands.download_resume"),
        hint: t("commands.hint_pdf"),
        icon: Download,
        perform: () => {
          const link = document.createElement("a");
          link.href = site.resumeUrl;
          link.download = "";
          link.click();
        },
      },
      ...sectionActions,
      ...socialActions,
    ];
  }, [theme, toggleTheme, t, navItems]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((action) => action.label.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isMeta = event.metaKey || event.ctrlKey;
      if (isMeta && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!open) return;

      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const action = filtered[activeIndex];
        if (action) {
          action.perform();
          close();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("commands.open_aria")}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border-light bg-bg-light/90 px-4 py-3 text-sm font-medium text-muted shadow-lg backdrop-blur-lg transition-colors hover:border-primary hover:text-primary dark:border-border dark:bg-bg/90 sm:px-3 sm:py-2"
      >
        <Command size={16} />
        <span className="hidden sm:inline">
          <kbd className="font-mono-accent">⌘K</kbd>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={t("commands.dialog_aria")}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border-light bg-bg-light shadow-2xl dark:border-border dark:bg-bg"
            >
              <div className="flex items-center gap-3 border-b border-border-light px-4 py-3 dark:border-border">
                <Search size={18} className="shrink-0 text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t("commands.placeholder")}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                />
                <kbd className="font-mono-accent shrink-0 rounded-md border border-border-light px-1.5 py-0.5 text-xs text-muted dark:border-border">
                  Esc
                </kbd>
              </div>

              <ul className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-6 text-center text-sm text-muted">
                    {t("commands.no_results")}
                  </li>
                )}
                {filtered.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <li key={action.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => {
                          action.perform();
                          close();
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                          i === activeIndex
                            ? "bg-primary/10 text-primary"
                            : "text-text-light/80 dark:text-text/80"
                        }`}
                      >
                        <Icon size={16} />
                        <span className="flex-1">{action.label}</span>
                        {action.hint && (
                          <span className="font-mono-accent text-xs text-muted">
                            {action.hint}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
