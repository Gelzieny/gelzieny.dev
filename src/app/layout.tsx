import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";
import { Header } from "@/components/header";

const geistPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Gelzieny.dev ",
  description: "Portfólio Gelzieny.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistPoppins.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
