import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/lib/utils";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          "relative pb-1 transition-colors duration-200 font-mono text-2xl",
          isActive
            ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-indigo-500"
            : ""
        )}
      >
        {label}
      </Link>
    </li>
  );
}
