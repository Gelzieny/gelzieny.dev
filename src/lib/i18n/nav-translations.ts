import type { Locale } from "./config";

type NavItem = {
  label: string;
  href: string;
};

export const navTranslations: Record<Locale, NavItem[]> = {
  pt: [
    { label: "Home", href: "#hero" },
    { label: "Projetos", href: "projects" },
    { label: "Contato", href: "#contato" },
  ],
  en: [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "#contato" },
  ],
};
