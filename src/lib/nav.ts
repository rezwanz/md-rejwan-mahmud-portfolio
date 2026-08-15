import { useMemo } from "react";
import { useI18n } from "../hooks/useI18n";

export const NAV_SECTIONS = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "projects", href: "#projects" },
  { key: "certifications", href: "#certifications" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export const NAV_IDS = NAV_SECTIONS.map((section) => section.href.slice(1));

/** Navigation items with labels translated for the active locale. */
export function useNavItems() {
  const { t } = useI18n();
  return useMemo(
    () =>
      NAV_SECTIONS.map((section) => ({
        key: section.key,
        href: section.href,
        label: t(`nav.${section.key}`),
      })),
    [t],
  );
}
