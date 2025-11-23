import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps){
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-medium font-mono",
        "text-gray-600 dark:text-gray-400",  
        "hover:text-gray-900 dark:hover:text-white",
        isActive && "text-black dark:text-white"
      )}
    >
      <span className="text-purple-600">#</span>
      {label}
    </Link>
  )
}
