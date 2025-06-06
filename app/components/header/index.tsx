"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import { NavItem } from "./nav-item";
import { useTheme } from "../theme_provider";
import { Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
  { label: "Contatos", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-gray-800 dark:text-gray-200"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link
          href="/"
          className="font-mono text-4xl font-bold from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300"
        >
          Gelzieny.dev
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu className="w-8 h-8 text-white" />
        </button>

        {/* Desktop nav + toggleTheme */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center space-x-7">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
