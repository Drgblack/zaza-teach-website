'use client'
import { createContext, useContext } from 'react'

interface LocaleContextType {
  locale: string
  t: (key: string) => string
  pathWithoutLocale: string
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within LocaleProvider')
  return context.locale
}

export function useTranslations() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useTranslations must be used within LocaleProvider')
  return context.t
}

export function usePathname() {
  if (typeof window === 'undefined') return ''
  return window.location.pathname
}

interface LocaleProviderProps {
  locale: string
  messages: Record<string, any>
  children: React.ReactNode
}

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const pathWithoutLocale = pathname.startsWith('/en') ? pathname.slice(3) : 
                           pathname.startsWith('/de') ? pathname.slice(3) : pathname

  const t = (key: string) => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    
    return typeof value === 'string' ? value : key
  }

  const value = {
    locale,
    t,
    pathWithoutLocale
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}