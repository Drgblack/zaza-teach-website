import type { Metadata } from "next";
import CookiesClient from "@/components/legal/CookiesClient";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | Zaza Teach",
  description: "Wie Zaza Teach Cookies und ähnliche Technologien verwendet.",
};

export default function CookiesPage() {
  return <CookiesClient />;
}