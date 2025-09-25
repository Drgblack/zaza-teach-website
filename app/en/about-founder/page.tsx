import { Metadata } from "next";
import { founderPersonJsonLd } from "@/lib/seo/founderSchema";
import AboutFounderClient from "./AboutFounderClient";

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
      <AboutFounderClient />
    </>
  );
}