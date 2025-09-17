"use client";

import { useEffect } from "react";

export default function PromptlyRedirectPage() {
  useEffect(() => {
    // Redirect to Zaza Promptly website
    window.location.href = "https://www.zazapromptly.com";
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8A2BE2] mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Redirecting to Zaza Promptly...
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          If you're not redirected automatically, 
          <a 
            href="https://www.zazapromptly.com" 
            className="text-[#8A2BE2] hover:underline ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}