"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const documentHeight = document.documentElement;
      const totalScrollHeight = documentHeight.scrollHeight - documentHeight.clientHeight;
      
      if (totalScrollHeight > 0) {
        const scrollProgress = (documentHeight.scrollTop / totalScrollHeight) * 100;
        setProgress(scrollProgress);
      }
    };

    onScroll(); // Initial calculation
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div 
        className="h-full bg-brand transition-[width] duration-150 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}