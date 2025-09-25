"use client";

import { useTranslations } from "../LocaleProvider";

export function FounderTimelineClient() {
  const t = useTranslations();
  
  // Helper to safely get translation array
  const getTranslationArray = (key: string, fallback: any[] = []): any[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  const steps = getTranslationArray('aboutFounder.timeline.steps', [
    {
      title: "Operations and strategy beginnings",
      body: "Early career in corporate operations and strategy, including six years at Telstra.",
    },
    {
      title: "Academic research",
      body: "PhD in Professional Education. Focus on critical thinking and digital learning.",
    },
    {
      title: "Zaza founder",
      body: "Created Zaza to give teachers back time and build AI tools that feel human.",
    },
  ]);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{t('aboutFounder.timeline.title')}</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        <ol className="space-y-8 relative">
          {steps.map((step: any, idx: number) => (
            <li key={idx} className="flex gap-6 items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="space-y-1 pb-8">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}