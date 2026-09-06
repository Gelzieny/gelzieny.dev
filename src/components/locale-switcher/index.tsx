'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  locales,
  localeNames,
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
          className={`flex items-center justify-center p-1.5 rounded-md transition-all duration-300 border ${
            locale === currentLocale
              ? 'bg-primary/20 border-primary/30 scale-105 shadow-sm'
              : 'hover:bg-muted border-transparent opacity-60 hover:opacity-100'
          }`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          <img
            src={locale === 'pt' ? '/brasil.svg' : '/usa.svg'}
            alt={localeNames[locale]}
            className="w-6 h-6 object-cover rounded-sm"
          />
        </button>
      ))}
    </div>
  )
}
