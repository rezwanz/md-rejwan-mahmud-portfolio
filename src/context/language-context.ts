import { createContext } from "react";
import type { Locale, LocaleCode } from "../locales";

export interface LanguageContextValue {
  /** Currently active locale code. */
  currentLang: LocaleCode;
  /** Switch the active language (persists to localStorage, updates <html>). */
  setLocale: (code: LocaleCode) => void;
  /** True when the active locale uses a right-to-left script. */
  isRTL: boolean;
  /** The active locale's translation dictionary. */
  dictionary: Locale;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);
