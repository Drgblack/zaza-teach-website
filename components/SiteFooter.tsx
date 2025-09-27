"use client";

import Link from "next/link";
import { useTranslations, useLocale } from './LocaleProvider';
import { Linkedin, Twitter } from 'lucide-react';

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
    <footer className="bg-[#1a1f2e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Zaza Teach</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/zaza-technologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/zazatechnologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Suite Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Suite</h3>
            <ul className="space-y-3">
              <li>
                <Link href={localizeHref("/")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Zaza Teach
                </Link>
              </li>
              <li>
                <a href="https://zazapromptly.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Zaza Promptly
                </a>
              </li>
              <li>
                <a href="https://zazatechnologies.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Zaza Technologies
                </a>
              </li>
              <li>
                <a href="https://realtyclose.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  RealtyClose
                </a>
              </li>
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link href={localizeHref("/products")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  AI Lesson Planner
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/resources/lesson-plan-template")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Smart Templates
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/resources")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/pricing")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Curriculum Alignment
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/support")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Teacher Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href={localizeHref("/about")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/pricing")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/blog")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/about-founder")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Founder
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/faqs")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={localizeHref("/contact")} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-600"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-gray-400">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href={localizeHref("/impressum")} className="text-gray-400 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href={localizeHref("/privacy")} className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href={localizeHref("/terms")} className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href={localizeHref("/cookies")} className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
            <a href="mailto:support@zazateach.com" className="text-gray-400 hover:text-white transition-colors">
              support@zazateach.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}