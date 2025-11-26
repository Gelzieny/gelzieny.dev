import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-medium font-mono text-base",
        "text-gray-700 dark:text-gray-400",
        "hover:text-purple-600 dark:hover:text-purple-400 transition",
        isActive && "text-purple-600 dark:text-purple-400 font-bold"
      )}
    >
      <span className="text-purple-600 dark:text-purple-400">#</span>
      {label}
    </Link>
  );
}
