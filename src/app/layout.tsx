import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/context";
import { Header } from "@/components/header";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <ThemeProvider>
          <BubblesBackground />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
