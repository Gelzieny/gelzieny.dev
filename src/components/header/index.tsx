"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../context";
import Link from "next/link";
import { NavItem } from "./nav-item";


const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
  {
    label: "Experiência",
    href: "/experiencia",
  },
  {
    label: "Certificados",
    href: "/certificados",
  },
  {
    label: "Contato",
    href: "/contato",
  },
]

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full">
      <div className="container flex items-center justify-between py-4 px-4">

        <Link
          href="/"
          className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap"
        >
          &lt;Gelzieny.dev/&gt;
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">

          <nav className="flex items-center gap-3 sm:gap-6">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}