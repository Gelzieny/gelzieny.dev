"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

import { NavItem } from "./nav-item";
import { useTheme } from "../context";
import { LocaleSwitcher } from "../locale-switcher";
import type { Locale } from "@/lib/i18n/config";
import { navTranslations } from "@/lib/i18n/nav-translations";

export function Header({ locale }: { locale: Locale }) {
  const NAV_ITEMS = navTranslations[locale];
  const { theme, toggleTheme, mounted } = useTheme();
  const [open, setOpen] = useState(false);

  const getLocalizedHref = (href: string) => {
    if (href.startsWith('#')) return href;
    return `/${locale}/${href}`;
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container flex items-center justify-between py-4 px-4">

        <Link
          href={`/${locale}`}
          className="text-xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap"
        >
          &lt;Gelzieny.dev/&gt;
        </Link>

        <nav className="hidden lg:flex items-center gap-6 lg:ml-auto lg:mr-6">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.href} href={getLocalizedHref(item.href)} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} />
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Alternar tema"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container flex flex-col py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} href={getLocalizedHref(item.href)} label={item.label} />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
