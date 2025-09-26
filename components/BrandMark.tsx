import Image from 'next/image';
import Link from 'next/link';

interface BrandMarkProps {
  size?: number;
  locale?: string;
}

export function BrandMark({ size = 28, locale = 'en' }: BrandMarkProps) {
  return (
    <Link href={`/${locale}`} aria-label="Zaza Teach home" className="inline-flex items-center gap-2">
      <Image
        src="/brand/zaza-z-mark.svg"
        alt=""
        width={size}
        height={size}
        priority
        className="inline-block align-middle select-none"
      />
      <span className="sr-only">Zaza Teach</span>
    </Link>
  );
}