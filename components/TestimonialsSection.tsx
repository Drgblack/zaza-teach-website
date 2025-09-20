'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Clock, Users, BookOpen } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  school: string;
  location: string;
  quote: string;
  rating: number;
  timeSaved: string;
  subject: string;
  experience: string;
  image: string;
  metrics: {
    lessonsCreated: number;
    timeSavedWeekly: string;
    favoriteFeature: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Elementary Math Teacher',
    school: 'Riverside Elementary',
    location: 'Portland, OR',
    quote: 'Zaza Teach transformed my Sunday evenings from dreaded planning marathons into family time. I went from 4 hours of prep to 20 minutes, and my lessons are actually better than before.',
    rating: 5,
    timeSaved: '3.5 hours/week',
    subject: 'Mathematics',
    experience: '8 years teaching',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    metrics: {
      lessonsCreated: 47,
      timeSavedWeekly: '3.5 hours',
      favoriteFeature: 'Standards alignment'
    }
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    title: 'High School Science Teacher',
    school: 'Lincoln High School',
    location: 'Chicago, IL',
    quote: 'The AI understands pedagogy in ways that shocked me. It creates differentiated activities I would never have thought of, and my students are more engaged than ever.',
    rating: 5,
    timeSaved: '5 hours/week',
    subject: 'Biology & Chemistry',
    experience: '12 years teaching',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    metrics: {
      lessonsCreated: 62,
      timeSavedWeekly: '5 hours',
      favoriteFeature: 'Differentiated activities'
    }
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    title: 'Middle School English Teacher',
    school: 'Valley Middle School',
    location: 'Austin, TX',
    quote: 'I was drowning in lesson prep until I found Zaza Teach. Now I spend my time giving feedback and building relationships instead of endless planning. It gave me my passion back.',
    rating: 5,
    timeSaved: '4 hours/week',
    subject: 'English Language Arts',
    experience: '6 years teaching',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    metrics: {
      lessonsCreated: 38,
      timeSavedWeekly: '4 hours',
      favoriteFeature: 'Creative writing prompts'
    }
  },
  {
    id: '4',
    name: 'David Park',
    title: 'Elementary Teacher',
    school: 'Oakwood Elementary',
    location: 'Seattle, WA',
    quote: 'As a new teacher, I was overwhelmed by lesson planning. Zaza Teach became my mentor, showing me best practices while saving hours every week. I actually enjoy teaching now.',
    rating: 5,
    timeSaved: '6 hours/week',
    subject: '3rd Grade - All Subjects',
    experience: '2 years teaching',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    metrics: {
      lessonsCreated: 71,
      timeSavedWeekly: '6 hours',
      favoriteFeature: 'Cross-curricular connections'
    }
  },
  {
    id: '5',
    name: 'Aisha Johnson',
    title: 'Special Education Teacher',
    school: 'Harmony Special Needs Center',
    location: 'Atlanta, GA',
    quote: 'The differentiation options are incredible. Zaza Teach helps me create individualized lessons for each of my students IEPs in minutes, not hours. It truly understands diverse learners.',
    rating: 5,
    timeSaved: '8 hours/week',
    subject: 'Special Education',
    experience: '15 years teaching',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face',
    metrics: {
      lessonsCreated: 94,
      timeSavedWeekly: '8 hours',
      favoriteFeature: 'IEP accommodations'
    }
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState('time');

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E35] mb-6">
              Teachers Love Zaza Teach
            </h2>
            <p className="text-xl text-[#2C3E35]/80 max-w-3xl mx-auto">
              Join thousands of educators who've transformed their lesson planning 
              and reclaimed their time for what matters most - teaching.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          {/* Background Quote Mark */}
          <div className="absolute top-8 right-8 text-[#66B2B2]/10 text-8xl font-serif">"</div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Teacher Info */}
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-6">
                <OptimizedImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-full object-cover mx-auto md:mx-0"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#66B2B2] rounded-full p-2">
                  <div className="flex">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#2C3E35] mb-2">
                {currentTestimonial.name}
              </h3>
              <p className="text-[#66B2B2] font-medium mb-1">
                {currentTestimonial.title}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                {currentTestimonial.school}
              </p>
              <p className="text-gray-500 text-sm">
                {currentTestimonial.location}
              </p>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>{currentTestimonial.experience}</p>
                <p className="font-medium text-[#8A2BE2]">
                  {currentTestimonial.subject}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-2">
              <blockquote className="text-lg md:text-xl text-[#2C3E35] leading-relaxed mb-6 relative z-10">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-[#66B2B2]/5 to-[#8A2BE2]/5 rounded-2xl">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-[#66B2B2] mr-2" />
                    <span className="text-2xl font-bold text-[#2C3E35]">
                      {currentTestimonial.metrics.timeSavedWeekly}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Time Saved Weekly</p>
                </div>
                
                <div className="text-center border-l border-r border-gray-200">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5 text-[#8A2BE2] mr-2" />
                    <span className="text-2xl font-bold text-[#2C3E35]">
                      {currentTestimonial.metrics.lessonsCreated}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Lessons Created</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-[#66B2B2] mr-2" />
                    <span className="text-sm font-bold text-[#2C3E35]">
                      Top Feature
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{currentTestimonial.metrics.favoriteFeature}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#66B2B2] hover:text-white group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#66B2B2] w-8' 
                    : 'bg-gray-300 hover:bg-[#66B2B2]/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#66B2B2] hover:text-white group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#66B2B2] mb-2">5,247</div>
            <div className="text-gray-600">Teachers Using Zaza</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#8A2BE2] mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#66B2B2] mb-2">47,000+</div>
            <div className="text-gray-600">Lessons Created</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-[#8A2BE2] mb-2">5.2hrs</div>
            <div className="text-gray-600">Avg. Time Saved/Week</div>
          </div>
        </div>
      </div>
    </section>
  );
}