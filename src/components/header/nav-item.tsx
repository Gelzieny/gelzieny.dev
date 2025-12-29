"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // update hash whenever the pathname changes (navigation) and listen for hash changes
    setHash(window.location.hash || "");
    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  const isHashLink = href.startsWith("#");
  const computedHref = isHashLink ? (pathname === "/" ? href : `/${href}`) : href;

  let isActive = false;
  if (isHashLink) {
    // on home, compare current location.hash to the link; otherwise not active
    isActive = pathname === "/" && hash === href;
  } else {
    isActive = pathname === href;
  }

  return (
    <Link
      href={computedHref}
      className={cn(
        "flex items-center gap-2 font-medium font-mono text-base",
        "text-gray-700 dark:text-gray-400",
        "hover:text-purple-600 dark:hover:text-purple-400 transition",
        isActive && "text-purple-600 dark:text-purple-400 font-bold"
      )}
    >
      <span className="text-purple-600 dark:text-purple-400">#</span>
      <span className={cn(isActive && "border-b-2 border-purple-600 pb-1 dark:border-purple-400")}>
        {label}
      </span>
    </Link>
  );
}
