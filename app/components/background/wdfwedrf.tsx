"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme_provider";

export function TemplateProject()  {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="Alternar tema"
      >
        {theme === "dark" ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-blue-500" />
        )}
      </button>
       
      <div className="absolute inset-0 -z-10 overflow-hidden ">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl
            opacity-70 dark:opacity-30 dark:bg-purple-600 animate-blob-1"/>

        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl
            opacity-70 dark:opacity-30 dark:bg-blue-600 animate-blob-2"/>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl
            opacity-70 dark:opacity-30 dark:bg-indigo-600 animate-blob-3"/>
      </div>
    </section>
  );
}