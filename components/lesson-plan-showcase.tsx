"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Edit3, CheckCircle, Coffee, Monitor, ArrowRight, Sparkles, Heart } from "lucide-react"

const LessonPlanShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const lessonPlans = [
    {
      id: 1,
      title: "Fractions & Pizza",
      grade: "Grade 4",
      duration: "45 mins",
      subject: "Mathematics",
      status: "Saved",
      statusColor: "#66B2B2",
      icon: "🍕",
      description: "Interactive fraction lesson using pizza slices",
    },
    {
      id: 2,
      title: "Ecosystem Adventures",
      grade: "Grade 5",
      duration: "60 mins",
      subject: "Science",
      status: "Draft",
      statusColor: "#FFD700",
      icon: "🌿",
      description: "Exploring food chains and habitats",
    },
    {
      id: 3,
      title: "Creative Writing Workshop",
      grade: "Grade 3",
      duration: "40 mins",
      subject: "English",
      status: "Shared",
      statusColor: "#8A2BE2",
      icon: "✍️",
      description: "Story starters and character development",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Emotional Cue Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 text-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#FFD700]/20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Heart className="h-6 w-6 text-[#E0115F]" />
            <CheckCircle className="h-6 w-6 text-[#66B2B2]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2C3E35] mb-2">
            Your Lesson Plans: Ready, Curriculum-Aligned, and Authentically Yours
          </h3>
          <p className="text-[#2C3E35]/70 font-medium">
            Zaza Teach doesn't replace you. It learns from you and gives you time back.
          </p>
        </div>
      </motion.div>

      {/* Lesson Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {lessonPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onHoverStart={() => setHoveredCard(plan.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group cursor-pointer"
          >
            <Card className="h-full bg-[#F8F8FC] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden relative">
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: plan.status === 'Draft' ? '#7A5F00' : `${plan.statusColor}CC`,
                    color: '#fff',
                    border: `1px solid ${plan.statusColor}80`,
                  }}
                >
                  {plan.status}
                </Badge>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: hoveredCard === plan.id ? `0 0 30px ${plan.statusColor}40` : "0 0 0px transparent",
                }}
                transition={{ duration: 0.3 }}
              />

              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4">
                  {/* Icon/Thumbnail */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === plan.id ? 1.2 : 1,
                      rotate: hoveredCard === plan.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md"
                  >
                    {plan.icon}
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-bold text-[#2C3E35] mb-1 line-clamp-2" title={plan.title}>{plan.title}</CardTitle>
                    <div className="flex items-center space-x-3 text-sm text-[#2C3E35]/80">
                      <span className="font-medium">{plan.grade}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{plan.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-[#2C3E35]/80 mb-4 line-clamp-2" title={plan.description}>{plan.description}</p>

                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white rounded-full text-xs font-medium transition-all duration-300"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white rounded-full text-xs font-medium transition-all duration-300 bg-transparent focus:bg-[#8A2BE2] focus:text-white"
                  >
                    <Edit3 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                </div>

                {/* Hover Enhancement */}
                <AnimatePresence>
                  {hoveredCard === plan.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-[#2C3E35]/10"
                    >
                      <div className="flex items-center justify-between text-xs text-[#2C3E35]/80">
                        <span className="flex items-center space-x-1">
                          <Sparkles className="h-3 w-3" />
                          <span>Curriculum Aligned</span>
                        </span>
                        <span className="font-medium">{plan.subject}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Before/After Infographic */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-gray-100 via-[#E8E6F5] to-white rounded-2xl p-6 shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before */}
          <div className="text-center space-y-4">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-3"
              >
                <Monitor className="h-8 w-8 text-red-500" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2C3E35]">Before Zaza</h4>
              <p className="text-sm text-[#2C3E35]/80">Late-night clutter, multiple tabs, endless searching</p>
              <div className="text-2xl font-bold text-red-500">3 hours</div>
              <p className="text-xs text-[#2C3E35]/80">of prep time</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="h-8 w-8 text-[#8A2BE2]" />
            </motion.div>
          </div>

          {/* After */}
          <div className="text-center space-y-4">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-16 h-16 bg-[#66B2B2]/20 rounded-2xl flex items-center justify-center mx-auto mb-3"
              >
                <Coffee className="h-8 w-8 text-[#66B2B2]" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#66B2B2] rounded-full flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2C3E35]">After Zaza</h4>
              <p className="text-sm text-[#2C3E35]/80">Single screen calm, early evening, cup of tea</p>
              <div className="text-2xl font-bold text-[#66B2B2]">5 minutes</div>
              <p className="text-xs text-[#2C3E35]/80">of clarity</p>
            </div>
          </div>
        </div>

        {/* Bottom Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-6 pt-6 border-t border-[#2C3E35]/10"
        >
          <p className="text-lg font-semibold text-[#8A2BE2]">3 hours of prep → 5 minutes of clarity</p>
          <p className="text-sm text-[#2C3E35]/80 mt-1">Reclaim your evenings. Rediscover your passion for teaching.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LessonPlanShowcase
