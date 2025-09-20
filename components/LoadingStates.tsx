'use client';

import { motion } from 'framer-motion';
import { Loader2, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-[#66B2B2]',
    secondary: 'text-[#8A2BE2]',
    white: 'text-white'
  };

  return (
    <Loader2 
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`} 
    />
  );
}

interface PageLoadingProps {
  message?: string;
}

export function PageLoading({ message = 'Loading...' }: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5]">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <div className="w-full h-full border-4 border-[#66B2B2]/20 border-t-[#66B2B2] rounded-full"></div>
          </motion.div>
          
          <h2 className="text-2xl font-bold text-[#2C3E35] mb-2">
            {message}
          </h2>
          <p className="text-gray-600">
            Setting up your teaching experience...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface ContentLoadingProps {
  lines?: number;
  className?: string;
}

export function ContentLoading({ lines = 3, className = '' }: ContentLoadingProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CardLoadingProps {
  count?: number;
  className?: string;
}

export function CardLoading({ count = 3, className = '' }: CardLoadingProps) {
  return (
    <div className={`grid gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  type?: 'error' | 'warning' | 'info';
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an error while loading this content. Please try again.',
  onRetry,
  retryText = 'Try Again',
  type = 'error'
}: ErrorStateProps) {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="w-12 h-12 text-yellow-500" />;
      case 'info':
        return <AlertCircle className="w-12 h-12 text-blue-500" />;
      default:
        return <AlertCircle className="w-12 h-12 text-red-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-red-50 border-red-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-8 border-2 ${getBgColor()} text-center`}
    >
      <div className="flex justify-center mb-4">
        {getIcon()}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {message}
      </p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          {retryText}
        </button>
      )}
    </motion.div>
  );
}

interface SuccessStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  onAction?: () => void;
}

export function SuccessState({
  title = 'Success!',
  message = 'Your action was completed successfully.',
  actionText,
  onAction
}: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center"
    >
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {message}
      </p>
      
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {actionText}
        </button>
      )}
    </motion.div>
  );
}

interface ButtonLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ButtonWithLoading({
  isLoading,
  children,
  loadingText = 'Loading...',
  className = '',
  onClick,
  disabled = false
}: ButtonLoadingProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`flex items-center justify-center transition-all duration-300 disabled:opacity-50 ${className}`}
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color="white" className="mr-2" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}

// Skeleton loading for specific content types
export function LessonPlanSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>
      
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      
      <div className="mt-6 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        <div className="h-3 bg-gray-200 rounded w-1/5"></div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-start space-x-4 mb-6">
        <div className="rounded-full bg-gray-200 h-16 w-16"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}