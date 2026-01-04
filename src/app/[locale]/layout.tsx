import { ThemeProvider } from "@/components/context";
import { Header } from "@/components/header";
import { BubblesBackground } from "@/components/bubbles-background";
import { Contact } from "@/components/pages/home/contact";
import { getHomePage } from "@/lib/services/getHomePage";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const { page } = await getHomePage(locale);

  return (
    <ThemeProvider>
      <BubblesBackground />
      <Header locale={locale} />
      {children}
      <Contact socialMedias={page.socialMedias} locale={locale} />
    </ThemeProvider>
  );
}
