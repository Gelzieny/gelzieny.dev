/**
 * Locales usados na URL da aplicação
 * Ex: /pt, /en
 */
export const locales = ["pt", "en"] as const;

/**
 * Tipo de locale da aplicação (URL)
 */
export type Locale = (typeof locales)[number];

/**
 * Locale padrão
 */
export const defaultLocale: Locale = "pt";

/**
 * Nome amigável dos idiomas (UI)
 */
export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

/**
 * Emoji / flag usados no seletor de idioma
 * (pode trocar por ícone SVG se quiser)
 */
export const localeFlags: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

/**
 * Mapeamento App → CMS (Hygraph)
 * ⚠️ Ajuste conforme o enum REAL do Hygraph
 */
export const CMS_LOCALE_MAP: Record<Locale, string> = {
  pt: "pr_BR", // Hygraph usa pr_BR
  en: "en",
};

/**
 * Normaliza qualquer valor vindo da URL
 */
export function toLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale)
    ? (value as Locale)
    : defaultLocale;
}

/**
 * Retorna o locale correto para o Hygraph
 */
export function getCmsLocale(locale: Locale): string {
  return CMS_LOCALE_MAP[locale];
}

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};