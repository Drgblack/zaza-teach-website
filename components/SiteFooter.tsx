"use client";

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0e1420] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top brand blurb */}
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Zaza Teach</div>
            <p className="mt-3 text-sm text-white/70">
              AI tools that help educators thrive in their daily workflows.
              Built by educators for educators.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Product</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Features</Link></li>
              <li><Link href="/templates" className="hover:underline">Templates</Link></li>
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              {/* No Careers link by policy */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookies</Link></li>
              <li><Link href="/impressum" className="hover:underline">Impressum</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom line */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} Zaza Teach. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="https://zazatechnologies.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Zaza Technologies
            </a>
            <span aria-hidden>•</span>
            <a href="https://zazapromptly.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Zaza Promptly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}