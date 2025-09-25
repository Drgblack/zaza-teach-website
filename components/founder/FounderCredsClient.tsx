"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { useTranslations } from "../LocaleProvider";

export function FounderCredsClient() {
  const t = useTranslations();
  
  // Helper to safely get translation array
  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  const creds = getTranslationArray('aboutFounder.credentials.items', [
    "PhD in Professional Education - City, University of London",
    "MBA - University of Queensland",
    "First-Class Honours - Information Systems",
    "Former Chief Learning Officer - Communardo (EU)",
    "Corporate experience - 6 years at Telstra",
    "Published researcher - eLearning and digital pedagogy",
  ]);

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>{t('aboutFounder.credentials.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {creds.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>{t('aboutFounder.transparency.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>{t('aboutFounder.transparency.q1.question')}</AccordionTrigger>
              <AccordionContent>
                {t('aboutFounder.transparency.q1.answer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>{t('aboutFounder.transparency.q2.question')}</AccordionTrigger>
              <AccordionContent>
                {t('aboutFounder.transparency.q2.answer')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}