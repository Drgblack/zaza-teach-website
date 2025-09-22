"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const creds = [
  "PhD in Professional Education - City, University of London",
  "MBA - University of Queensland",
  "First-Class Honours - Information Systems",
  "Former Chief Learning Officer - Communardo (EU)",
  "Corporate experience - 6 years at Telstra",
  "Published researcher - eLearning and digital pedagogy",
];

export function FounderCreds() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Credentials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {creds.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="h-5 w-5 mt-0.5 text-green-600 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Transparency</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>Were you a teacher</AccordionTrigger>
              <AccordionContent>
                No - my background is professional learning and EdTech. I work closely with teachers
                and school leaders to make AI useful, safe, and time-saving.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>What guides product decisions</AccordionTrigger>
              <AccordionContent>
                Learning science, classroom reality, and measurable time savings for teachers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}