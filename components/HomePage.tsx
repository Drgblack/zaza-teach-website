"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import PrimaryCTA from './PrimaryCTA';
import LiftCard from './ui/LiftCard';
import { BookOpen, Clock, Users, Sparkles, ArrowRight, Star, CheckCircle, X, Zap, FileText, Share2, Globe, Heart, Coffee, AlertTriangle, Battery, ChevronLeft, ChevronRight } from 'lucide-react';
import { AIOptimizedContent, SchemaEnhancedText, EDUCATION_SEMANTIC_KEYWORDS, AI_EDUCATION_TOPICS } from './AIOptimizedContent';
import { useTranslations } from './LocaleProvider';
import { trackCtaClick, trackPricingClick } from './GoogleAnalytics';

export default function HomePage() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safe array access with fallbacks
  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };
  
  // Get teachers from translations with fallback to English
  const getTeachers = () => {
    const carouselTeachers = t('home.carousel.teachers');
    if (Array.isArray(carouselTeachers) && carouselTeachers.length > 0) {
      return carouselTeachers.map((teacher, index) => ({
        ...teacher,
        image: [
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ][index]
      }));
    }
    
    // Fallback to English
    return [
      {
        name: "Ms. Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        subject: "Elementary Mathematics",
        quote: "Zaza Teach gives me my evenings back while keeping my lessons engaging"
      },
      {
        name: "Mr. David Chen", 
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        subject: "High School Science",
        quote: "From 3 hours to 5 minutes - this tool is a game changer"
      },
      {
        name: "Ms. Aisha Thompson",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
        subject: "Middle School English",
        quote: "Finally, lesson planning that sparks creativity instead of killing it"
      },
      {
        name: "Ms. Rebecca Walsh",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        subject: "Elementary Art & Music",
        quote: "My students get more creative lessons, and I get my weekend back"
      },
      {
        name: "Mr. James Foster",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        subject: "High School History",
        quote: "Professional-quality lessons without the late-night stress"
      }
    ];
  };

  const teachers = getTeachers();

  // Auto-rotate slides every 4 seconds (for both hero and testimonial carousels)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(teachers.length, 5));
    }, 4000);
    return () => clearInterval(timer);
  }, [teachers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teachers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#66B2B2] to-[#8A2BE2] rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[#2C3E35] to-[#8A2BE2] bg-clip-text text-transparent">
                  Zaza Teach
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E35] mb-6 leading-tight">
                {(() => {
                  const title = t('home.hero.title');
                  const highlightWord = title.includes('teachers.') ? 'teachers.' : 'Lehrer.';
                  return title.split(highlightWord).map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && <span className="bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] bg-clip-text text-transparent">{highlightWord}</span>}
                    </span>
                  ));
                })()}
              </h2>
              
              <p className="text-xl text-[#2C3E35]/80 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-4">
                <PrimaryCTA
                  label={t('home.hero.cta')}
                  ariaLabel="Start your free Zaza Teach trial from homepage hero"
                  from="home_hero"
                />
              </div>
              
              <p className="text-[#2C3E35]/70 text-base mb-2 text-center lg:text-left">
                {t('home.hero.crossSell')}
              </p>
              
              <p className="text-[#2C3E35]/60 text-lg text-center lg:text-left">
                {t('home.hero.subtext')}
              </p>
              
              <div className="mt-4 p-3 bg-[#66B2B2]/10 rounded-lg border border-[#66B2B2]/20">
                <p className="text-[#2C3E35]/70 text-sm text-center lg:text-left font-medium">
                  {t('home.hero.trustKicker')}
                </p>
              </div>
            </motion.div>

            {/* Right Column - Teacher Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#66B2B2]/20 to-[#8A2BE2]/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#FFD700]/20 to-[#E0115F]/20 rounded-2xl transform -rotate-2"></div>
                
                {/* Carousel Container */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl overflow-hidden">
                  <div className="relative h-96 md:h-[450px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={teachers[currentSlide].image}
                          alt={`${teachers[currentSlide].name} - ${teachers[currentSlide].subject} teacher using Zaza Teach`}
                          className="w-full h-full rounded-xl object-cover"
                        />
                        
                        {/* Teacher Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <h3 className="text-white font-bold text-lg">{teachers[currentSlide].name}</h3>
                            <p className="text-white/90 text-sm">{teachers[currentSlide].subject}</p>
                            <p className="text-white/80 text-sm italic mt-1">"{teachers[currentSlide].quote}"</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Carousel Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous teacher"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#2C3E35]" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next teacher"
                  >
                    <ChevronRight className="h-5 w-5 text-[#2C3E35]" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {teachers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-[#66B2B2]"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#66B2B2]">5min</div>
                    <div className="text-xs text-[#2C3E35]/70 font-medium">Planning Time</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-rose-50/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-8">{t('home.problem.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: AlertTriangle, text: t('home.problem.points.lateNights') },
                { icon: Battery, text: t('home.problem.points.curriculumPressure') },
                { icon: Coffee, text: t('home.problem.points.adminOverwhelm') },
                { icon: Heart, text: t('home.problem.points.lessTime') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <LiftCard className="border-rose-100 bg-rose-50/60">
                    <div className="flex items-center space-x-4 p-4">
                      <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-icon-float">
                        <item.icon className="h-6 w-6 text-rose-600" />
                      </div>
                      <p className="text-[#2C3E35] font-medium text-left">{item.text}</p>
                    </div>
                  </LiftCard>
                </motion.div>
              ))}
            </div>
            
            {/* Teacher Quote Carousel */}
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                      alt="Sarah - Middle School Teacher"
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </div>
                  <blockquote className="text-xl text-[#2C3E35] italic mb-6 leading-relaxed">
                    "{t('home.problem.quote')}"
                  </blockquote>
                  <cite className="text-[#2C3E35]/70 font-medium">- {t('home.problem.quoteAuthor')}</cite>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-8">{t('home.solution.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Zap, text: t('home.solution.points.fastPlanning'), iconBg: "bg-yellow-100", iconColor: "text-yellow-600" },
                { icon: Star, text: t('home.solution.points.confidence'), iconBg: "bg-purple-100", iconColor: "text-purple-600" },
                { icon: CheckCircle, text: t('home.solution.points.curriculumReady'), iconBg: "bg-blue-100", iconColor: "text-blue-600" },
                { icon: Heart, text: t('home.solution.points.energyReclaimed'), iconBg: "bg-pink-100", iconColor: "text-pink-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <LiftCard className="border-emerald-100 bg-emerald-50/60">
                    <div className="flex items-center space-x-4 p-4">
                      <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-icon-float`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <p className="text-[#2C3E35] font-medium text-left">{item.text}</p>
                    </div>
                  </LiftCard>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryCTA
                label={t('home.solution.cta')}
                ariaLabel="Start planning smarter with Zaza Teach from solution section"
                from="home_solution"
                className="bg-gradient-to-r from-violet-600 to-purple-600"
              />
              <p className="text-[#2C3E35]/60 text-sm">{t('home.solution.subtext')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Sell CTA Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <p className="text-[#2C3E35] text-lg font-medium">
              {t('home.crossSell.text')}
            </p>
            <Button
              asChild
              className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white px-6 py-2"
              onClick={() => trackCtaClick('mid-cta', 'try_draft')}
            >
              <a href="https://zazadraft.com" target="_blank" rel="noopener noreferrer">
                {t('home.crossSell.cta')} <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">{t('home.features.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: BookOpen, 
                  title: t('home.features.smartPlanner.title'), 
                  description: t('home.features.smartPlanner.description'),
                  color: "#66B2B2"
                },
                { 
                  icon: Sparkles, 
                  title: t('home.features.creative.title'), 
                  description: t('home.features.creative.description'),
                  color: "#8A2BE2"
                },
                { 
                  icon: FileText, 
                  title: t('home.features.templates.title'), 
                  description: t('home.features.templates.description'),
                  color: "#FFD700"
                },
                { 
                  icon: Share2, 
                  title: t('home.features.sharing.title'), 
                  description: t('home.features.sharing.description'),
                  color: "#E0115F"
                },
                { 
                  icon: Globe, 
                  title: t('home.features.multilang.title'), 
                  description: t('home.features.multilang.description'),
                  color: "#66B2B2"
                },
                { 
                  icon: CheckCircle, 
                  title: t('home.features.curriculumReady.title'), 
                  description: t('home.features.curriculumReady.description'),
                  color: "#32CD32"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="h-8 w-8" style={{ color: feature.color }} />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C3E35] mb-2">{feature.title}</h4>
                  <p className="text-[#2C3E35]/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">{t('home.trust.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {[
                { 
                  number: "10,000+", 
                  label: t('home.trust.stats.teachers'),
                  icon: Users,
                  color: "#66B2B2"
                },
                { 
                  number: "50,000+", 
                  label: t('home.trust.stats.plans'),
                  icon: BookOpen,
                  color: "#8A2BE2"
                },
                { 
                  number: "95%", 
                  label: t('home.trust.stats.timeSaved'),
                  icon: Clock,
                  color: "#FFD700"
                },
                { 
                  number: "4.9/5", 
                  label: t('home.trust.stats.rating'),
                  icon: Star,
                  color: "#E0115F"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold text-[#2C3E35] mb-2">{stat.number}</div>
                  <p className="text-[#2C3E35]/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-[#2C3E35] mb-2">{t('home.trust.founder.title')}</h4>
                  <p className="text-[#2C3E35]/70 mb-4">{t('home.trust.founder.subtitle')}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-[#2C3E35]/80 text-sm">{t('home.trust.founder.badge')}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-white shadow-lg">
                    <img
                      src="/images/founder.jpg"
                      alt="Dr. Greg Blackburn - Founder & CEO, Zaza Technologies"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#2C3E35]/60 text-xs">{t('home.trust.founder.role')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">{t('home.testimonials.title')}</h3>
            
            {/* Testimonial Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-[#FFD700] fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-2xl text-[#2C3E35] italic mb-8 leading-relaxed">
                        "{getTranslationArray('home.testimonials.quotes', [
                          "It feels like having a planning partner who never gets tired.",
                          "For the first time in years, I leave school with energy left for my family.",
                          "I don't feel guilty about lesson prep anymore - it's under control.",
                          "Zaza Teach gave me my Sundays back. I can finally spend time with my family instead of stressing over lesson plans.",
                          "I was drowning in admin. Now, with lesson planning done in minutes, I can focus on the fun parts of teaching again."
                        ])[currentSlide]}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={[
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          ][currentSlide]}
                          alt="Teacher testimonial"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-[#2C3E35] text-lg">
                            {getTranslationArray('home.testimonials.authors', ["Maria S.", "David L.", "Jennifer K.", "Emma T.", "Marcus D."])[currentSlide]}
                          </p>
                          <p className="text-[#2C3E35]/70">
                            {getTranslationArray('home.testimonials.roles', ["Elementary Teacher", "High School Teacher", "Middle School Teacher", "Primary School Teacher", "Secondary School Teacher"])[currentSlide]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 5) % 5)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-[#2C3E35]" />
              </button>
              
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 5)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-[#2C3E35]" />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-[#66B2B2] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">{t('home.pricing.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: t('home.pricing.plans.free.title'),
                  price: t('home.pricing.plans.free.price'),
                  features: getTranslationArray('home.pricing.plans.free.features', ["5 lesson plans/month"]),
                  cta: t('home.pricing.plans.free.cta'),
                  popular: false,
                  planType: 'free' as const
                },
                {
                  title: t('home.pricing.plans.pro.title'), 
                  price: t('home.pricing.plans.pro.price'),
                  period: t('home.pricing.plans.pro.period'),
                  features: getTranslationArray('home.pricing.plans.pro.features', ["Unlimited plans", "Full template library", "Priority support"]),
                  cta: t('home.pricing.plans.pro.cta'),
                  popular: true,
                  popularText: t('home.pricing.plans.pro.popular'),
                  planType: 'pro' as const
                },
                {
                  title: t('home.pricing.plans.bundle.title'),
                  price: t('home.pricing.plans.bundle.price'), 
                  period: t('home.pricing.plans.bundle.period'),
                  features: getTranslationArray('home.pricing.plans.bundle.features', ["Zaza Teach + Zaza Draft", "All Pro features", "Cross-platform sync"]),
                  cta: t('home.pricing.plans.bundle.cta'),
                  popular: false,
                  planType: 'bundle' as const
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                    plan.popular ? 'border-[#66B2B2] relative' : 'border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#66B2B2] text-white">
                      {plan.popularText}
                    </Badge>
                  )}
                  <h4 className="text-xl font-bold text-[#2C3E35] mb-2">{plan.title}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#2C3E35]">{plan.price}</span>
                    {plan.period && <span className="text-[#2C3E35]/70">{plan.period}</span>}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#66B2B2]" />
                        <span className="text-[#2C3E35]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#66B2B2] hover:bg-[#66B2B2]/90' 
                        : 'bg-[#8A2BE2] hover:bg-[#8A2BE2]/90'
                    } text-white`}
                    onClick={() => trackPricingClick(plan.planType)}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-r from-[#66B2B2]/10 to-[#8A2BE2]/10 rounded-2xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-8 leading-tight">
              {t('home.finalCta.title')}
            </h3>
            <p className="text-xl text-[#2C3E35]/80 mb-8 max-w-2xl mx-auto">
              {t('home.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryCTA
                label={t('home.finalCta.cta')}
                ariaLabel="Start your free Zaza Teach trial from final call-to-action"
                from="home_final_cta"
                className="px-12 py-4 text-xl"
              />
              <p className="text-[#2C3E35]/60 text-sm">
                {t('home.finalCta.benefits')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
