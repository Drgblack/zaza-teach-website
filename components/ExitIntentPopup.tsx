'use client';

import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { X, Download, Gift, Clock, Users, CheckCircle } from 'lucide-react';

interface ExitIntentPopupProps {
  isEnabled?: boolean;
  delayMs?: number;
  showOncePerSession?: boolean;
  leadMagnet?: {
    title: string;
    description: string;
    benefits: string[];
    downloadUrl?: string;
  };
}

const defaultLeadMagnet = {
  title: 'Free Teaching Toolkit',
  description: 'Get 25+ time-saving templates, prompts, and guides',
  benefits: [
    'Lesson plan templates for any subject',
    'AI prompts for educators',
    'Assessment rubrics and checklists',
    'Parent communication templates'
  ],
};

export function ExitIntentPopup({ 
  isEnabled = true,
  delayMs = 1000,
  showOncePerSession = true,
  leadMagnet = defaultLeadMagnet
}: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const sessionKey = 'exitIntentShown';
  const submittedKey = 'exitIntentSubmitted';

  // Check if popup should be shown
  const shouldShow = useCallback(() => {
    if (!isEnabled || hasTriggered) return false;
    
    if (showOncePerSession) {
      const hasShown = sessionStorage.getItem(sessionKey);
      const hasSubmitted = localStorage.getItem(submittedKey);
      if (hasShown || hasSubmitted) return false;
    }
    
    return true;
  }, [isEnabled, hasTriggered, showOncePerSession]);

  // Handle exit intent detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top of the viewport
    if (e.clientY <= 0 && shouldShow()) {
      setTimeout(() => {
        if (shouldShow()) {
          setIsOpen(true);
          setHasTriggered(true);
          if (showOncePerSession) {
            sessionStorage.setItem(sessionKey, 'true');
          }
          
          // Track exit intent trigger
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'exit_intent_triggered', {
              event_category: 'engagement',
              event_label: 'exit_intent_popup',
            });
          }
        }
      }, delayMs);
    }
  }, [shouldShow, delayMs, showOncePerSession]);

  // Handle scroll-based backup trigger (for mobile)
  const handleScroll = useCallback(() => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Trigger when user has scrolled 70% and is scrolling up (indicating they might leave)
    if (scrollPercentage > 70 && shouldShow()) {
      const currentScrollY = window.scrollY;
      
      setTimeout(() => {
        if (window.scrollY < currentScrollY && shouldShow()) {
          setIsOpen(true);
          setHasTriggered(true);
          if (showOncePerSession) {
            sessionStorage.setItem(sessionKey, 'true');
          }
        }
      }, 500);
    }
  }, [shouldShow, showOncePerSession]);

  useEffect(() => {
    if (!isEnabled) return;

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseLeave, handleScroll, isEnabled]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !agreeToEmails) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real implementation:
      // const response = await fetch('/api/exit-intent-signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, leadMagnet: leadMagnet.title }),
      // });

      setIsSubmitted(true);
      localStorage.setItem(submittedKey, 'true');
      
      // Track successful conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exit_intent_conversion', {
          event_category: 'conversion',
          event_label: 'exit_intent_signup',
          value: 1,
        });
      }

      // Auto-close after showing success message
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);

    } catch (error) {
      console.error('Exit intent signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    
    // Track popup dismissal
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exit_intent_dismissed', {
        event_category: 'engagement',
        event_label: 'exit_intent_popup',
      });
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-green-50 border-green-200">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-900 mb-2">
                Success! Check Your Email
              </h2>
              <p className="text-green-700 text-sm">
                Your teaching toolkit is on its way! Check your inbox for the download link.
              </p>
            </div>
            <Button onClick={() => setIsOpen(false)} className="w-full">
              Continue Reading
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <DialogHeader>
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl text-center">
            Wait! Don't Miss Out
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Before you go, grab our <strong>{leadMagnet.title}</strong> - 
            it's helped thousands of teachers save hours every week!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Lead Magnet Highlight */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border">
            <h3 className="font-semibold text-gray-900 mb-2">{leadMagnet.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{leadMagnet.description}</p>
            <ul className="space-y-1">
              {leadMagnet.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-4 text-center py-2">
            <div>
              <Users className="w-5 h-5 mx-auto text-blue-600 mb-1" />
              <p className="text-xs font-medium">10,000+</p>
              <p className="text-xs text-gray-600">Teachers</p>
            </div>
            <div>
              <Clock className="w-5 h-5 mx-auto text-green-600 mb-1" />
              <p className="text-xs font-medium">5+ Hours</p>
              <p className="text-xs text-gray-600">Saved Weekly</p>
            </div>
            <div>
              <Download className="w-5 h-5 mx-auto text-purple-600 mb-1" />
              <p className="text-xs font-medium">100% Free</p>
              <p className="text-xs text-gray-600">No Strings</p>
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
                required
                className="text-center"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agree-exit"
                checked={agreeToEmails}
                onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
                className="mt-0.5"
              />
              <label htmlFor="agree-exit" className="text-xs text-gray-600 leading-tight">
                Send me the free toolkit and occasional teaching tips. 
                Unsubscribe anytime.
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full text-lg py-6" 
              disabled={isSubmitting || !agreeToEmails || !email}
            >
              <Download className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Sending...' : 'Get My Free Toolkit'}
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              No Spam
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              Instant Download
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              Free Forever
            </Badge>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Join the community that's revolutionizing teaching with AI
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}