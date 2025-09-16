"use client";
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import LessonPlanShowcase from './lesson-plan-showcase';
import { BookOpen, Clock, Users, Sparkles, ArrowRight, Star } from 'lucide-react';

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
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E35] mb-6 leading-tight">
              AI Lesson Planning for Educators
            </h2>
            
            <p className="text-xl text-[#2C3E35]/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. 
              Create, customize, and share curriculum-aligned lessons in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Start Planning Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#66B2B2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#66B2B2]" />
                </div>
                <div className="text-2xl font-bold text-[#2C3E35] mb-2">5 min</div>
                <p className="text-[#2C3E35]/70">Average planning time</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8A2BE2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#8A2BE2]" />
                </div>
                <div className="text-2xl font-bold text-[#2C3E35] mb-2">10k+</div>
                <p className="text-[#2C3E35]/70">Teachers trust us</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FFD700]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[#FFD700]" />
                </div>
                <div className="text-2xl font-bold text-[#2C3E35] mb-2">4.9/5</div>
                <p className="text-[#2C3E35]/70">Teacher satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lesson Plan Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#2C3E35] mb-4">
              See Your Lesson Plans Come to Life
            </h3>
            <p className="text-xl text-[#2C3E35]/70 max-w-2xl mx-auto">
              From concept to classroom-ready in minutes. Here's how your lessons will look.
            </p>
          </motion.div>

          <LessonPlanShowcase />
        </div>
      </section>
    </div>
  );
} 