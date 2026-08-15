import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { locales, type Locale, type LocaleCode } from "../locales";
import { getDirection } from "../utils/rtl";
import { getInitialLocale, LANGUAGE_STORAGE_KEY } from "../utils/locale";
import { LanguageContext, type LanguageContextValue } from "./language-context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LocaleCode>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = getDirection(currentLang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
  }, [currentLang]);

  const setLocale = useCallback((code: LocaleCode) => {
    setCurrentLang(code);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      currentLang,
      setLocale,
      isRTL: getDirection(currentLang) === "rtl",
      dictionary: locales[currentLang] as Locale,
    }),
    [currentLang, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
