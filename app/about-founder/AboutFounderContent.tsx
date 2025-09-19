"use client";
import { motion } from "framer-motion";

export default function AboutFounderContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8FC] via-white to-[#E8E6F5]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Founder Photo */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#66B2B2] to-[#8A2BE2] rounded-full p-1">
                  <div className="bg-white rounded-full p-2">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Dr. Greg Blackburn, Founder of Zaza Technologies"
                      width={220}
                      height={220}
                      className="rounded-full shadow-xl object-cover w-[220px] h-[220px]"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E35] mb-6">
              About the Founder
            </h1>
            
            <p className="text-xl text-[#2C3E35]/80 mb-8 max-w-2xl mx-auto">
              Dr. Greg Blackburn, Founder & CEO of Zaza Technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl font-medium text-[#2C3E35] mb-6">
                Hi, I'm Greg.
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-6">
                I didn't come to education through the usual path. My journey began in Tasmania, working as a painter and decorator - a job I quickly realised was going nowhere. What changed everything was education. Step by step, learning opened doors I never thought possible, lifting me out of a dead-end role and guiding me all the way to becoming a Chief Learning Officer.
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-6">
                Along the way, I trained thousands of professionals in business classrooms, helping them build skills, confidence, and resilience. Those experiences gave me a deep appreciation for what it means to stand at the front of a room, to juggle expectations, and to pour energy into others every single day. Teachers will recognise that rhythm - it's the same commitment, just in a different context.
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-6">
                Education then became my life's work. I earned a <strong>PhD in Professional Education from City, University of London</strong>, and went on to publish extensively on how people think, learn, and solve problems. My research and practice have always circled back to one question: <strong>how can we make learning easier, lighter, and more human?</strong>
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-6">
                Teaching is also in my blood. My sister, aunty, uncle, cousins - and many close friends - are educators. Through them, and through decades in education and learning design, I've seen the realities of constant planning, admin overload, and the emotional labour of trying to be everything to everyone.
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-6">
                That's why I created <strong>Zaza Teach</strong>. It rests on two pillars: rigorous pedagogy and deep empathy for teachers. This isn't about replacing anyone - it's about giving teachers time, creativity, and confidence back. A tool that feels like a trusted colleague, taking on the heavy lifting so you can focus on what truly matters: just teaching.
              </p>

              <p className="text-lg text-[#2C3E35]/90 leading-relaxed mb-8">
                Education changed the trajectory of my life. Now my mission is to help teachers thrive - because when teachers thrive, students flourish.
              </p>

              <div className="border-t border-[#2C3E35]/10 pt-6">
                <p className="text-lg font-medium text-[#2C3E35]">
                  - <strong>Dr. Greg Blackburn</strong><br />
                  <span className="text-[#66B2B2]">Founder & CEO, Zaza Technologies</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#66B2B2]/10 to-[#8A2BE2]/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#2C3E35] mb-4">
              Ready to reclaim your time?
            </h2>
            <p className="text-lg text-[#2C3E35]/80 mb-6">
              Join thousands of teachers who've discovered the joy of 5-minute lesson planning.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#66B2B2] hover:bg-[#66B2B2]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg"
            >
              Try Zaza Teach Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
