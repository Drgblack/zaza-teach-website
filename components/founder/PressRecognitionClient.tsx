"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Users, Star } from "lucide-react";
import { useTranslations } from "../LocaleProvider";

export function PressRecognitionClient() {
  const t = useTranslations();
  
  // Helper to safely get translation array
  const getTranslationArray = (key: string, fallback: any[] = []): any[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  const items = getTranslationArray('aboutFounder.pressRecognition.items', [
    {
      title: "Featured expertise",
      text: "Published internationally on critical thinking and digital learning.",
    },
    {
      title: "Leadership",
      text: "Former CLO leading large-scale learning programs in Europe.",
    },
    {
      title: "Impact",
      text: "Building AI tools that reduce workload and increase teacher confidence.",
    },
    {
      title: "Coming soon",
      text: "Press features, awards, and partnerships.",
    },
  ]);

  const icons = [BookOpen, Users, Award, Star];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{t('aboutFounder.pressRecognition.title')}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item: any, index: number) => {
          const IconComponent = icons[index] || BookOpen;
          return (
            <Card className="rounded-2xl shadow-lg" key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Placeholder logo strip */}
      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4 text-center">
          {t('aboutFounder.pressRecognition.featuredIn')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-60">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-lg border bg-muted/40 flex items-center justify-center text-xs text-muted-foreground hover:bg-muted/60 transition-colors"
              aria-label="Press logo placeholder"
            >
              Featured In
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}