"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "./LocaleProvider";

type Variant = "teach" | "promptly" | "technologies" | "realtyclose";

const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/zaza-technologies" },
  { name: "X", href: "https://x.com/zazateachapp" },
  { name: "TikTok", href: "https://www.tiktok.com/@zazatechnologies" },
];

const SUITE = [
  { name: "Zaza Teach", href: "https://zazateach.com" },
  { name: "Zaza Promptly", href: "https://zazapromptly.com" },
  { name: "Zaza Technologies", href: "https://zazatechnologies.com" },
  { name: "RealtyClose", href: "https://realtyclose.com" },
];

const PRODUCT_CONFIG: Record<Variant, {
  brand: string;
  tagline: string;
  featureLabel: string;
  features: { name: string; href: string }[];
  company: { name: string; href: string }[];
  legal: { name: string; href: string }[];
  supportEmail: string;
  copyright: string;
}> = {
  teach: {
    brand: "Zaza Teach",
    tagline: "AI tools that help educators thrive in their daily workflows. Built by educators for educators. Part of Zaza Technologies.",
    featureLabel: "Features",
    features: [
      { name: "AI Lesson Planner", href: "/features/ai-lesson-planner" },
      { name: "Smart Templates", href: "/features/smart-templates" },
      { name: "Resource Library", href: "/features/resource-library" },
      { name: "Curriculum Alignment", href: "/features/curriculum-alignment" },
      { name: "Teacher Support", href: "/support" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Our Founder", href: "/founder" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
    supportEmail: "support@zazateach.com",
    copyright: `© ${new Date().getFullYear()} Zaza Teach (part of Zaza Technologies UG). All rights reserved.`,
  },
  promptly: {
    brand: "Zaza Promptly",
    tagline: "AI-powered assistant that helps teachers write stress-free parent messages, polished and empathetic. Part of Zaza Technologies.",
    featureLabel: "Features",
    features: [
      { name: "Comment Agent", href: "/features/comment-agent" },
      { name: "Tone Adjustment", href: "/features/tone" },
      { name: "Translations", href: "/features/translate" },
      { name: "Closing Suggestions", href: "/features/closings" },
      { name: "Safe AI Guardrails", href: "/features/safety" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Our Founder", href: "/founder" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
    supportEmail: "support@zazapromptly.com",
    copyright: `© ${new Date().getFullYear()} Zaza Promptly (part of Zaza Technologies UG). All rights reserved.`,
  },
  technologies: {
    brand: "Zaza Technologies",
    tagline: "AI-powered tools that help educators and professionals thrive in their daily workflows. Part of Zaza Technologies.",
    featureLabel: "Pro Tools",
    features: [
      { name: "AI Communication Assistant", href: "/features/ai-communication-assistant" },
      { name: "Smart Templates", href: "/features/smart-templates" },
      { name: "Deal Tracking", href: "/features/deal-tracking" },
      { name: "Compliance Guardrails", href: "/features/compliance" },
      { name: "Integrations", href: "/features/integrations" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Features", href: "/features" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
    supportEmail: "help@zazatechnologies.com",
    copyright: `© ${new Date().getFullYear()} Zaza Technologies UG (haftungsbeschränkt). All rights reserved.`,
  },
  realtyclose: {
    brand: "RealtyClose",
    tagline: "The Gmail-first AI assistant for real estate communication. Part of Zaza Technologies.",
    featureLabel: "Pro Tools",
    features: [
      { name: "AI Email Assistant", href: "/features/ai-email-assistant" },
      { name: "Smart Templates", href: "/features/smart-templates" },
      { name: "Deal Tracking", href: "/features/deal-tracking" },
      { name: "Compliance Guardrails", href: "/features/compliance" },
      { name: "Integrations", href: "/features/integrations" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Features", href: "/features" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
    supportEmail: "support@realtyclose.com",
    copyright: `© ${new Date().getFullYear()} RealtyClose (part of Zaza Technologies UG). All rights reserved.`,
  },
};

export default function Footer({ variant = "teach" }: { variant?: Variant }) {
  const locale = useLocale();
  const t = useTranslations();
  const cfg = PRODUCT_CONFIG[variant];
  
  // Helper function to add locale prefix to internal links
  const localizeHref = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return href;
    }
    return `/${locale}${href}`;
  };
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold">{cfg.brand}</h3>
          <p className="mt-3 text-sm text-white/80">
            {locale === 'de' ? 
              'KI-Tools, die Pädagogen in ihrem Arbeitsalltag unterstützen. Von Lehrern für Lehrer entwickelt. Teil von Zaza Technologies.' : 
              cfg.tagline
            }
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                 className="rounded-xl border border-white/15 p-3 hover:bg-white/10 transition-colors">
                {s.name === 'LinkedIn' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {s.name === 'X' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                {s.name === 'TikTok' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{locale === 'de' ? 'Zaza Ökosystem' : 'Suite'}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SUITE.map((i) => (
              <li key={i.name}>
                <a href={i.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{i.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{locale === 'de' ? 'Funktionen' : cfg.featureLabel}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cfg.features.map((i) => {
              const localizedName = locale === 'de' && variant === 'teach' ? 
                i.name === 'AI Lesson Planner' ? 'KI-Unterrichtsplaner' :
                i.name === 'Smart Templates' ? 'Intelligente Vorlagen' :
                i.name === 'Resource Library' ? 'Ressourcen-Bibliothek' :
                i.name === 'Curriculum Alignment' ? 'Lehrplan-Ausrichtung' :
                i.name === 'Teacher Support' ? 'Lehrer-Support' : i.name
                : i.name;
              return (
                <li key={i.name}><Link href={localizeHref(i.href)} className="hover:underline">{localizedName}</Link></li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{locale === 'de' ? 'Unternehmen' : 'Company'}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cfg.company.map((i) => {
              const localizedName = locale === 'de' && variant === 'teach' ? 
                i.name === 'About Us' ? 'Über uns' :
                i.name === 'Pricing' ? 'Preise' :
                i.name === 'Blog' ? 'Blog' :
                i.name === 'Our Founder' ? 'Unser Gründer' :
                i.name === 'FAQ' ? 'FAQ' :
                i.name === 'Contact' ? 'Kontakt' : i.name
                : i.name;
              return (
                <li key={i.name}><Link href={localizeHref(i.href)} className="hover:underline">{localizedName}</Link></li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-white/70 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Link href={localizeHref(cfg.legal[0].href)} className="hover:underline">{cfg.legal[0].name}</Link>
            <span>•</span>
            <Link href={localizeHref(cfg.legal[1].href)} className="hover:underline">{locale === 'de' ? 'Datenschutz' : cfg.legal[1].name}</Link>
            <span>•</span>
            <Link href={localizeHref(cfg.legal[2].href)} className="hover:underline">{locale === 'de' ? 'Nutzungsbedingungen' : cfg.legal[2].name}</Link>
            <span>•</span>
            <Link href={localizeHref(cfg.legal[3].href)} className="hover:underline">{locale === 'de' ? 'Cookies' : cfg.legal[3].name}</Link>
          </div>
          <div className="flex items-center gap-3">
            <span>{locale === 'de' ? 'Support:' : 'Support:'}</span>
            <a href={`mailto:${cfg.supportEmail}`} className="hover:underline">{cfg.supportEmail}</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 text-xs text-white/60">
          {locale === 'de' ? 
            `© ${new Date().getFullYear()} Zaza Teach (Teil von Zaza Technologies UG). Alle Rechte vorbehalten.` : 
            cfg.copyright
          }
        </div>
      </div>
    </footer>
  );
}