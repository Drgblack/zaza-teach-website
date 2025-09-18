import { MetadataRoute } from "next";
import { canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/products", "/pricing", "/blog", "/resources", "/faqs",
    "/why-not-chatgpt", "/about", "/support", "/privacy", "/terms",
    "/impressum", "/facts", "/ai-usage"
  ];
  
  const now = new Date();
  
  return routes.map((p) => ({
    url: canonical(p),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "/" ? 1 : 0.7
  }));
}