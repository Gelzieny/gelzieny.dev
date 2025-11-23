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

  return(
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-purple-600">#</span>
      {label}
    </Link>
  )
}