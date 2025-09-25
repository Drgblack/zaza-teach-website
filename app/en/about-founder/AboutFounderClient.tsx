'use client';

import { useTranslations, useLocale } from '../../../components/LocaleProvider';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FounderHero } from "@/components/founder/FounderHero";
import { FounderCreds } from "@/components/founder/FounderCreds";
import { PressRecognition } from "@/components/founder/PressRecognition";
import { FounderTimeline } from "@/components/founder/FounderTimeline";

export default function AboutFounderClient() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10 md:space-y-14">
      <FounderHero />

      {/* Intro Card */}
      <section className="rounded-2xl border bg-background shadow-lg p-8 md:p-10 space-y-6">
        <h2 className="text-2xl font-semibold">{t('aboutFounder.greeting')}</h2>
        <div className="prose prose-neutral dark:prose-invert prose-lg leading-relaxed max-w-none">
          <p>
            {t('aboutFounder.intro.paragraph1')}
          </p>
          <p>
            {t('aboutFounder.intro.paragraph2')}
          </p>
          <div className="rounded-2xl border bg-muted/40 border-l-4 border-l-primary p-4 shadow-sm my-6">
            <p className="m-0 font-medium italic text-foreground">
              "{t('aboutFounder.intro.quote1')}"
            </p>
          </div>
          <p>
            {t('aboutFounder.intro.paragraph3')}
          </p>
          <div className="rounded-2xl border bg-muted/40 border-l-4 border-l-primary p-4 shadow-sm my-6">
            <p className="m-0 font-medium italic text-foreground">
              "{t('aboutFounder.intro.quote2')}"
            </p>
          </div>
        </div>
      </section>

      <FounderCreds />

      {/* Optional mini timeline */}
      <FounderTimeline />

      <PressRecognition />

      {/* CTA band */}
      <section className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-muted/40 to-transparent border shadow-lg text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-semibold">{t('aboutFounder.cta.title')}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('aboutFounder.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={`/${locale}/pricing`}>{t('aboutFounder.cta.tryFree')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href={`/${locale}/resources/lesson-plan-template`}>{t('aboutFounder.cta.exploreTemplates')}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}