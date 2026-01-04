'use client'

import { usePathname } from 'next/navigation'
import { locales, defaultLocale, type Locale } from '../i18n/config'

export function useLocale(): Locale {
  const pathname = usePathname()
  
  // Extrai o locale do pathname (ex: /pt-BR/projects -> pt-BR)
  const segments = pathname.split('/')
  const firstSegment = segments[1]
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }
  
  return defaultLocale
}

export function useLocalizedHref(href: string): string {
  const locale = useLocale()
  
  // Se o href já começa com locale ou é uma âncora, retorna como está
  if (href.startsWith('#') || href.startsWith(`/${locale}`)) {
    return href
  }
  
  // Remove barra inicial se existir
  const cleanHref = href.startsWith('/') ? href.slice(1) : href
  
  return `/${locale}/${cleanHref}`
}
