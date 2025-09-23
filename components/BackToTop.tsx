'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  showAfter?: number;
  className?: string;
  smooth?: boolean;
}

export function BackToTop({ 
  showAfter = 300, 
  className = '',
  smooth = true 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }

    // Track back-to-top usage
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'back_to_top_click', {
        event_category: 'engagement',
        event_label: 'back_to_top_button',
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`
        fixed bottom-6 right-6 z-50 
        h-12 w-12 rounded-full shadow-lg 
        bg-primary hover:bg-primary/90 
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${className}
      `}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}

// Alternative floating action button style
export function BackToTopFAB({ 
  showAfter = 300, 
  className = '',
  smooth = true 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'back_to_top_fab_click', {
        event_category: 'engagement',
        scroll_progress: Math.round(scrollProgress),
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className="relative">
        {/* Progress ring */}
        <svg
          className="w-14 h-14 transform -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
            className="text-primary transition-all duration-300 ease-out"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="
            absolute inset-1 rounded-full 
            bg-white hover:bg-gray-50 
            text-primary hover:text-primary/80
            shadow-lg hover:shadow-xl
            transition-all duration-300 ease-in-out
            hover:scale-105
            border border-gray-200
          "
          aria-label="Back to top"
          title={`Back to top (${Math.round(scrollProgress)}% scrolled)`}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// Compact inline version for specific sections
export function BackToTopInline({ 
  className = '',
  text = 'Back to top',
  smooth = true 
}: BackToTopProps & { text?: string }) {
  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      size="sm"
      className={`text-muted-foreground hover:text-foreground ${className}`}
    >
      <ArrowUp className="h-3 w-3 mr-1" />
      {text}
    </Button>
  );
}