// pages/index.tsx
export default function Home() {
  return <h1>Zaza Teach is live!</h1>;
}
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Lightbulb,
  Brain,
  X,
  BookOpen,
  Settings,
  MessageCircle,
  Smile,
  Frown,
  Search,
  ChevronDown,
  Edit3,
  Eye,
  Mic,
  Clipboard,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sticky Top Bar Component
const StickyTopBar = () => {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  const messages = [
    "It's 9:47 PM. Still planning? You deserve better.",
    "Sunday scaries got you? Break the cycle tonight.",
    "Three hours of planning for one lesson? There's a better way.",
    "Your students need a thriving you, not a perfect lesson.",
  ]

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length)
        setIsTyping(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible, messages.length])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] text-white py-3 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 text-center font-medium"
        >
          {isTyping ? (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              {messages[currentMessage]}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.span>
          ) : (
            messages[currentMessage]
          )}
        </motion.div>
        <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="text-white hover:bg-white/20">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

// Hero Section Component
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <>
      {/* Main Hero Section */}
      <section className="min-h-screen bg-gradient-radial from-[#E8E6F5] via-[#E8E6F5] to-[#F5F3FF] pt-32 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A235A] leading-tight mb-6"
            >
              Sunday Night Panic? <span className="text-[#E0115F]">Not Anymore.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              It's 9:47 PM. You're still planning... But you deserve better.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] hover:from-[#E0115F]/90 hover:to-[#8A2BE2]/90 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#E0115F]/25 transition-all duration-300 border-2 border-transparent hover:border-white/20"
              >
                <motion.span
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Try Zaza Teach Free
                </motion.span>
              </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center space-x-3 text-slate-600 mb-16"
            >
              <Users className="h-5 w-5" />
              <span className="text-lg">Join 12,000+ teachers who've reclaimed their evenings</span>
            </motion.div>

            {/* Scroll Cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm text-slate-500 font-medium">↓ See Featured Plans</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-6 h-6 border-2 border-slate-400 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Lesson Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4A235A] mb-6">
              Ready-To-Go Lesson Plans That Respect Your Voice
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pick, tweak, and teach in minutes—Zaza learns from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lesson Plan Cards */}
            {[
              {
                title: "Fractions & Pizza",
                grade: "Grade 4",
                duration: "45 mins",
                description: "Interactive fraction lesson using pizza.",
                icon: "🍕",
                color: "#FFD700",
                delay: 0.2,
              },
              {
                title: "Ecosystem Adventure",
                grade: "Grade 5",
                duration: "60 mins",
                description: "Explore food chains and habitats.",
                icon: "🌿",
                color: "#66B2B2",
                delay: 0.4,
              },
              {
                title: "Creative Writing",
                grade: "Grade 3",
                duration: "60 mins",
                description: "Story starters and character development.",
                icon: "✍️",
                color: "#8A2BE2",
                delay: 0.6,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: plan.delay }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 20px 40px ${plan.color}20`,
                }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white border-2 border-transparent hover:border-[#FFD700]/30 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden relative">
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 30px ${plan.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}
                  />

                  {/* Soft Gold Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ backgroundColor: plan.color }}
                  />

                  <CardHeader className="text-center pb-4 relative z-10">
                    {/* Icon with Pulse Animation */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    >
                      {plan.icon}
                    </motion.div>

                    <CardTitle className="text-2xl font-bold text-[#4A235A] mb-2">{plan.title}</CardTitle>

                    <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 mb-3">
                      <span className="font-medium">{plan.grade}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{plan.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 relative z-10">
                    <p className="text-slate-600 text-center mb-6 leading-relaxed">{plan.description}</p>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-2 rounded-full font-medium transition-all duration-300 hover:shadow-md bg-transparent"
                        style={{
                          borderColor: `${plan.color}60`,
                          color: plan.color,
                          background: `${plan.color}10`,
                        }}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-2 rounded-full font-medium transition-all duration-300 hover:shadow-md bg-transparent"
                        style={{
                          borderColor: `${plan.color}60`,
                          color: plan.color,
                          background: `${plan.color}10`,
                        }}
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Your New Planning Reality Section Component
const PlanningRealitySection = () => {
  const features = [
    {
      title: "Never Question Alignment Again",
      subtitle: "Curriculum standards automatically verified",
      tag: "alignment",
      icon: CheckCircle,
      color: "#66B2B2",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Your Voice, Amplified",
      subtitle: "Plans that sound authentically you",
      tag: "voice",
      icon: Mic,
      color: "#8A2BE2",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Reclaim Your Evenings",
      subtitle: "3 hours becomes 5 minutes",
      tag: "time",
      icon: Clock,
      color: "#E0115F",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      title: "Smart Suggestions That Actually Help",
      subtitle: "AI that understands your classroom",
      tag: "suggestions",
      icon: Brain,
      color: "#FFD700",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-500",
    },
    {
      title: "Built by Teachers, For Teachers",
      subtitle: "Created by educators who get it",
      tag: "team",
      icon: Users,
      color: "#66B2B2",
      bgColor: "bg-teal-100 dark:bg-teal-900/20",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: "Observation-Ready, Always",
      subtitle: "Confidence in every lesson",
      tag: "observation",
      icon: Clipboard,
      color: "#8A2BE2",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8E6F5] dark:from-gray-900 to-white dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Your New Planning <span className="text-[#E0115F]">Reality</span>
          </h2>
          <p className="text-xl text-slate-800 dark:text-white/70 max-w-3xl mx-auto">
            Features designed by teachers who understand your daily challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: `0 20px 40px ${feature.color}20`,
              }}
              className="group cursor-pointer"
            >
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-200 dark:border-pink-800/30 hover:border-pink-300 dark:hover:border-pink-700/50 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${feature.color}30`,
                  }}
                />

                <CardContent className="text-center relative z-10 p-0">
                  {/* Circular Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${feature.bgColor} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-[#E0115F] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                      >
                        <Star className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtitle Quote */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-medium">
                    "{feature.subtitle}"
                  </p>

                  {/* Tag Pill */}
                  <div className="flex justify-center">
                    <Badge
                      className="px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300"
                      style={{
                        backgroundColor: `${feature.color}15`,
                        color: feature.color,
                        borderColor: `${feature.color}30`,
                      }}
                    >
                      ✨ {feature.tag}
                    </Badge>
                  </div>

                  {/* Decorative bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Emotional Timeline Component
const EmotionalTimeline = () => {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      title: "The Sunday Spiral",
      icon: Clock,
      stress: 95,
      quote: "It's 11 PM and I'm still Googling 'engaging lesson starters'",
      color: "#E0115F",
      thoughts: [
        "Why didn't I plan this earlier?",
        "My students deserve better than this",
        "I'm going to be exhausted tomorrow",
        "How do other teachers do this?",
      ],
    },
    {
      title: "The Guilt Cycle",
      icon: MessageCircle,
      stress: 85,
      quote: "I care too much to just copy worksheets, but I have nothing left",
      color: "#FF6B6B",
      thoughts: [
        "I became a teacher to inspire",
        "But I'm too tired to be creative",
        "My students can tell I'm unprepared",
        "I'm failing them and myself",
      ],
    },
    {
      title: "The Discovery",
      icon: Lightbulb,
      stress: 60,
      quote: "Wait... this actually understands my teaching style",
      color: "#FFD700",
      thoughts: [
        "This sounds too good to be true",
        "But what if it actually works?",
        "Maybe I don't have to suffer",
        "Could this be the answer?",
      ],
    },
    {
      title: "The Transformation",
      icon: Settings,
      stress: 25,
      quote: "Five minutes and I have a plan I'm actually excited about",
      color: "#66B2B2",
      thoughts: [
        "This lesson actually sounds fun",
        "I can't wait to teach this",
        "My students will love this activity",
        "I feel like a real teacher again",
      ],
    },
    {
      title: "The New Normal",
      icon: BookOpen,
      stress: 10,
      quote: "Back to the teacher I set out to be: prepared, calm, creative",
      color: "#8A2BE2",
      thoughts: [
        "Sunday nights are peaceful now",
        "I have time for my own life",
        "Teaching is joyful again",
        "I'm the teacher I always wanted to be",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            From Burnout to <span className="text-[#E0115F]">Balance</span>
          </h2>
          <p className="text-xl text-slate-800 dark:text-white/70 max-w-3xl mx-auto">
            Every teacher's journey through the Sunday night struggle and how it ends
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E0115F] via-[#FFD700] to-[#8A2BE2] rounded-full"></div>

          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              onMouseEnter={() => setActiveStage(index)}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card
                  className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 dark:border-gray-600"
                  style={{ borderLeftColor: stage.color }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-slate-800 dark:text-white">{stage.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        Stress: {stage.stress}%
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stage.stress}%` }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: stage.color }}
                      ></motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg italic text-slate-800 dark:text-white/80 mb-4">
                      "{stage.quote}"
                    </blockquote>

                    <AnimatePresence>
                      {activeStage === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {stage.thoughts.map((thought, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-sm text-slate-800 dark:text-white/60 pl-4 border-l-2 border-gray-200 dark:border-gray-600"
                            >
                              {thought}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Node */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ backgroundColor: stage.color }}
              >
                <stage.icon className="h-8 w-8 text-white" />
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Before/After Comparison Component
const BeforeAfterComparison = () => {
  const [selectedTime, setSelectedTime] = useState(null)

  const timeline = [
    {
      time: "6 AM",
      before: "Panic - forgot to plan yesterday",
      after: "Coffee and confidence",
      beforeStress: 90,
      afterStress: 20,
    },
    {
      time: "8 AM",
      before: "Winging it in class",
      after: "Excited about today's lesson",
      beforeStress: 85,
      afterStress: 15,
    },
    {
      time: "3 PM",
      before: "Guilt about today's lesson",
      after: "Proud of student engagement",
      beforeStress: 70,
      afterStress: 10,
    },
    {
      time: "7 PM",
      before: "Dreading tomorrow's planning",
      after: "Planning tomorrow in 5 minutes",
      beforeStress: 95,
      afterStress: 5,
    },
    {
      time: "11 PM",
      before: "Still at laptop, exhausted",
      after: "Reading a book, stress-free",
      beforeStress: 100,
      afterStress: 5,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            A Day in <span className="text-[#E0115F]">Your Life</span>
          </h2>
          <p className="text-xl text-slate-800 dark:text-white/70 max-w-3xl mx-auto">
            See how your entire day transforms when planning becomes effortless
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-2">Before Zaza</h3>
                <div className="flex items-center justify-center space-x-2">
                  <Frown className="h-6 w-6 text-red-600" />
                  <span className="text-red-600 font-medium">Stressed & Overwhelmed</span>
                </div>
              </div>

              {timeline.map((item, index) => (
                <motion.div
                  key={`before-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTime(selectedTime === `before-${index}` ? null : `before-${index}`)}
                  className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-red-700">{item.time}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-red-600">Stress: {item.beforeStress}%</span>
                      <div className="w-16 bg-red-200 rounded-full h-2">
                        <div
                          className="h-2 bg-red-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.beforeStress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-800">{item.before}</p>

                  <AnimatePresence>
                    {selectedTime === `before-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-red-200 text-sm text-red-700"
                      >
                        Detailed scenario: The internal monologue of stress and overwhelm...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* After Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#66B2B2] mb-2">After Zaza</h3>
                <div className="flex items-center justify-center space-x-2">
                  <Smile className="h-6 w-6 text-[#66B2B2]" />
                  <span className="text-[#66B2B2] font-medium">Calm & Confident</span>
                </div>
              </div>

              {timeline.map((item, index) => (
                <motion.div
                  key={`after-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTime(selectedTime === `after-${index}` ? null : `after-${index}`)}
                  className="bg-blue-50 border-l-4 border-[#66B2B2] p-4 rounded-r-lg cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[#66B2B2]">{item.time}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-[#66B2B2]">Stress: {item.afterStress}%</span>
                      <div className="w-16 bg-blue-200 rounded-full h-2">
                        <div
                          className="h-2 bg-[#66B2B2] rounded-full transition-all duration-1000"
                          style={{ width: `${item.afterStress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-800 dark:text-white">{item.after}</p>

                  <AnimatePresence>
                    {selectedTime === `after-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-blue-200 text-sm text-slate-800 dark:text-white/70"
                      >
                        Detailed scenario: The peace and confidence of being prepared...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Melinda A.",
      role: "Grade 10 Teacher, Melbourne",
      preview: "From family sacrifice to family first",
      metrics: "Family time reclaimed",
      quote:
        "I used to spend my Sunday evenings buried in lesson planning while my family waited for me at the dinner table. Now I spend 5 minutes with Zaza Teach and the rest of my weekend with the people I love.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Melinda%20A.jpg-W1v58Fd5hguZwF7yl6zE9UJPVyTGOn.jpeg",
      rating: 5,
      beforeAfter: {
        before: "Sunday evenings: Family waiting while I planned lessons",
        after: "Sunday evenings: Quality time with the people I love",
      },
    },
    {
      name: "Marcus J.",
      role: "High School History",
      preview: "Finally, plans that impress observers",
      metrics: "Confidence up 300%",
      quote:
        "My principal used to give me 'suggestions' after observations. Last month, she asked if she could share my lesson plan with other teachers.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marcus%20J.jpg-ktSAk6uHvp3smWCWOKhCABPM0heRz2.jpeg",
      rating: 5,
      beforeAfter: {
        before: "Observation anxiety and mediocre feedback",
        after: "Observation confidence and exemplary ratings",
      },
    },
    {
      name: "Lisa K.",
      role: "Special Education",
      preview: "Differentiation made simple",
      metrics: "Adaptations in seconds",
      quote:
        "Creating differentiated materials used to take hours. Now I can adapt any lesson for my students' needs in seconds.",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lisa%20K.jpg-whCak4a7aJRyE35KGoTTrNVahwBYW9.jpeg",
      rating: 5,
      beforeAfter: {
        before: "Hours creating individual adaptations",
        after: "Seconds generating perfect modifications",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8E6F5] dark:from-gray-900 to-white dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Teachers Are <span className="text-[#E0115F]">Transforming</span>
          </h2>
          <p className="text-xl text-slate-800 dark:text-white/70 max-w-3xl mx-auto">
            Real stories from real teachers who've reclaimed their evenings
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onClick={() => setActiveTestimonial(index)}
                className={`cursor-pointer transition-all duration-300 group ${
                  activeTestimonial === index ? "ring-2 ring-[#E0115F] shadow-lg" : "hover:shadow-md"
                }`}
              >
                <Card className="h-full bg-[#E8E6F5] dark:bg-gray-700 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden relative">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

                  <CardHeader className="text-center pb-4 relative z-10">
                    {/* Avatar with glow effect */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative mx-auto mb-4"
                    >
                      <div className="w-20 h-20 mx-auto relative">
                        {/* Glow ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] to-[#E0115F] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                          style={{ padding: "3px" }}
                        />

                        {/* Avatar image */}
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={`${testimonial.name} - ${testimonial.role}`}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${testimonial.name.charAt(0)}`
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Name and Role */}
                    <div className="space-y-1 mb-3">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-slate-800 dark:text-white/70 font-medium">{testimonial.role}</p>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                        >
                          <Star className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                        </motion.div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 relative z-10">
                    {/* Quote */}
                    <blockquote className="text-slate-800 dark:text-white text-center mb-6 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Benefit Highlight */}
                    <div className="text-center">
                      <Badge
                        className="px-4 py-2 text-sm font-semibold rounded-full border-2"
                        style={{
                          backgroundColor: `${testimonial.preview.includes("Sunday") ? "#66B2B2" : testimonial.preview.includes("observers") ? "#8A2BE2" : "#E0115F"}15`,
                          color: testimonial.preview.includes("Sunday")
                            ? "#66B2B2"
                            : testimonial.preview.includes("observers")
                              ? "#8A2BE2"
                              : "#E0115F",
                          borderColor: `${testimonial.preview.includes("Sunday") ? "#66B2B2" : testimonial.preview.includes("observers") ? "#8A2BE2" : "#E0115F"}30`,
                        }}
                      >
                        ✨ {testimonial.metrics}
                      </Badge>
                    </div>

                    {/* Decorative element */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 1 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Active Testimonial Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl">
                <CardContent>
                  <blockquote className="text-xl italic text-slate-800 dark:text-white mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-[#E0115F]">Before Zaza:</h5>
                      <p className="text-slate-800 dark:text-white/70">
                        {testimonials[activeTestimonial].beforeAfter.before}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold text-[#66B2B2]">After Zaza:</h5>
                      <p className="text-slate-800 dark:text-white/70">
                        {testimonials[activeTestimonial].beforeAfter.after}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t dark:border-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=64&width=64&text=${testimonials[activeTestimonial].name.charAt(0)}`
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-slate-800 dark:text-white/70">{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white bg-transparent"
                    >
                      Try Their Setup
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-800 dark:text-white/70 mb-4">
              Join thousands of teachers who've transformed their planning experience
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#8A2BE2]">
              <div className="flex -space-x-2">
                {testimonials.map((testimonial, index) => (
                  <motion.img
                    key={testimonial.name}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=32&width=32&text=${testimonial.name.charAt(0)}`
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">+12,000 more teachers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Pricing Section Component
const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#fdf4ff] to-[#fef9fb]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Pick Your Plan – Built for Every Type of Teacher
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Try for free or unlock the full power of Zaza. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-slate-800" : "text-slate-500"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === "annual" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === "annual" ? "text-slate-800" : "text-slate-500"}`}>
              Annual
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-200"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#66B2B2] text-white px-4 py-1 text-sm font-medium">🟢 Perfect Start</Badge>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Experience the Calm</h3>
              <p className="text-slate-600 text-sm mb-4">Dip your toes in with no pressure.</p>

              <div className="mb-4">
                <div className="text-4xl font-bold text-[#66B2B2] mb-1">FREE</div>
                <div className="text-xs text-slate-500">No credit card required</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#66B2B2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">5 AI-generated lesson plans or comments/month</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#66B2B2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Access to all core features</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#66B2B2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Personal teaching style setup</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#66B2B2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Save & copy your outputs</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#66B2B2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Email support</span>
              </li>
            </ul>

            <Button
              className="w-full bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white font-medium py-3 rounded-full transition-all duration-300 relative z-10"
              size="lg"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* $19.99 Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-[#E0115F]"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#E0115F] text-white px-4 py-1 text-sm font-medium">💖 Most Popular</Badge>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Reclaim Your Evenings</h3>
              <p className="text-slate-600 text-sm mb-4">For individual teachers ready to save hours each week.</p>

              <div className="mb-4">
                <div className="text-4xl font-bold text-[#E0115F] mb-1">$19.99</div>
                <div className="text-sm text-slate-500">/month</div>

                <div className="mt-3">
                  <Badge
                    className="bg-[#8A2BE2]/10 text-[#8A2BE2] border border-[#8A2BE2]/20 px-3 py-1 text-sm font-medium cursor-help"
                    title="Based on avg. 2 hours saved/week at $30/hr"
                  >
                    ROI: $360
                  </Badge>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#E0115F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Unlimited AI-generated lesson plans</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#E0115F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Access to all features</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#E0115F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Personal teaching style memory</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#E0115F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Priority email support</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#E0115F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Smart curriculum alignment</span>
              </li>
            </ul>

            <Button
              className="w-full bg-[#E0115F] hover:bg-[#E0115F]/90 text-white font-medium py-3 rounded-full transition-all duration-300 relative z-10"
              size="lg"
            >
              Subscribe Now
            </Button>
          </motion.div>

          {/* Zaza Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-[#FFD700]"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#FFD700] text-slate-800 px-4 py-1 text-sm font-medium">💛 Best Value</Badge>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Zaza Bundle</h3>
              <p className="text-slate-600 text-sm mb-4">Feedback + Lesson Planning. One seamless workspace.</p>

              <div className="mb-4">
                <div className="text-4xl font-bold text-[#FFD700] mb-1">$24.99</div>
                <div className="text-sm text-slate-500 mb-2">/month</div>
                <div className="text-xs text-slate-400">£21.99 (UK) · €22.99 (EU)</div>

                <div className="mt-3">
                  <Badge
                    className="bg-[#8A2BE2]/10 text-[#8A2BE2] border border-[#8A2BE2]/20 px-3 py-1 text-sm font-medium cursor-help"
                    title="Based on avg. 2 hours saved/week at $30/hr"
                  >
                    ROI: $360
                  </Badge>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Access to Zaza Promptly + Zaza Teach</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Shared tone + teaching memory</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Unlimited saves</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Priority email support</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Early feature access</span>
              </li>
            </ul>

            <Button
              className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-slate-800 font-medium py-3 rounded-full transition-all duration-300 relative z-10"
              size="lg"
            >
              Get the Bundle
            </Button>
          </motion.div>

          {/* School-Wide Solution */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-200"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#8A2BE2] text-white px-4 py-1 text-sm font-medium">🏫 For Schools</Badge>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">For Schools & Districts</h3>
              <p className="text-slate-600 text-sm mb-4">Empower every teacher with flexible volume pricing.</p>

              <div className="mb-4">
                <div className="text-4xl font-bold text-[#8A2BE2] mb-1">Custom Pricing</div>
                <div className="text-xs text-slate-500">Flexible, volume-based billing</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Unlimited access for all staff</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">AI-generated lesson plans + reports</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Custom onboarding & curriculum alignment</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Dedicated account support</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Admin analytics (coming soon)</span>
              </li>
            </ul>

            <Button
              className="w-full bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white font-medium py-3 rounded-full transition-all duration-300 relative z-10"
              size="lg"
            >
              Book a Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All Questions")
  const [openFAQ, setOpenFAQ] = useState(null)

  const categories = [
    { name: "All Questions", icon: "🌟", color: "#E0115F" },
    { name: "Time Concerns", icon: "⏰", color: "#66B2B2" },
    { name: "Quality Concerns", icon: "✨", color: "#8A2BE2" },
    { name: "Technical", icon: "🔧", color: "#FFD700" },
    { name: "Teaching Philosophy", icon: "💭", color: "#E0115F" },
  ]

  const faqs = [
    {
      id: 1,
      question: "How long does it really take to create a lesson plan?",
      answer:
        "With Zaza Teach, the lesson planning process is radically streamlined. You simply input your topic and preferences, and within about 2 minutes, Zaza delivers a ready-to-use, personalised plan that reflects your voice, teaching goals, and curriculum. It's not just fast; it's designed to feel like magic: freeing up hours of your week while still keeping you in full control.",
      category: "Time Concerns",
    },
    {
      id: 2,
      question: "Will this sound like me or like a robot?",
      answer:
        "Zaza doesn't generate bland or robotic content. It learns your teaching tone, structure, and stylistic preferences during setup, and applies them every time it builds a lesson. That means every output feels natural, like something you would write, but just faster. It's not generic AI; it's a teacher-first tool with real personality.",
      category: "Quality Concerns",
    },
    {
      id: 3,
      question: "What if I'm not tech-savvy?",
      answer:
        "No problem at all. Zaza Teach is designed to feel invisible: like a helpful assistant that just works in the background. The interface is clean, calm, and intuitive, with zero tech jargon and clear step-by-step guidance. If you can use email, you can use Zaza.",
      category: "Technical",
    },
    {
      id: 4,
      question: "Is this authentic teaching?",
      answer:
        "Absolutely. Zaza doesn't replace your professional judgement: it supports it. You decide the direction, focus, and values of your teaching. Zaza just helps you get there faster, handling the structure and admin work so you can focus on what really matters: your students and your classroom energy.",
      category: "Teaching Philosophy",
    },
    {
      id: 5,
      question: "What if I like planning? Will I lose that creative process?",
      answer:
        "Not at all. Zaza is designed to work with your creativity, not replace it. Think of it like a creative sidekick: you can start from a blank page, remix what Zaza gives you, or layer in your own ideas at every step. It's like a launchpad for your best teaching ideas, not a replacement.",
      category: "Teaching Philosophy",
    },
    {
      id: 6,
      question: "How does curriculum alignment work?",
      answer:
        "Zaza understands your curriculum standards. It automatically aligns lesson content to your grade level and subject area goals, ensuring your plans are classroom-ready and aligned without requiring you to manually insert outcomes or comb through documents. It does the legwork so you don't have to.",
      category: "Quality Concerns",
    },
    {
      id: 7,
      question: "Why not just use ChatGPT?",
      answer:
        "ChatGPT is a great tool, but it's not built for classrooms. It doesn't know your subject, curriculum standards, or personal voice, and it forgets everything between sessions. Zaza Teach is purpose-built for educators. It remembers your tone, aligns to standards, and gives you real lesson plans, not just loose ideas.",
      category: "Technical",
    },
    {
      id: 8,
      question: "Isn't this just cheating?",
      answer:
        "Not at all. Using Zaza is no different from using a teacher-created template, a textbook resource, or a collaborative planning tool. Great teachers still review, adapt, and personalise what they deliver. Zaza simply helps with the heavy lifting, giving you back time and peace of mind so you can show up with more energy, creativity, and joy.",
      category: "Teaching Philosophy",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All Questions" || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Questions? <span className="text-[#E0115F]">We Get It.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Every teacher has questions. Here are the answers that matter most.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E0115F] focus:border-transparent transition-all duration-300 sticky top-20 md:static z-30"
            />
          </div>

          {/* Category Filters */}
          <div className="w-full overflow-x-auto pb-2 md:overflow-visible">
            <div className="flex gap-3 min-w-max px-4 md:px-0 md:justify-center md:gap-1">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap min-w-[140px] h-12 flex-shrink-0 md:px-2 md:py-2 md:min-w-0 md:text-xs md:space-x-1 md:h-9 ${
                    activeCategory === category.name
                      ? "bg-[#E0115F] text-white shadow-lg shadow-[#E0115F]/25"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <span className="text-lg md:text-sm">{category.icon}</span>
                  <span className="text-sm font-medium md:text-xs md:font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">No questions found</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search or selecting a different category.
                </p>
              </motion.div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-2 border-pink-200/60 dark:border-pink-800/40 hover:border-pink-300/80 dark:hover:border-pink-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50 dark:hover:shadow-pink-900/20 hover:-translate-y-1 bg-slate-50/80 dark:bg-slate-800/90 rounded-xl overflow-hidden backdrop-blur-sm">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-[#E0115F] focus:ring-inset group-hover:bg-white/50 dark:group-hover:bg-slate-700/50 transition-all duration-300"
                      aria-expanded={openFAQ === faq.id}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-6">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-[#E0115F] transition-colors duration-300 leading-relaxed mb-3">
                            {faq.question}
                          </h3>
                          <div className="flex items-center">
                            <Badge
                              variant="outline"
                              className="text-xs bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-300/60 dark:border-pink-700/50 shadow-sm hover:shadow-md transition-shadow duration-300 px-3 py-1.5 rounded-full font-medium"
                            >
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            rotate: openFAQ === faq.id ? 180 : 0,
                            scale: openFAQ === faq.id ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex-shrink-0"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-full bg-slate-100/80 dark:bg-slate-700/80 group-hover:bg-[#E0115F]/10 dark:group-hover:bg-[#E0115F]/20 transition-all duration-300"
                          >
                            <ChevronDown className="h-6 w-6 text-slate-500 dark:text-slate-400 group-hover:text-[#E0115F] transition-colors duration-300" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 pt-0">
                            <div className="border-t-2 border-slate-200/60 dark:border-slate-600/50 pt-6 relative">
                              {/* Vertical rule separator */}
                              <div className="absolute left-0 top-6 bottom-0 w-1 bg-gradient-to-b from-[#E0115F]/30 to-[#8A2BE2]/30 rounded-full"></div>

                              {/* Answer area with inset background */}
                              <div className="ml-6 p-6 bg-white/60 dark:bg-slate-700/40 rounded-lg border border-slate-200/40 dark:border-slate-600/30 shadow-inner">
                                <p className="text-slate-700 dark:text-slate-300 leading-loose font-normal text-base">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#E0115F] hover:bg-[#E0115F]/90 text-white px-8 py-3 rounded-full font-medium"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white px-8 py-3 rounded-full font-medium bg-transparent"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const HomePage = () => {
  return (
    <div>
      <Header />
      <StickyTopBar />
      <HeroSection />
      <PlanningRealitySection />
      <EmotionalTimeline />
      <BeforeAfterComparison />
      <TestimonialCarousel />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default HomePage
