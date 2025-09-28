'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: (e: any) => void;
  fill?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 75,
  onLoad,
  onError,
  fill = false,
  style
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: any) => {
    setHasError(true);
    onError?.(e);
  };

  const handleLoad = () => {
    onLoad?.();
  };

  // For external URLs (like GitHub), use unoptimized
  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ 
          width: width || '100%', 
          height: height || 'auto',
          ...style
        }}
      >
        <span className="text-gray-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  // If using fill prop
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        unoptimized={isExternal}
        style={style}
      />
    );
  }

  // If width and height are provided
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        unoptimized={isExternal}
        style={style}
      />
    );
  }

  // Fallback to regular img for cases where Next.js Image can't be used
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleError}
      onLoad={handleLoad}
      style={style}
    />
  );
}