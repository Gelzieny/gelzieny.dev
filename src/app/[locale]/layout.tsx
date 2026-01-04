import { ThemeProvider } from "@/components/context";
import { Header } from "@/components/header";
import { BubblesBackground } from "@/components/bubbles-background";
import { Contact } from "@/components/pages/home/contact";
import { getHomePage } from "@/lib/services/getHomePage";
import { locales, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function toLocale(value: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : "pt";
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);

  const { page } = await getHomePage(safeLocale);

  return (
    <ThemeProvider>
      <BubblesBackground />
      <Header locale={safeLocale} />
      {children}
      <Contact socialMedias={page.socialMedias} locale={safeLocale} />
    </ThemeProvider>
  );
}
