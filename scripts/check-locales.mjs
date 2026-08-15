/**
 * Dev-only key-sync check for the locale dictionaries.
 *
 * Imports the raw en/bn locale modules (Node 25 type-strips the .ts files at
 * runtime) and warns — and exits non-zero — if the flattened key trees drift
 * apart. A compile-time guarantee also exists: `bn.ts` is typed as `Locale`,
 * so `tsc` fails on missing/extra keys.
 */
import en from "../src/locales/en.ts";
import bn from "../src/locales/bn.ts";

function flattenKeys(value, prefix = "") {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

const enKeys = flattenKeys(en);
const bnKeys = flattenKeys(bn);
const missingInBn = enKeys.filter((key) => !bnKeys.includes(key));
const extraInBn = bnKeys.filter((key) => !enKeys.includes(key));

if (missingInBn.length > 0 || extraInBn.length > 0) {
  console.error("[i18n] Locale key mismatch between en and bn", {
    missingInBn,
    extraInBn,
  });
  process.exit(1);
}

console.log(`[i18n] Locale keys in sync (${enKeys.length} keys).`);
