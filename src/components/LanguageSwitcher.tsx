import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

export default function LanguageSwitcher() {
  const { currentLang, setLocale, getAvailableLocales, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = getAvailableLocales();
  const current =
    languages.find((lang) => lang.code === currentLang) ?? languages[0];

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("common.change_language_aria")}
        title={current.nativeName}
        className="rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      >
        <img
          src={`/images/flags/${current.flag}.svg`}
          alt={current.name}
          className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("common.change_language_aria")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-border-light bg-bg-light py-1 shadow-xl dark:border-border dark:bg-bg"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                role="option"
                aria-selected={lang.code === currentLang}
              >
                <button
                  type="button"
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                    lang.code === currentLang
                      ? "text-primary"
                      : "text-text-light/80 hover:bg-black/5 hover:text-primary dark:text-text/80 dark:hover:bg-white/10"
                  }`}
                >
                  <img
                    src={`/images/flags/${lang.flag}.svg`}
                    alt=""
                    aria-hidden
                    className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm"
                  />
                  <span className="flex-1">{lang.nativeName}</span>
                  {lang.code === currentLang && (
                    <Check size={14} aria-hidden />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
