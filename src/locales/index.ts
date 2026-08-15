import en from "./en";
import bn from "./bn";

/**
 * Deeply maps the `as const` English dictionary to a widened, mutable shape
 * (`string` / `string[]` leaves). `bn.ts` is typed against this so TypeScript
 * fails the build if a key is missing, misspelled, or structurally different.
 */
type TranslateValue<T> = T extends readonly string[]
  ? string[]
  : T extends string
    ? string
    : { [K in keyof T]: TranslateValue<T[K]> };

/** The runtime dictionary per language code. */
export const locales = { en, bn } as const;

export type LocaleCode = keyof typeof locales;
export type Locale = TranslateValue<typeof en>;

export const availableLanguages = [
  {
    code: "en" as LocaleCode,
    name: "English",
    nativeName: "English",
    flag: "us",
    direction: "ltr" as const,
  },
  {
    code: "bn" as LocaleCode,
    name: "Bangla",
    nativeName: "বাংলা",
    flag: "bd",
    direction: "ltr" as const,
  },
] as const;

export const defaultLocale: LocaleCode = "en";

/** Dev-only sanity check: warns when en/bn key trees drift out of sync. */
function flattenKeys(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

function assertLocalesInSync(): void {
  if (!import.meta.env.DEV) return;
  const enKeys = flattenKeys(en);
  const bnKeys = flattenKeys(bn);
  const missingInBn = enKeys.filter((key) => !bnKeys.includes(key));
  const extraInBn = bnKeys.filter((key) => !enKeys.includes(key));
  if (missingInBn.length > 0 || extraInBn.length > 0) {
    console.warn("[i18n] Locale key mismatch between en and bn", {
      missingInBn,
      extraInBn,
    });
  }
}

assertLocalesInSync();

export default locales;
