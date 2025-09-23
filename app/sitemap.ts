import { MetadataRoute } from "next";
import { canonical } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/pricing", "/blog", "/resources", "/faqs",
    "/why-not-chatgpt", "/about", "/about-founder", "/support", "/privacy", "/terms",
    "/impressum", "/contact", "/mission", "/products", "/quote-wall", "/feature-request", "/cookies"
  ];
  
  const now = new Date();
  
  // Static routes
  const staticSitemap = staticRoutes.map((path) => ({
    url: canonical(path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7
  }));

  // Blog posts
  const posts = getAllPosts();
  const blogSitemap = posts.map((post) => ({
    url: canonical(`/blog/${post.slug}`),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticSitemap, ...blogSitemap];
}