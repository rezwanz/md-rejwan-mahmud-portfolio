import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider } from "./LanguageContext";
import { useI18n } from "../hooks/useI18n";

function LanguageConsumer() {
  const { t, currentLang, setLocale, isRTL } = useI18n();
  return (
    <div>
      <p>{t("nav.resume")}</p>
      <p>lang:{currentLang}</p>
      <p>rtl:{String(isRTL)}</p>
      <button type="button" onClick={() => setLocale("bn")}>
        switch
      </button>
    </div>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to English and resolves a translation key", () => {
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>,
    );

    expect(screen.getByText("lang:en")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("switches locale, updates the dictionary, and syncs <html lang/dir>", () => {
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "switch" }));

    expect(screen.getByText("lang:bn")).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("bn");
    expect(document.documentElement.dir).toBe("ltr");
    expect(localStorage.getItem("language")).toBe("bn");
  });

  it("falls back to the key itself for a missing translation", () => {
    function MissingKeyConsumer() {
      const { t } = useI18n();
      return <p>{t("this.key.does.not.exist")}</p>;
    }

    render(
      <LanguageProvider>
        <MissingKeyConsumer />
      </LanguageProvider>,
    );

    expect(screen.getByText("this.key.does.not.exist")).toBeInTheDocument();
  });
});
