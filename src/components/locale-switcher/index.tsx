'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  locales,
  localeNames,
  localeFlags,
  localeLabels,
  type Locale
} from '@/lib/i18n/config'

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(pt|en)/, '')
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    router.push(newPath) 
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
            locale === currentLocale
              ? 'bg-primary/20 text-primary font-semibold'
              : 'hover:bg-muted text-muted-foreground'
          }`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          <span className="text-lg">{localeFlags[locale]}</span>
          <span className="text-sm">{localeLabels[locale]}</span>
        </button>
      ))}
    </div>
  )
}
