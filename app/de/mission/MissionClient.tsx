"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock, BookOpen, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from '@/components/LocaleProvider';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function MissionClient() {
  const t = useTranslations();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const values = [
    {
      icon: Clock,
      title: t('mission.values.teacherCentered.title'),
      description: t('mission.values.teacherCentered.description'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lock,
      title: t('mission.values.safeTrusted.title'),
      description: t('mission.values.safeTrusted.description'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: t('mission.values.timeRestored.title'),
      description: t('mission.values.timeRestored.description'),
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          variants={fadeUpVariant}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('mission.hero.title')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('mission.hero.subtitle')}
          </p>
        </motion.div>

        {/* Empathy Story Section */}
        <motion.section 
          className="mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-slate-700">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                {t('mission.empathy.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                {t('mission.empathy.paragraph2')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Pull Quote */}
        <motion.section 
          className="mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
        >
          <figure className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border-l-4 border-l-primary shadow-lg">
              <blockquote className="text-2xl md:text-3xl italic font-medium text-gray-900 dark:text-white leading-relaxed mb-6">
                "{t('mission.quote.text')}"
              </blockquote>
              <figcaption className="text-gray-600 dark:text-gray-400 font-medium">
                {t('mission.quote.author')}
              </figcaption>
            </div>
          </figure>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
            variants={staggerItem}
          >
            {t('mission.values.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="mb-16"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
        >
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-200 dark:border-purple-800">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('mission.vision.title')}
            </h2>
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-center">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                {t('mission.vision.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                {t('mission.vision.paragraph2')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariant}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('mission.cta.title')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('mission.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                <Link href="/pricing">{t('mission.cta.startFree')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg">
                <Link href="/resources">{t('mission.cta.exploreResources')}</Link>
              </Button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}