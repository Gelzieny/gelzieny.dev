"use client";

import React, { useState } from "react";

export function Header() {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-[100] bg-[hsl(0,0%,98%)] md:relative md:top-auto md:bottom-0">
      <nav className="h-[calc(3rem+1.5rem)] md:h-12 flex justify-between items-center gap-4 max-w-[968px] mx-auto px-6 md:px-4">
        <a href="#" className="text-[hsl(0,0%,20%)] font-medium">
          Gelzieny.dev
        </a>

        <div
          className={`md:block ${
            Toggle
              ? "fixed bottom-0 left-0 w-full bg-[hsl(0,0%,98%)] p-8 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-300 md:static md:bg-transparent md:p-0 md:shadow-none md:rounded-none md:w-auto"
              : "fixed -bottom-full left-0 w-full bg-[hsl(0,0%,98%)] p-8 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl transition-all duration-300 md:static md:bg-transparent md:p-0 md:shadow-none md:rounded-none md:w-auto"
          }`}
        >
          <ul className="grid grid-cols-3 gap-8 md:flex md:gap-8">
            <li>
              <a
                href="#home"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-estate text-xl mb-1 md:hidden" />
                <span>Home</span>
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-user text-xl mb-1 md:hidden" />
                <span>About</span>
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-file-alt text-xl mb-1 md:hidden" />
                <span>Skills</span>
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-briefcase text-xl mb-1 md:hidden" />
                <span>Services</span>
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-scenery text-xl mb-1 md:hidden" />
                <span>Portfolio</span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="flex flex-col items-center text-sm text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:flex-row md:text-base"
              >
                <i className="uil uil-message text-xl mb-1 md:hidden" />
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times absolute right-5 bottom-2 text-2xl cursor-pointer text-[hsl(0,0%,20%)] transition-colors duration-300 hover:text-[hsl(0,0%,0%)] md:hidden"
            onClick={() => setToggle(false)}
          />
        </div>

        <div
          className="text-lg cursor-pointer text-[hsl(0,0%,20%)] md:hidden"
          onClick={() => setToggle(!Toggle)}
        >
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
}
