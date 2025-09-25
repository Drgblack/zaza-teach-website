import type { Metadata } from "next";
import PrivacyClient from "@/components/legal/PrivacyClient";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie | Zaza Teach",
  description: "Wie Zaza Teach personenbezogene Daten erfasst, verwendet und schützt.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}