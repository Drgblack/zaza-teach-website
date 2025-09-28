import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/pricing", "/blog", "/resources", "/faqs",
    "/why-not-chatgpt", "/about", "/about-founder", "/support", "/privacy", "/terms",
    "/impressum", "/contact", "/mission", "/products", "/quote-wall", "/feature-request", "/cookies"
  ];
  
  const locales = ['en', 'de'];
  const now = new Date();
  
  // Static routes for all locales
  const staticSitemap = staticRoutes.flatMap((path) => 
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7
    }))
  );

  // Blog posts for all locales
  const posts = getAllPosts();
  const blogSitemap = posts.flatMap((post) => 
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  );

  return [...staticSitemap, ...blogSitemap];
}