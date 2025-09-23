import { Metadata } from "next";
import { FounderHero } from "@/components/founder/FounderHero";
import { FounderCreds } from "@/components/founder/FounderCreds";
import { PressRecognition } from "@/components/founder/PressRecognition";
import { FounderTimeline } from "@/components/founder/FounderTimeline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { founderPersonJsonLd } from "@/lib/seo/founderSchema";

export const metadata: Metadata = {
  title: "About the Founder - Zaza Teach",
  description:
    "Meet Dr. Greg Blackburn, founder of Zaza Technologies. PhD in Professional Education, former CLO, and published researcher building AI tools that help teachers thrive.",
};

export default function AboutFounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonJsonLd) }}
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10 md:space-y-14">
        <FounderHero />

        {/* Intro Card */}
        <section className="rounded-2xl border bg-background shadow-lg p-8 md:p-10 space-y-6">
          <h2 className="text-2xl font-semibold">Hi, I'm Greg.</h2>
          <div className="prose prose-neutral dark:prose-invert prose-lg leading-relaxed max-w-none">
            <p>
              I came to education the long way around - starting my career in operations and strategy
              before dedicating the last two decades to professional learning and EdTech.
            </p>
            <p>
              I hold a PhD in Professional Education from City, University of London. My work
              focuses on critical thinking, problem-solving, and making digital learning feel human.
            </p>
            <div className="rounded-2xl border bg-muted/40 border-l-4 border-l-primary p-4 shadow-sm my-6">
              <p className="m-0 font-medium italic text-foreground">
                "Helping teachers thrive by giving them back their time."
              </p>
            </div>
            <p>
              I built Zaza Teach to give teachers back time, reduce Sunday stress, and bring the
              joy back to planning. The goal is simple - let teachers just teach.
            </p>
            <div className="rounded-2xl border bg-muted/40 border-l-4 border-l-primary p-4 shadow-sm my-6">
              <p className="m-0 font-medium italic text-foreground">
                "Blending pedagogy, business, and AI into tools that actually work."
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
          <h3 className="text-xl md:text-2xl font-semibold">Ready to reclaim your time</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join educators discovering 5-minute lesson planning with Zaza Teach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/pricing">Try Zaza Teach Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/resources/lesson-plan-template">Explore lesson plan templates</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}