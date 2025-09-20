'use client';

import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: (e: any) => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  sizes,
  quality = 75,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>();

  // Use native lazy loading for modern browsers
  const shouldUseLazyLoading = !priority && loading === 'lazy';

  useEffect(() => {
    if (priority || loading === 'eager') {
      setImageSrc(src);
      return;
    }

    // Fallback for browsers that don't support native lazy loading
    if (!('loading' in HTMLImageElement.prototype)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            setImageSrc(src);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px'
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      setImageSrc(src);
    }
  }, [src, priority, loading]);

  const handleError = (e: any) => {
    setHasError(true);
    onError?.(e);
  };

  const handleLoad = () => {
    onLoad?.();
  };

  // For external URLs (like GitHub), use the original src
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  const finalSrc = isExternal ? src : imageSrc;

  // Generate srcSet for different screen densities if not external
  const generateSrcSet = () => {
    if (isExternal || !imageSrc) return undefined;
    
    return `${imageSrc} 1x, ${imageSrc} 2x`;
  };

  // Add aspect ratio to prevent layout shift
  const aspectRatio = width && height ? width / height : undefined;
  const paddingBottom = aspectRatio ? `${(1 / aspectRatio) * 100}%` : undefined;

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ 
          width: width || '100%', 
          height: height || 'auto',
          aspectRatio: aspectRatio ? `${width}/${height}` : undefined
        }}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: width || '100%',
        maxWidth: width || '100%',
        paddingBottom: height && !width ? paddingBottom : undefined
      }}
    >
      <img
        ref={imgRef}
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={shouldUseLazyLoading ? 'lazy' : 'eager'}
        decoding={priority ? 'sync' : 'async'}
        onError={handleError}
        onLoad={handleLoad}
        srcSet={generateSrcSet()}
        sizes={sizes}
        style={{
          aspectRatio: aspectRatio ? `${width}/${height}` : undefined,
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  );
}