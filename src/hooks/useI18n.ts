import { useCallback, useContext } from "react";
import { LanguageContext } from "../context/language-context";
import { availableLanguages, locales } from "../locales";
import type { LocaleCode } from "../locales";

type Vars = Record<string, string | number>;

/** Resolves a dot-path (e.g. "hero.tagline") against a nested object. */
function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, segment) => {
    if (
      acc !== null &&
      typeof acc === "object" &&
      segment in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);
}

/** Replaces `{name}` placeholders with the provided variables. */
function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    name in vars ? String(vars[name]) : match,
  );
}

function warnMissing(key: string, locale: LocaleCode): void {
  if (import.meta.env.DEV) {
    console.warn(
      `[i18n] Missing translation for key "${key}" in locale "${locale}"`,
    );
  }
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  const { currentLang, setLocale, isRTL, dictionary } = ctx;

  /** Translate a dot-path key. Falls back to the key itself when missing. */
  const t = useCallback(
    (key: string, vars?: Vars): string => {
      const value = getPath(dictionary, key);
      if (typeof value !== "string") {
        warnMissing(key, currentLang);
        return vars ? interpolate(key, vars) : key;
      }
      return interpolate(value, vars);
    },
    [dictionary, currentLang],
  );

  /** Translate a dot-path key whose value is a string array (e.g. hero.roles). */
  const tList = useCallback(
    (key: string, vars?: Vars): string[] => {
      const value = getPath(dictionary, key);
      if (!Array.isArray(value) || !value.every((v) => typeof v === "string")) {
        warnMissing(key, currentLang);
        return [key];
      }
      return value.map((v) => interpolate(v, vars));
    },
    [dictionary, currentLang],
  );

  /** True when the key resolves in the current locale. */
  const has = useCallback(
    (key: string): boolean => getPath(dictionary, key) !== undefined,
    [dictionary],
  );

  /** True when the key resolves, optionally within a specific locale. */
  const exists = useCallback(
    (key: string, locale?: LocaleCode): boolean => {
      const target = locale ? locales[locale] : dictionary;
      return getPath(target, key) !== undefined;
    },
    [dictionary],
  );

  const getAvailableLocales = useCallback(() => availableLanguages, []);

  return {
    t,
    tList,
    has,
    exists,
    currentLang,
    isRTL,
    getAvailableLocales,
    setLocale,
  };
}
