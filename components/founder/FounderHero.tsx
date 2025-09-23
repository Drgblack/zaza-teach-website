"use client";

import Image from "next/image";

export function FounderHero() {
  return (
    <header className="text-center space-y-6">
      <div className="inline-block rounded-full ring-2 ring-black/5 dark:ring-white/10 overflow-hidden">
        <Image
          src="/images/founder/greg-blackburn-headshot.jpg"
          alt="Photo of Dr. Greg Blackburn, Founder of Zaza Technologies"
          width={176}
          height={176}
          className="h-44 w-44 object-cover"
          priority
          sizes="(max-width: 768px) 160px, 240px"
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About the Founder</h1>
        <p className="mt-2 text-muted-foreground">
          Dr. Greg Blackburn - Founder & CEO, Zaza Technologies
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            className="text-sm underline underline-offset-4 hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/drgregblackburn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-muted-foreground">·</span>
          <a
            className="text-sm underline underline-offset-4 hover:text-primary transition-colors"
            href="https://scholar.google.com/citations?user=lkG7Ym0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          <span aria-hidden="true" className="text-muted-foreground">·</span>
          <a
            className="text-sm underline underline-offset-4 hover:text-primary transition-colors"
            href="https://elearningindustry.com/elearning-authors/greg-blackburn"
            target="_blank"
            rel="noopener noreferrer"
          >
            eLearning Industry
          </a>
        </div>
      </div>
    </header>
  );
}