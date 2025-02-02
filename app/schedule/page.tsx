"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function Schedule() {
  const schedule = [
    {
      day: "Day 1",
      events: [
        { time: "09:00 AM", title: "Registration & Check-in", description: "Get your team registered and set up" },
        { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address and track announcements" },
        { time: "11:00 AM", title: "Hacking Begins", description: "Start working on your projects" },
        { time: "01:00 PM", title: "Lunch Break", description: "Network while you eat" },
        { time: "04:00 PM", title: "Mentor Sessions", description: "Get guidance from industry experts" },
        { time: "08:00 PM", title: "Dinner", description: "Recharge and continue hacking" }
      ]
    },
    {
      day: "Day 2",
      events: [
        { time: "12:00 AM", title: "Midnight Snacks", description: "Keep the energy high" },
        { time: "08:00 AM", title: "Breakfast", description: "Start your day right" },
        { time: "10:00 AM", title: "Project Submissions", description: "Submit your work" },
        { time: "11:00 AM", title: "Presentations", description: "Present your solutions" },
        { time: "02:00 PM", title: "Judging", description: "Projects evaluation" },
        { time: "04:00 PM", title: "Closing Ceremony", description: "Winners announcement and prizes" }
      ]
    }
  ]

  return (
    <div className="pt-16 bg-gray-900">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Event Schedule
          </h1>
          <p className="text-xl text-gray-300">
            24 hours of innovation, learning, and fun
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
              className="mb-16 relative"
            >
              <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-full" />
              <h2 className="text-3xl font-bold mb-10 ml-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {day.day}
              </h2>
              
              <div className="space-y-8 ml-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-7 top-5 h-[calc(100%+2rem)] w-0.5 bg-white/10 last-of-type:opacity-0" />
                    <div className="absolute -left-9 top-4 w-4 h-4 rounded-full bg-blue-400 ring-4 ring-blue-400/30" />
                    
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center text-blue-400">
                          <Clock className="w-6 h-6 mr-2" />
                          <span className="font-semibold">{event.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-400">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}