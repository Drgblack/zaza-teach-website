"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Clock, Users, Sparkles, ArrowRight, Star, CheckCircle, X, Zap, FileText, Share2, Globe, Heart, Coffee, AlertTriangle, Battery, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teachers = [
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

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teachers.length);
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
                Lesson plans done in minutes – not hours.
              </h2>
              
              <p className="text-xl text-[#2C3E35]/80 mb-8 leading-relaxed">
                Teachers spend evenings buried in planning. Zaza Teach helps you reclaim that time, 
                giving you clear, curriculum-aligned lesson plans in just a few taps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Try Free – 5 Lesson Plans/Month
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
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
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-user.jpg"
                          }}
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
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-8">The problem</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: AlertTriangle, text: "Endless late nights building plans from scratch" },
                { icon: Battery, text: "Pressure to meet curriculum requirements while staying creative" },
                { icon: Coffee, text: "Overwhelm from admin tasks eating into teaching energy" },
                { icon: Heart, text: "Less time for students, family, and yourself" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl border border-red-100"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="text-[#2C3E35] font-medium text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-8">The better way</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Zap, text: "5-minute lesson planning – structured, adaptable plans instantly" },
                { icon: Star, text: "Confidence boost – professional, creative scaffolding at your fingertips" },
                { icon: CheckCircle, text: "Curriculum-ready – aligned outputs that fit your class needs" },
                { icon: Heart, text: "Energy reclaimed – more focus for students and for your life outside school" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-[#2C3E35] font-medium text-left">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
            >
              Start Planning Smarter
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
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">Built for teachers – not techies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: BookOpen, 
                  title: "AI Lesson Planner", 
                  description: "Instant plans with objectives, activities, and assessments",
                  color: "#66B2B2"
                },
                { 
                  icon: Sparkles, 
                  title: "Creative Confidence", 
                  description: "Adjust tone, depth, and scaffolding levels",
                  color: "#8A2BE2"
                },
                { 
                  icon: FileText, 
                  title: "Template Library", 
                  description: "Save and reuse your best lessons",
                  color: "#FFD700"
                },
                { 
                  icon: Share2, 
                  title: "Sharing & Export", 
                  description: "Share with colleagues or export to Word/PDF",
                  color: "#E0115F"
                },
                { 
                  icon: Globe, 
                  title: "Multi-language", 
                  description: "Plans in English, German, French, Spanish, Italian",
                  color: "#66B2B2"
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

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">What teachers say</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "It feels like having a planning partner who never gets tired.",
                "For the first time in years, I leave school with energy left for my family.",
                "I don't feel guilty about lesson prep anymore – it's under control."
              ].map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFD700] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2C3E35] italic text-lg">"{quote}"</p>
                </motion.div>
              ))}
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
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-12">Simple pricing</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Free Plan",
                  price: "€0",
                  features: ["5 lesson plans/month"],
                  cta: "Get Started Free",
                  popular: false
                },
                {
                  title: "Pro Plan", 
                  price: "€19.99",
                  period: "/month",
                  features: ["Unlimited plans", "Full template library", "Priority support"],
                  cta: "Start Pro Trial",
                  popular: true
                },
                {
                  title: "Bundle",
                  price: "€24.99", 
                  period: "/month",
                  features: ["Zaza Teach + Zaza Promptly", "All Pro features", "Cross-platform sync"],
                  cta: "Get Bundle",
                  popular: false
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
                      Most Popular
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
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-6">
              Zaza Teach helps teachers thrive – by giving back your time, energy, and confidence.
            </h3>
            <Button 
              size="lg" 
              className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="h-6 w-6 mr-3" />
              Get Started Free
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 