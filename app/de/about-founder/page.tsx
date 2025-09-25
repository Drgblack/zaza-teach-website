import { Metadata } from "next";
import { founderPersonJsonLd } from "@/lib/seo/founderSchema";
import AboutFounderClient from "./AboutFounderClient";

export const metadata: Metadata = {
  title: "Über den Gründer - Zaza Teach",
  description:
    "Lernen Sie Dr. Greg Blackburn kennen, Gründer von Zaza Technologies. PhD in Berufspädagogik, ehemaliger CLO und veröffentlichter Forscher, der KI-Tools entwickelt, die Lehrern helfen zu gedeihen.",
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