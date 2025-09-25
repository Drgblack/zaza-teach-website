import type { Metadata } from "next";
import PrivacyClient from "@/components/legal/PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Zaza Teach",
  description: "How Zaza Teach collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}