"use client";
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import OptimizedImage from '@/components/OptimizedImage';
import { SectionCard } from '@/components/SectionCard';
import Callout from '@/components/Callout';
import PullQuote from '@/components/PullQuote';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from '@/components/LocaleProvider';

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
  const t = useTranslations();
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

  const breadcrumbs = [
    { name: t('about.breadcrumbs.home'), item: canonical('/') },
    { name: t('about.breadcrumbs.about'), item: canonical('/about') }
  ];

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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[72ch] mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Mission Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.mission.title')}
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  {t('about.mission.paragraph1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('about.mission.paragraph2')}
                </p>
              </div>
              
              <Callout tone="mint" title={t('about.mission.promise.title')}>
                {t('about.mission.promise.content')}
              </Callout>
            </SectionCard>

            {/* Story Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.story.title')}
              </h2>
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  {t('about.story.paragraph1')}
                </p>
              </div>

              <PullQuote cite={t('about.story.quote.author')}>
                {t('about.story.quote.text')}
              </PullQuote>

              <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                <p className="text-lg leading-relaxed">
                  {t('about.story.paragraph2')}
                </p>
              </div>
            </SectionCard>

            {/* Values Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.values.title')}
              </h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
              >
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('about.values.teacherCentered.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('about.values.teacherCentered.description')}
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('about.values.privacyFirst.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('about.values.privacyFirst.description')}
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('about.values.aiAssisted.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('about.values.aiAssisted.description')}
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t('about.values.accessibleExcellence.title')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('about.values.accessibleExcellence.description')}
                  </p>
                </motion.div>
              </motion.div>

              <Callout tone="lavender" title={t('about.values.inPractice.title')} className="mt-8">
                {t('about.values.inPractice.content')}
              </Callout>
            </SectionCard>

            {/* Founder Section */}
            <SectionCard>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.founder.title')}
              </h2>
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
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t('about.founder.name')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {t('about.founder.role')}
                    </p>
                  </div>
                  
                  <div className="prose prose-lg prose-slate dark:prose-invert max-w-[72ch]">
                    <p className="text-lg leading-relaxed">
                      {t('about.founder.bio')}
                    </p>
                  </div>

                  <PullQuote cite={t('about.founder.quote.author')}>
                    {t('about.founder.quote.text')}
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
                      {t('about.founder.readMore')}
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.cta.title')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-[72ch] mx-auto leading-relaxed">
                  {t('about.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="/pricing"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-purple-600 focus-visible:outline-offset-2"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  >
                    {t('about.cta.startTrial')}
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gray-600 focus-visible:outline-offset-2"
                    whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
                  >
                    {t('about.cta.contactTeam')}
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