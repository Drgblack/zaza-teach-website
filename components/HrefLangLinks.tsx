import { getHrefLangData } from '@/lib/seo';

interface HrefLangLinksProps {
  path?: string;
}

export function HrefLangLinks({ path = '' }: HrefLangLinksProps) {
  const hrefLangData = getHrefLangData(path);
  
  return (
    <>
      {hrefLangData.map(({ hreflang, url }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={url}
        />
      ))}
    </>
  );
}