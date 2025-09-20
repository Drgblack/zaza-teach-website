'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, TrendingUp, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  teacher: {
    name: string;
    title: string;
    school: string;
    experience: string;
  };
  challenge: string;
  solution: string;
  results: {
    timeSaved: string;
    productivityIncrease: string;
    studentEngagement: string;
    stressReduction: string;
  };
  metrics: {
    beforeHours: number;
    afterMinutes: number;
    lessonsPerWeek: number;
    satisfactionScore: number;
  };
  quote: string;
  color: 'blue' | 'purple' | 'green';
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'From Burnout to Balance: Elementary Math Transformation',
    teacher: {
      name: 'Jennifer Walsh',
      title: '4th Grade Math Teacher',
      school: 'Maplewood Elementary',
      experience: '11 years teaching'
    },
    challenge: 'Jennifer was spending 6+ hours every weekend planning math lessons, creating differentiated worksheets, and aligning activities to state standards. She was considering leaving teaching due to burnout.',
    solution: 'Started using Zaza Teach to generate standards-aligned math lessons with built-in differentiation. Used AI-generated problem sets and assessment rubrics.',
    results: {
      timeSaved: '5.2 hours/week',
      productivityIncrease: '340%',
      studentEngagement: '+35% improvement',
      stressReduction: '80% less planning stress'
    },
    metrics: {
      beforeHours: 6,
      afterMinutes: 45,
      lessonsPerWeek: 25,
      satisfactionScore: 9.2
    },
    quote: 'Zaza Teach saved my career. I went from dreading Sundays to actually enjoying lesson planning.',
    color: 'blue'
  },
  {
    id: '2',
    title: 'New Teacher Success: From Overwhelmed to Outstanding',
    teacher: {
      name: 'Michael Chen',
      title: '9th Grade Biology Teacher',
      school: 'Roosevelt High School',
      experience: '1st year teaching'
    },
    challenge: 'As a new teacher, Michael was drowning in lesson prep, staying at school until 8 PM daily. His lessons lacked engagement and he struggled with classroom management.',
    solution: 'Implemented Zaza Teach for comprehensive lesson planning including lab activities, assessment strategies, and student engagement techniques.',
    results: {
      timeSaved: '4.8 hours/week',
      productivityIncrease: '280%',
      studentEngagement: '+50% participation',
      stressReduction: '70% less anxiety'
    },
    metrics: {
      beforeHours: 8,
      afterMinutes: 90,
      lessonsPerWeek: 20,
      satisfactionScore: 8.8
    },
    quote: 'I actually feel like a real teacher now, not just someone scrambling to survive each day.',
    color: 'purple'
  },
  {
    id: '3',
    title: 'Special Education Breakthrough: Individualized at Scale',
    teacher: {
      name: 'Dr. Patricia Martinez',
      title: 'Special Education Coordinator',
      school: 'Inclusive Learning Academy',
      experience: '18 years in special education'
    },
    challenge: 'Managing IEPs for 32 students with varying needs required creating dozens of individualized lesson plans weekly. Each lesson needed specific accommodations and modifications.',
    solution: 'Used Zaza Teach\'s differentiation engine to create individualized lessons that automatically incorporate IEP goals and accommodate different learning styles.',
    results: {
      timeSaved: '12 hours/week',
      productivityIncrease: '400%',
      studentEngagement: '+60% goal achievement',
      stressReduction: '90% less planning overwhelm'
    },
    metrics: {
      beforeHours: 15,
      afterMinutes: 120,
      lessonsPerWeek: 32,
      satisfactionScore: 9.8
    },
    quote: 'For the first time in my career, I can truly individualize learning for every student without sacrificing my personal life.',
    color: 'green'
  }
];

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0);
  const currentCase = caseStudies[selectedCase];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-r from-blue-50 to-cyan-50',
          accent: 'text-blue-600',
          border: 'border-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-r from-purple-50 to-indigo-50',
          accent: 'text-purple-600',
          border: 'border-purple-200',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-r from-green-50 to-emerald-50',
          accent: 'text-green-600',
          border: 'border-green-200',
          button: 'bg-green-600 hover:bg-green-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          accent: 'text-gray-600',
          border: 'border-gray-200',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  const colors = getColorClasses(currentCase.color);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E35] mb-6">
              Real Teachers, Real Results
            </h2>
            <p className="text-xl text-[#2C3E35]/80 max-w-3xl mx-auto">
              See how educators across the country transformed their teaching practice 
              and reclaimed their work-life balance with Zaza Teach.
            </p>
          </motion.div>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-[#66B2B2] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#66B2B2]/10'
              }`}
            >
              {study.teacher.title}
            </button>
          ))}
        </div>

        {/* Main Case Study */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${colors.bg} rounded-3xl p-8 md:p-12 ${colors.border} border-2`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E35] mb-6">
                {currentCase.title}
              </h3>

              {/* Teacher Info */}
              <div className="bg-white/70 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-[#2C3E35] text-lg mb-2">
                  {currentCase.teacher.name}
                </h4>
                <p className={`${colors.accent} font-medium mb-1`}>
                  {currentCase.teacher.title}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {currentCase.teacher.school}
                </p>
                <p className="text-gray-500 text-sm">
                  {currentCase.teacher.experience}
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h5 className="font-bold text-[#2C3E35] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  The Challenge
                </h5>
                <p className="text-gray-700 leading-relaxed pl-11">
                  {currentCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h5 className="font-bold text-[#2C3E35] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  The Solution
                </h5>
                <p className="text-gray-700 leading-relaxed pl-11">
                  {currentCase.solution}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="bg-white/70 rounded-2xl p-6 border-l-4 border-[#66B2B2]">
                <p className="text-lg text-[#2C3E35] italic mb-4">
                  "{currentCase.quote}"
                </p>
                <cite className="text-[#66B2B2] font-medium">
                  - {currentCase.teacher.name}
                </cite>
              </blockquote>
            </div>

            {/* Right Column - Results */}
            <div>
              <h5 className="font-bold text-[#2C3E35] mb-6 flex items-center text-xl">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                The Results
              </h5>

              {/* Time Savings Visualization */}
              <div className="bg-white/70 rounded-2xl p-6 mb-8">
                <h6 className="font-bold text-[#2C3E35] mb-4">Time Transformation</h6>
                
                <div className="space-y-4">
                  {/* Before */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Before Zaza Teach</span>
                      <span className="font-bold text-red-600">{currentCase.metrics.beforeHours} hours/week</span>
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-3">
                      <div 
                        className="bg-red-500 h-3 rounded-full" 
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">After Zaza Teach</span>
                      <span className="font-bold text-green-600">{currentCase.metrics.afterMinutes} minutes/week</span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full" 
                        style={{ width: `${(currentCase.metrics.afterMinutes / 60) / currentCase.metrics.beforeHours * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-[#66B2B2]">
                    {currentCase.results.timeSaved}
                  </span>
                  <span className="text-gray-600 ml-2">saved weekly</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <TrendingUp className={`w-8 h-8 ${colors.accent} mx-auto mb-2`} />
                  <div className="font-bold text-[#2C3E35] text-lg">
                    {currentCase.results.productivityIncrease}
                  </div>
                  <div className="text-gray-600 text-sm">Productivity Boost</div>
                </div>

                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <Users className={`w-8 h-8 ${colors.accent} mx-auto mb-2`} />
                  <div className="font-bold text-[#2C3E35] text-lg">
                    {currentCase.results.studentEngagement}
                  </div>
                  <div className="text-gray-600 text-sm">Student Engagement</div>
                </div>

                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <BookOpen className={`w-8 h-8 ${colors.accent} mx-auto mb-2`} />
                  <div className="font-bold text-[#2C3E35] text-lg">
                    {currentCase.metrics.lessonsPerWeek}
                  </div>
                  <div className="text-gray-600 text-sm">Lessons/Week</div>
                </div>

                <div className="bg-white/70 rounded-xl p-4 text-center">
                  <CheckCircle className={`w-8 h-8 ${colors.accent} mx-auto mb-2`} />
                  <div className="font-bold text-[#2C3E35] text-lg">
                    {currentCase.metrics.satisfactionScore}/10
                  </div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>

              {/* Stress Reduction */}
              <div className="bg-white/70 rounded-2xl p-6">
                <h6 className="font-bold text-[#2C3E35] mb-4">Stress Reduction</h6>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-[#66B2B2] to-[#8A2BE2] h-3 rounded-full" 
                        style={{ width: currentCase.results.stressReduction }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-4 font-bold text-[#66B2B2]">
                    {currentCase.results.stressReduction}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#2C3E35] mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of teachers who have transformed their teaching practice. 
              Start your free trial today and see results in your first week.
            </p>
            <button className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}