'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught:', error);
    }
    
    // In production, you could send error to monitoring service
    // Example: logErrorToService(error);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry for the inconvenience. Our team has been notified and is working on a fix.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="w-5 h-5" />
              What happened?
            </CardTitle>
            <CardDescription>
              An unexpected error occurred while loading this page. This could be due to:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-6">
              <li>A temporary server issue</li>
              <li>Network connectivity problems</li>
              <li>An unexpected application error</li>
            </ul>

            {isDevelopment && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                <h4 className="font-medium text-red-900 mb-2">Development Error Details:</h4>
                <div className="text-sm">
                  <p className="font-medium text-red-800 mb-1">Error Message:</p>
                  <p className="font-mono text-red-700 bg-red-100 p-2 rounded text-xs break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <>
                      <p className="font-medium text-red-800 mb-1 mt-2">Error ID:</p>
                      <p className="font-mono text-red-700 text-xs">{error.digest}</p>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={reset} className="flex-1" size="lg">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={() => (window.location.href = '/')}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <p>
            If this problem persists, please{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              contact our support team
            </a>{' '}
            for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}