import { defaultLocale, locales, type LocaleCode } from "../locales";

export const LANGUAGE_STORAGE_KEY = "language";

/**
 * Reads the persisted language from localStorage, validates it against the
 * known locale codes, and falls back to `defaultLocale`.
 */
export function getInitialLocale(): LocaleCode {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && stored in locales) return stored as LocaleCode;
  return defaultLocale;
}
