"use client";
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import OptimizedImage from '@/components/OptimizedImage';
import { SectionCard } from '@/components/SectionCard';
import Callout from '@/components/Callout';
import PullQuote from '@/components/PullQuote';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'About', item: canonical('/about') }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function AboutClient() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleFounderLinkHover = () => {
    if (!prefersReducedMotion) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
  };

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Zaza Teach
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[72ch] mx-auto">
              Made by teachers, for teachers. Reclaiming time, energy, and passion for what matters most.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Mission Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  Every Sunday night, teachers across the world sit at their kitchen tables, laptops open, 
                  coffee growing cold, trying to turn curriculum standards into engaging lessons. It's 2 AM, 
                  and they're still crafting differentiated activities, searching for just the right resources, 
                  wondering if there's enough time to do it all justice.
                </p>
                <p className="text-lg leading-relaxed">
                  We know this story because we've lived it. Zaza Teach exists to change it.
                </p>
              </div>
              
              <Callout tone="mint" title="Our Promise">
                We believe teaching is a creative, deeply human profession that deserves better tools. 
                Our AI-powered lesson planning gives you back your evenings, your weekends, 
                and your energy for what truly matters: inspiring students.
              </Callout>
            </SectionCard>

            {/* Story Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  Zaza Teach was born from a simple observation: the best teachers spend too much time 
                  on logistics and not enough time on what makes them exceptional. After countless 
                  conversations with educators burned out by administrative overhead, we realized 
                  technology could amplify teacher brilliance instead of replacing it.
                </p>
              </div>

              <PullQuote cite="Year 4 teacher, Birmingham">
                I used to spend 4-5 hours every Sunday planning my week. Now I spend 30 minutes 
                reviewing and personalizing AI-generated lessons. I finally have time to think 
                about my students as individuals again.
              </PullQuote>

              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  By combining deep pedagogical understanding with cutting-edge AI, we've created 
                  tools that understand what teachers actually need: curriculum-aligned content 
                  that's easily customizable, time-saving without sacrificing quality, and designed 
                  to enhance rather than diminish the human connection at the heart of great teaching.
                </p>
              </div>
            </SectionCard>

            {/* Values Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
              >
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Teacher-Centered Design</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Every feature is designed with real classroom needs in mind. We don't just ask teachers 
                    what they want - we observe how they work and build tools that fit naturally into their workflow.
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy First</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Your lesson plans, student data, and teaching insights remain private and secure. 
                    We believe teacher intellectual property deserves the highest protection.
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Assisted, Not AI-Replaced</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Technology should amplify human expertise, not replace it. Our AI handles the 
                    heavy lifting so teachers can focus on the irreplaceable human elements of education.
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Accessible Excellence</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Powerful teaching tools shouldn't be luxury items. We're committed to making 
                    world-class lesson planning accessible to educators everywhere.
                  </p>
                </motion.div>
              </motion.div>

              <Callout tone="lavender" title="In Practice" className="mt-8">
                This means no vendor lock-in, transparent pricing, and tools that work whether 
                you're in a well-funded district or stretching every resource to serve your students.
              </Callout>
            </SectionCard>

            {/* Founder Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Founder</h2>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <OptimizedImage
                  src="/images/founder/greg-blackburn-headshot.jpg"
                  alt="Dr. Greg Blackburn, Founder of Zaza Teach"
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-2xl object-cover shadow-lg"
                  loading="lazy"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Dr. Greg Blackburn</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Founder & CEO</p>
                  </div>
                  
                  <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                    <p className="text-lg leading-relaxed">
                      Dr. Blackburn brings years of classroom experience and educational technology expertise 
                      to Zaza Teach. His vision is simple: create technology that amplifies teacher effectiveness 
                      while preserving the irreplaceable human connection that makes great education possible.
                    </p>
                  </div>

                  <PullQuote cite="Dr. Greg Blackburn">
                    The best teachers I know are creative problem-solvers who see potential in every student. 
                    Our job is to give them the time and tools to act on that vision.
                  </PullQuote>

                  <div className="pt-4">
                    <motion.a
                      href="/about-founder"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium text-lg group focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2 rounded-md"
                      onMouseEnter={handleFounderLinkHover}
                      onFocus={handleFounderLinkHover}
                      whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                      whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                    >
                      Read full story
                      <motion.span
                        animate={{ x: prefersReducedMotion ? 0 : [0, 4, 0] }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                    
                    {showConfetti && !prefersReducedMotion && (
                      <motion.div
                        className="fixed inset-0 pointer-events-none z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full"
                            style={{
                              left: `${50 + (Math.random() - 0.5) * 20}%`,
                              top: `${40 + (Math.random() - 0.5) * 10}%`,
                            }}
                            initial={{ scale: 0, y: 0, opacity: 1 }}
                            animate={{ 
                              scale: [0, 1, 0], 
                              y: [-20, -40, -60], 
                              opacity: [1, 1, 0],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ 
                              duration: 1, 
                              delay: i * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* CTA Section */}
            <SectionCard>
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Reclaim Your Time?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-[72ch] mx-auto leading-relaxed">
                  Join thousands of teachers who've discovered what it feels like to have their weekends back 
                  while delivering better lessons than ever before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="/pricing"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  >
                    Start Your Free Trial
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gray-600 focus-visible:outline-offset-2"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  >
                    Talk to Our Team
                  </motion.a>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Subtle dividers */}
          <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
        </div>
      </div>
    </>
  );
}