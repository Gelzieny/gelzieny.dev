import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/context";
import { getHomePage } from "@/lib/services/getHomePage";
import { Contact } from "@/components/pages/home/contact";
import { BubblesBackground } from "@/components/bubbles-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "gelzieny.dev — Desenvolvedora Full Stack",
  description: "Portfólio de Gelzieny R. Martins, desenvolvedora full stack.",
};

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { page } = await getHomePage()
  
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plexMono.variable} snap-y snap-mandatory overflow-y-auto`}
        style={{ scrollPaddingTop: "4rem" }}
      >
        <ThemeProvider>
          <BubblesBackground />
          <Header />
          {children}
          <Contact socialMedias={page.socialMedias}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
