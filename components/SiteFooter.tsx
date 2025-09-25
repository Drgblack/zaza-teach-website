"use client";

import Link from "next/link";
import { useTranslations, useLocale } from './LocaleProvider';

export default function SiteFooter() {
  const t = useTranslations();
  const locale = useLocale();
  
  // Helper function to add locale prefix to internal links
  const localizeHref = (href: string) => {
    if (href.startsWith('http') || href.startsWith('/')) {
      return href.startsWith('http') ? href : `/${locale}${href}`
    }
    return href
  }
  return (
    <footer className="w-full border-t border-white/10 bg-[#0e1420] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top brand blurb */}
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Zaza Teach</div>
            <p className="mt-3 text-sm text-white/70">
              {t('footer.description')}
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">{t('footer.product')}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={localizeHref("/")} className="hover:underline">{t('footer.features')}</Link></li>
              <li><Link href={localizeHref("/resources/lesson-plan-template")} className="hover:underline">{t('footer.templates')}</Link></li>
              <li><Link href={localizeHref("/pricing")} className="hover:underline">{t('footer.pricing')}</Link></li>
              <li><Link href={localizeHref("/resources")} className="hover:underline">{t('footer.resources')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">{t('footer.company')}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={localizeHref("/about-founder")} className="hover:underline">{t('footer.about')}</Link></li>
              <li><Link href={localizeHref("/contact")} className="hover:underline">{t('footer.contact')}</Link></li>
              {/* No Careers link by policy */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">{t('footer.legal')}</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={localizeHref("/privacy")} className="hover:underline">{t('footer.privacyPolicy')}</Link></li>
              <li><Link href={localizeHref("/terms")} className="hover:underline">{t('footer.termsOfService')}</Link></li>
              <li><Link href={localizeHref("/cookies")} className="hover:underline">{t('footer.cookies')}</Link></li>
              <li><Link href={localizeHref("/impressum")} className="hover:underline">{t('footer.impressum')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom line */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/60">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </div>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="https://zazatechnologies.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('footer.zazaTechnologies')}
            </a>
            <span aria-hidden>•</span>
            <a href="https://zazapromptly.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('footer.zazaPromptly')}
            </a>
            <span aria-hidden>•</span>
            <a href="https://realtyclose.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t('footer.realtyClose')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}