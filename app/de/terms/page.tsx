import type { Metadata } from "next";
import TermsClient from "@/components/legal/TermsClient";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Zaza Teach",
  description: "Die Bedingungen, die Ihre Nutzung von Zaza Teach regeln.",
};

export default function TermsPage() {
  return <TermsClient />;
}