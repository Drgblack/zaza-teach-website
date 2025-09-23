// components/SEOJsonLd.tsx
type Thing = Record<string, unknown>;

function Script({ data }: { data: Thing }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd({ site = "https://zazateach.com" }: { site?: string }) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zaza Teach",
    "alternateName": "Zaza Technologies",
    "url": site,
    "description": "AI-powered lesson planning tool for educators. Create curriculum-aligned lessons in minutes.",
    "publisher": {
      "@type": "Organization",
      "name": "Zaza Technologies",
      "url": site,
      "logo": `${site}/og-logo.png`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${site}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Zaza Teach",
      "applicationCategory": "EducationalApplication"
    }
  };
  return <Script data={data} />;
}

export function OrgJsonLd({ site = "https://zazateach.com" }: { site?: string }) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zaza Technologies",
    "url": site,
    "logo": `${site}/og-logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/zaza-technologies",
      "https://www.tiktok.com/@zazateach"
    ],
    "founder": { "@type": "Person", "name": "Dr Greg Blackburn", "url": `${site}/about` }
  };
  return <Script data={data} />;
}

export function TeachAppJsonLd({
  site = "https://zazateach.com",
  pageUrl = "https://zazateach.com",
  screenshot = "https://zazateach.com/images/teach-screenshot.jpg"
}: { site?: string; pageUrl?: string; screenshot?: string }) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zaza Teach",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "url": pageUrl,
    "image": screenshot,
    "description": "Zaza Teach helps teachers plan lessons in minutes - aligned to objectives, with export to Word or PDF and practical privacy choices for schools.",
    "publisher": { "@type": "Organization", "name": "Zaza Technologies", "url": site },
    "audience": { "@type": "Audience", "audienceType": "Teachers" },
    "availableLanguage": ["en", "de", "fr", "es", "it"],
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD", "url": `${site}/pricing` }
  };
  return <Script data={data} />;
}

export function BreadcrumbsJsonLd({ items }: { items: { name: string; item: string }[] }) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((x, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": x.name,
      "item": x.item
    }))
  };
  return <Script data={data} />;
}

export function FAQJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((it) => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a }
    }))
  };
  return <Script data={data} />;
}

export function BlogPostingJsonLd({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  tags,
  author,
  site = "https://zazateach.com"
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  tags: string[];
  author?: string;
  site?: string;
}) {
  const data: Thing = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "url": `${site}/blog/${slug}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": author ? {
      "@type": "Person",
      "name": author,
      "url": `${site}/about`
    } : {
      "@type": "Organization",
      "name": "Zaza Technologies",
      "url": site
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zaza Technologies",
      "url": site,
      "logo": {
        "@type": "ImageObject",
        "url": `${site}/og-logo.png`
      }
    },
    "keywords": tags.join(", "),
    "articleSection": "Education",
    "inLanguage": "en-US"
  };
  return <Script data={data} />;
}