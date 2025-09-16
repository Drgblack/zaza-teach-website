"use client";
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Clock, Users, Sparkles, ArrowRight, Star, CheckCircle, X, Zap, FileText, Share2, Globe, Heart, Coffee, AlertTriangle, Battery } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
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
            
            <p className="text-xl text-[#2C3E35]/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Teachers spend evenings buried in planning. Zaza Teach helps you reclaim that time, 
              giving you clear, curriculum-aligned lesson plans in just a few taps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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