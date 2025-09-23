'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Download, 
  CheckCircle, 
  Gift, 
  Clock, 
  Users,
  BookOpen,
  Zap
} from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  leadMagnet?: 'lesson-templates' | 'ai-prompts' | 'time-savers' | 'assessment-guide';
  className?: string;
}

const leadMagnets = {
  'lesson-templates': {
    title: 'Free Lesson Plan Templates',
    description: '10 Ready-to-Use Templates',
    details: 'Adaptable for any subject or grade level',
    icon: BookOpen,
    color: 'bg-blue-500',
  },
  'ai-prompts': {
    title: 'AI Teaching Prompts Pack',
    description: '50+ Smart Prompts for Educators',
    details: 'Perfect for ChatGPT, Claude & more',
    icon: Zap,
    color: 'bg-purple-500',
  },
  'time-savers': {
    title: 'Time-Saving Checklist',
    description: '25 Ways to Save 10+ Hours/Week',
    details: 'Proven strategies from veteran teachers',
    icon: Clock,
    color: 'bg-green-500',
  },
  'assessment-guide': {
    title: 'Assessment & Rubric Guide',
    description: 'Complete Grading Toolkit',
    details: 'Fair, fast, and comprehensive methods',
    icon: CheckCircle,
    color: 'bg-orange-500',
  },
};

export function NewsletterSignup({ 
  variant = 'default', 
  leadMagnet = 'lesson-templates',
  className = '' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [error, setError] = useState('');

  const magnet = leadMagnets[leadMagnet];
  const IconComponent = magnet.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!agreeToEmails) {
      setError('Please agree to receive our newsletter');
      return;
    }

    setIsLoading(true);

    try {
      // In a real implementation, you would integrate with your email service
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Example API call:
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, leadMagnet }),
      // });
      
      setIsSubscribed(true);
      
      // Track successful signup
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          method: leadMagnet,
          email_hash: btoa(email).slice(0, 8), // Anonymized tracking
        });
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className={`${className} border-green-200 bg-green-50`}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Welcome to our community!</h3>
              <p className="text-green-700 text-sm mb-4">
                Check your email for your <strong>{magnet.title}</strong> download link.
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Download className="w-3 h-3 mr-1" />
                Download ready in your inbox
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${className} bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !agreeToEmails}>
            {isLoading ? 'Joining...' : 'Get Free Templates'}
          </Button>
        </form>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="agree-compact"
            checked={agreeToEmails}
            onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
          />
          <label htmlFor="agree-compact" className="text-xs text-gray-600">
            I agree to receive helpful teaching tips via email
          </label>
        </div>
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`${className} bg-blue-50 border border-blue-200 rounded-lg p-4`}>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-8 ${magnet.color} rounded-full flex items-center justify-center`}>
            <IconComponent className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{magnet.title}</h4>
            <p className="text-sm text-gray-600">{magnet.description}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agree-inline"
              checked={agreeToEmails}
              onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
              className="mt-0.5"
            />
            <label htmlFor="agree-inline" className="text-xs text-gray-600 leading-tight">
              Send me the free download and weekly teaching tips
            </label>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading || !agreeToEmails}>
            <Download className="w-4 h-4 mr-2" />
            {isLoading ? 'Sending...' : 'Download Free'}
          </Button>
        </form>
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>
    );
  }

  // Default variant
  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Gift className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">Get Your Free Teaching Resources</CardTitle>
        <CardDescription className="text-base">
          Join 10,000+ educators already saving time with our proven templates and strategies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Lead Magnet Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 ${magnet.color} rounded-full flex items-center justify-center`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{magnet.title}</h3>
              <p className="text-sm text-gray-600">{magnet.description}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">{magnet.details}</p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <Clock className="w-6 h-6 mx-auto text-green-600" />
            <p className="text-sm font-medium">Save Hours Weekly</p>
          </div>
          <div className="space-y-2">
            <Users className="w-6 h-6 mx-auto text-blue-600" />
            <p className="text-sm font-medium">Join 10k+ Teachers</p>
          </div>
          <div className="space-y-2">
            <Mail className="w-6 h-6 mx-auto text-purple-600" />
            <p className="text-sm font-medium">Weekly Tips & Resources</p>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agree-default"
              checked={agreeToEmails}
              onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
              className="mt-0.5"
            />
            <label htmlFor="agree-default" className="text-sm text-gray-600 leading-tight">
              I agree to receive the free download and weekly teaching tips. 
              You can unsubscribe at any time.
            </label>
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <Button 
            type="submit" 
            className="w-full text-lg py-6" 
            disabled={isLoading || !agreeToEmails}
          >
            <Download className="w-5 h-5 mr-2" />
            {isLoading ? 'Getting Your Resources...' : `Get My Free ${magnet.title}`}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center">
          No spam, ever. We respect your inbox and your time.
        </p>
      </CardContent>
    </Card>
  );
}