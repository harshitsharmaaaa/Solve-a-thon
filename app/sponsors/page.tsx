"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, Star, ChevronRight } from "lucide-react"
import { useState } from "react"


export default function Sponsors() {
  
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);

  const sponsorTiers = [
    {
      tier: "Platinum",
      color: "from-zinc-200/10 via-zinc-300/10 to-zinc-200/10",
      borderColor: "border-zinc-200/10",
      sponsors: [
        { name: "Tech Corp", logo: "/api/placeholder/200/200" },
        { name: "Innovation Labs", logo: "/api/placeholder/200/200" }
      ]
    },
    {
      tier: "Gold",
      color: "from-yellow-500/10 via-yellow-400/10 to-yellow-500/10",
      borderColor: "border-yellow-500/10",
      sponsors: [
        { name: "Future Systems", logo: "/api/placeholder/200/200" },
        { name: "Digital Solutions", logo: "/api/placeholder/200/200" },
        { name: "Tech Ventures", logo: "/api/placeholder/200/200" }
      ]
    },
    {
      tier: "Silver",
      color: "from-gray-400/10 via-gray-300/10 to-gray-400/10",
      borderColor: "border-gray-400/10",
      sponsors: [
        { name: "StartUp Inc", logo: "/api/placeholder/200/200" },
        { name: "Dev Tools", logo: "/api/placeholder/200/200" },
        { name: "Cloud Services", logo: "/api/placeholder/200/200" },
        { name: "Tech Solutions", logo: "/api/placeholder/200/200" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const sponsorVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      scale: 1.05,
      rotate: [0, -1, 1, -1, 0],
      transition: {
        rotate: {
          duration: 0.2
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Our Sponsors
          </h1>
          <p className="text-xl text-gray-400">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-20"
        >
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tierIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center justify-center gap-4 mb-12">
                <Star className="w-6 h-6 text-gray-400" />
                <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  {tier.tier} Sponsors
                </h2>
                <Star className="w-6 h-6 text-gray-400" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    variants={sponsorVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredSponsor(`${tierIndex}-${sponsorIndex}`)}
                    onHoverEnd={() => setHoveredSponsor(null)}
                    className={`relative group rounded-xl backdrop-blur-sm border ${tier.borderColor}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-6">
                      <div className="bg-black/40 rounded-lg p-4 mb-4">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain filter brightness-110" />
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {sponsor.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center mt-32 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Become a Sponsor
          </h2>
          <p className="text-gray-400 mb-8">
            Interested in sponsoring our hackathon? Get in touch to learn about our sponsorship packages.
          </p>
          <Button size="lg" variant="outline" className="group hover:bg-white/10">
            <Mail className="mr-2 group-hover:animate-bounce" />
            Contact for Sponsorship
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
