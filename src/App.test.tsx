import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";

function renderApp() {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>,
  );
}

describe("App", () => {
  it("renders every top-level section without crashing", () => {
    renderApp();

    expect(screen.getByText("Skip to content")).toBeInTheDocument();
    for (const id of [
      "top",
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "certifications",
      "services",
      "contact",
    ]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });
});
