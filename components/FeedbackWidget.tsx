'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  MessageCircle, 
  X, 
  Send, 
  CheckCircle, 
  ThumbsUp, 
  ThumbsDown,
  Star,
  Bug,
  Lightbulb,
  Heart,
  AlertCircle
} from 'lucide-react';

interface FeedbackWidgetProps {
  variant?: 'floating' | 'inline' | 'modal';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  onSubmit?: (feedback: FeedbackData) => void;
}

interface FeedbackData {
  type: 'general' | 'bug' | 'feature' | 'content';
  rating?: number;
  message: string;
  email?: string;
  page: string;
  userAgent: string;
}

const feedbackTypes = [
  { id: 'general', label: 'General Feedback', icon: MessageCircle, color: 'text-blue-600' },
  { id: 'bug', label: 'Report Bug', icon: Bug, color: 'text-red-600' },
  { id: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'text-yellow-600' },
  { id: 'content', label: 'Content Suggestion', icon: Heart, color: 'text-purple-600' },
];

export function FeedbackWidget({ 
  variant = 'floating',
  position = 'bottom-right',
  className = '',
  onSubmit
}: FeedbackWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackType, setFeedbackType] = useState<string>('general');
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [quickFeedback, setQuickFeedback] = useState<'positive' | 'negative' | null>(null);

  const getPositionClass = () => {
    switch (position) {
      case 'bottom-right': return 'bottom-6 right-6';
      case 'bottom-left': return 'bottom-6 left-6';
      case 'top-right': return 'top-6 right-6';
      case 'top-left': return 'top-6 left-6';
      default: return 'bottom-6 right-6';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const feedbackData: FeedbackData = {
      type: feedbackType as any,
      rating: rating || undefined,
      message,
      email: email || undefined,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
    };

    try {
      // Call custom onSubmit handler if provided
      if (onSubmit) {
        await onSubmit(feedbackData);
      } else {
        // Default implementation - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real implementation:
        // const response = await fetch('/api/feedback', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(feedbackData),
        // });
      }

      // Track feedback submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'feedback_submitted', {
          event_category: 'engagement',
          event_label: feedbackType,
          feedback_rating: rating,
        });
      }

      setIsSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setMessage('');
        setEmail('');
        setRating(0);
        setFeedbackType('general');
      }, 2000);

    } catch (error) {
      console.error('Feedback submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickFeedback = async (type: 'positive' | 'negative') => {
    setQuickFeedback(type);

    // Track quick feedback
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quick_feedback', {
        event_category: 'engagement',
        event_label: type,
        page: window.location.pathname,
      });
    }

    // Auto-hide after a moment
    setTimeout(() => {
      setQuickFeedback(null);
    }, 3000);
  };

  const StarRating = () => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className="p-1 hover:scale-110 transition-transform"
        >
          <Star
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-yellow-300'
            }`}
          />
        </button>
      ))}
    </div>
  );

  const FeedbackForm = () => {
    if (isSubmitted) {
      return (
        <div className="text-center space-y-4 py-6">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-green-900">Thank you!</h3>
            <p className="text-sm text-green-700">
              Your feedback helps us improve the experience for all educators.
            </p>
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Feedback Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">What type of feedback?</Label>
          <RadioGroup value={feedbackType} onValueChange={setFeedbackType}>
            <div className="grid grid-cols-2 gap-2">
              {feedbackTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label
                    htmlFor={type.id}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <type.icon className={`w-4 h-4 ${type.color}`} />
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Rating (for general feedback) */}
        {feedbackType === 'general' && (
          <div>
            <Label className="text-sm font-medium mb-2 block">How would you rate your experience?</Label>
            <StarRating />
          </div>
        )}

        {/* Message */}
        <div>
          <Label htmlFor="feedback-message" className="text-sm font-medium mb-2 block">
            Tell us more
          </Label>
          <Textarea
            id="feedback-message"
            placeholder={
              feedbackType === 'bug' 
                ? "Please describe the issue you encountered..." 
                : feedbackType === 'feature'
                ? "What feature would you like to see?"
                : feedbackType === 'content'
                ? "How can we improve our content?"
                : "Share your thoughts, suggestions, or questions..."
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="resize-none"
          />
        </div>

        {/* Email (optional) */}
        <div>
          <Label htmlFor="feedback-email" className="text-sm font-medium mb-2 block">
            Email (optional)
          </Label>
          <Input
            id="feedback-email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Only if you'd like a response or updates on your feedback
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting || !message.trim()}
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Feedback'}
        </Button>
      </form>
    );
  };

  // Quick feedback overlay
  if (quickFeedback) {
    return (
      <div className={`fixed ${getPositionClass()} z-50 ${className}`}>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-700 font-medium">
              Thanks for your feedback!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Floating variant
  if (variant === 'floating') {
    return (
      <div className={`fixed ${getPositionClass()} z-50 ${className}`}>
        {!isOpen ? (
          <div className="space-y-2">
            {/* Quick feedback buttons */}
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleQuickFeedback('positive')}
                className="bg-white shadow-lg hover:bg-green-50 border-green-200"
              >
                <ThumbsUp className="w-4 h-4 text-green-600" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleQuickFeedback('negative')}
                className="bg-white shadow-lg hover:bg-red-50 border-red-200"
              >
                <ThumbsDown className="w-4 h-4 text-red-600" />
              </Button>
            </div>
            
            {/* Main feedback button */}
            <Button
              onClick={() => setIsOpen(true)}
              className="shadow-lg rounded-full w-14 h-14"
              size="icon"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        ) : (
          <Card className="w-80 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Feedback</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                Help us improve your experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm />
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Modal variant
  if (variant === 'modal') {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className={className}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Feedback
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Your Feedback</DialogTitle>
            <DialogDescription>
              Help us improve your experience on our platform
            </DialogDescription>
          </DialogHeader>
          <FeedbackForm />
        </DialogContent>
      </Dialog>
    );
  }

  // Inline variant
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">We'd love your feedback</CardTitle>
        <CardDescription>
          Help us improve your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FeedbackForm />
      </CardContent>
    </Card>
  );
}

// Minimal page feedback component
export function PageFeedback({ className = '' }: { className?: string }) {
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    
    // Track page feedback
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_feedback', {
        event_category: 'engagement',
        event_label: type,
        page: window.location.pathname,
      });
    }
  };

  if (feedback) {
    return (
      <div className={`text-center py-4 ${className}`}>
        <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-2" />
        <p className="text-sm text-green-700">Thanks for your feedback!</p>
      </div>
    );
  }

  return (
    <div className={`text-center py-4 ${className}`}>
      <p className="text-sm text-muted-foreground mb-3">Was this page helpful?</p>
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleFeedback('helpful')}
        >
          <ThumbsUp className="w-4 h-4 mr-1" />
          Yes
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleFeedback('not-helpful')}
        >
          <ThumbsDown className="w-4 h-4 mr-1" />
          No
        </Button>
      </div>
    </div>
  );
}