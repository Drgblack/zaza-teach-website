'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, BookOpen, Sparkles } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'hero' | 'inline';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  features?: string[];
  showBenefits?: boolean;
  className?: string;
}

export default function CallToActionSection({
  variant = 'primary',
  title,
  subtitle,
  buttonText = 'Start Your Free Trial',
  features = [
    'Create your first lesson in under 5 minutes',
    'No credit card required for trial',
    'Access to 1,000+ curriculum-aligned templates',
    'Export to Word, PDF, or Google Docs'
  ],
  showBenefits = true,
  className = ''
}: CTAProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to signup with email pre-filled
    window.location.href = `/signup${email ? `?email=${encodeURIComponent(email)}` : ''}`;
  };

  const renderHeroVariant = () => (
    <div className="bg-gradient-to-br from-[#66B2B2] via-[#66B2B2] to-[#8A2BE2] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title || 'Transform Your Teaching with AI'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                {subtitle || 'Plan lessons in minutes, not hours. Join 5,000+ teachers who\'ve reclaimed their evenings.'}
              </p>
              
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 text-lg"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-[#66B2B2] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-[#66B2B2] border-t-transparent rounded-full animate-spin mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <>
                        {buttonText}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-white/80 text-sm">
                  Free 14-day trial • No credit card required • Cancel anytime
                </p>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <OptimizedImage
                src="/images/hero-main.png"
                alt="Zaza Teach App Interface"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority={true}
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4"
            >
              <Clock className="w-8 h-8 text-white" />
              <p className="text-white text-sm mt-1">5 min lessons</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4"
            >
              <Users className="w-8 h-8 text-white" />
              <p className="text-white text-sm mt-1">5,000+ teachers</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const renderPrimaryVariant = () => (
    <div className="bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5] py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-6">
            {title || 'Ready to Transform Your Teaching?'}
          </h2>
          <p className="text-xl text-[#2C3E35]/80 mb-8 max-w-2xl mx-auto">
            {subtitle || 'Join thousands of teachers who save hours every week with AI-powered lesson planning.'}
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
            <form onSubmit={handleSignUp} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email to get started"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#66B2B2] focus:border-transparent text-lg"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center min-w-[200px]"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Setting Up...
                    </div>
                  ) : (
                    <>
                      {buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-gray-600 text-sm">
                ✓ Free 14-day trial • ✓ No credit card required • ✓ Cancel anytime
              </p>
            </form>
          </div>

          {showBenefits && (
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center text-left bg-white/50 rounded-2xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#66B2B2] mr-3 flex-shrink-0" />
                  <span className="text-[#2C3E35]">{feature}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );

  const renderInlineVariant = () => (
    <div className="bg-gradient-to-r from-[#66B2B2]/10 to-[#8A2BE2]/10 rounded-3xl p-8 my-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#2C3E35] mb-4">
          {title || 'Start Planning Better Lessons Today'}
        </h3>
        <p className="text-[#2C3E35]/80 mb-6">
          {subtitle || 'See why teachers love Zaza Teach in your first 5 minutes.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#66B2B2]"
          />
          <button
            onClick={handleSignUp}
            disabled={isLoading}
            className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center min-w-[140px]"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                Try Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderSecondaryVariant = () => (
    <div className="border-2 border-[#66B2B2] rounded-3xl p-8 bg-white">
      <div className="text-center">
        <Sparkles className="w-12 h-12 text-[#66B2B2] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#2C3E35] mb-3">
          {title || 'Ready to Save Hours of Planning?'}
        </h3>
        <p className="text-gray-600 mb-6">
          {subtitle || 'Start your free trial and create your first lesson in minutes.'}
        </p>
        <button
          onClick={handleSignUp}
          disabled={isLoading}
          className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center mx-auto"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Loading...
            </div>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );

  const variants = {
    hero: renderHeroVariant,
    primary: renderPrimaryVariant,
    inline: renderInlineVariant,
    secondary: renderSecondaryVariant
  };

  return (
    <div className={className}>
      {variants[variant]()}
    </div>
  );
}