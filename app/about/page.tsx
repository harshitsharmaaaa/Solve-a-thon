"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Target, Rocket, Heart, Brain, Globe, ChevronDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black/95 relative overflow-hidden">
      {/* Dark theme background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a365d,transparent)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Solveathon
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-200/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A 24-hour hackathon where innovation meets impact, bringing together the brightest minds to solve real-world challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-900/20 to-black/20" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Users className="w-8 h-8" />, number: "500+", label: "Participants" },
            { icon: <Brain className="w-8 h-8" />, number: "50+", label: "Mentors" },
            { icon: <Clock className="w-8 h-8" />, number: "24", label: "Hours" },
            { icon: <Award className="w-8 h-8" />, number: "₹5L+", label: "In Prizes" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl border border-blue-900/50 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-500">
                {stat.number}
              </div>
              <div className="text-blue-200/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-xl border border-blue-900/50 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all group"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-500">
                Our Mission
              </h2>
              <p className="text-blue-200/80 mb-8">
                Solveathon aims to foster innovation and creativity by bringing together talented individuals from diverse backgrounds. We believe in the power of collaboration and technology to solve real-world problems.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Rocket className="w-6 h-6" />, text: "Drive Innovation" },
                  { icon: <Users className="w-6 h-6" />, text: "Build Community" },
                  { icon: <Award className="w-6 h-6" />, text: "Recognize Talent" },
                  { icon: <Globe className="w-6 h-6" />, text: "Create Impact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-all bg-slate-900/40 hover:bg-slate-900/60 group"
                  >
                    <div className="bg-blue-950 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-blue-100">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-slate-900/80 group-hover:opacity-75 transition-opacity" />
              <img
                src="/api/placeholder/800/600"
                alt="Team collaborating"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-xl border border-blue-900/50 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all group"
          >
            <MapPin className="w-12 h-12 mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-500">
              Event Location
            </h2>
            <p className="text-blue-200/80 mb-6">
              Join us at the Innovation Hub, Tech Campus
              <br />
              123 Developer Street, Startup City
            </p>
            <Button 
              variant="outline" 
              className="bg-blue-950/50 hover:bg-blue-900/50 border-blue-900/50 hover:border-blue-700/50 text-blue-100"
            >
              Get Directions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}