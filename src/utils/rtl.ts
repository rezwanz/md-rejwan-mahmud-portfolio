import { availableLanguages, type LocaleCode } from "../locales";

export type Direction = "ltr" | "rtl";

/**
 * Returns the writing direction for a locale. Only `ltr` is used today
 * (en/bn), but scaffolding this keeps the door open for adding an RTL
 * language (e.g. Arabic) later without refactoring call sites.
 */
export function getDirection(locale: LocaleCode): Direction {
  return (
    availableLanguages.find((lang) => lang.code === locale)?.direction ?? "ltr"
  );
}

export function isRtlDirection(direction: Direction): boolean {
  return direction === "rtl";
}

/**
 * Applies a locale to the document root so `dir`/`lang` are correct on the
 * <html> element. Call this before first paint to avoid a flash of the wrong
 * direction/language.
 */
export function applyDocumentLocale(locale: LocaleCode): void {
  document.documentElement.lang = locale;
  document.documentElement.dir = getDirection(locale);
}
