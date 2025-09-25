import type { Metadata } from "next";
import TermsClient from "@/components/legal/TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | Zaza Teach",
  description: "The terms that govern your use of Zaza Teach.",
};

export default function TermsPage() {
  return <TermsClient />;
}