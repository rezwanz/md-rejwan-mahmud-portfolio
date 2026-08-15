import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { applyDocumentLocale } from "./utils/rtl.ts";
import { getInitialLocale } from "./utils/locale.ts";

applyDocumentLocale(getInitialLocale());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
