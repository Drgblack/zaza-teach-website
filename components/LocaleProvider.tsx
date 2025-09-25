'use client'
import { createContext, useContext, useEffect, useState } from 'react'

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
  const [pathname, setPathname] = useState('')
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname)
    }
  }, [])
  
  return pathname
}

interface LocaleProviderProps {
  locale: string
  messages: Record<string, any>
  children: React.ReactNode
}

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
  const [pathname, setPathname] = useState('')
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname)
      console.log('LocaleProvider Debug:', {
        locale,
        pathname: window.location.pathname,
        privacyPolicy: messages?.footer?.privacyPolicy,
        termsOfService: messages?.footer?.termsOfService,
        cookies: messages?.footer?.cookies
      });
    }
  }, [locale, messages])
  
  const pathWithoutLocale = pathname.startsWith('/en') ? pathname.slice(3) : 
                           pathname.startsWith('/de') ? pathname.slice(3) : pathname

  const t = (key: string) => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    
    // Return the actual value (string, array, object) or the key as fallback
    return value !== undefined ? value : key
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