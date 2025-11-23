"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../context";

export function Header(){
  const { theme, toggleTheme } = useTheme();
  return(
    <>
      <header className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          gelzieny.dev
        </div>

         <button
        onClick={toggleTheme}
        className="absolute top-4 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      </header>
    </>
  )
}