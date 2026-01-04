import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './lib/i18n/config'

function getLocale(request: NextRequest): string {
  // Verifica se já tem locale nos cookies
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && locales.includes(localeCookie as any)) {
    return localeCookie
  }

  // Verifica o header Accept-Language
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(',')[0].split(';')[0]
    
    // Tenta match exato
    if (locales.includes(browserLocale as any)) {
      return browserLocale
    }
    
    // Tenta match por prefixo (ex: en-US -> en)
    const languagePrefix = browserLocale.split('-')[0]
    const matchedLocale = locales.find(locale => locale.startsWith(languagePrefix))
    if (matchedLocale) {
      return matchedLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Ignora arquivos estáticos e API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // arquivos com extensão
  ) {
    return NextResponse.next()
  }

  // Verifica se o pathname já tem um locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redireciona para a versão com locale
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  const response = NextResponse.redirect(newUrl)
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 }) // 1 ano
  
  return response
}

export const config = {
  matcher: [
    // Aplica em todas as rotas exceto:
    '/((?!_next|api|.*\\.).*)',
  ],
}
