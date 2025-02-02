"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Coins, Heart, GraduationCap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Tracks() {
  const tracks = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI/ML",
      description: "Build innovative solutions using artificial intelligence and machine learning.",
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-500"
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Web3",
      description: "Create decentralized applications and explore blockchain technology.",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500"
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "FinTech",
      description: "Develop solutions for the future of finance and banking.",
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "HealthTech",
      description: "Innovate in healthcare delivery and patient care.",
      color: "from-red-500 to-pink-500",
      borderColor: "border-red-500"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "EdTech",
      description: "Transform the future of education and learning.",
      color: "from-indigo-500 to-blue-500",
      borderColor: "border-indigo-500"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Open Innovation",
      description: "Build anything that creates positive impact.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500"
    }
  ]

  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        />
        <div className="absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 stroke-muted-foreground/30 [mask-image:radial-gradient(400px_at_center,white,transparent)]">
          <svg
            aria-hidden="true"
            className="inset-0 h-full w-full"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="-1"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-muted-foreground/10">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
        </div>
      </div>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Hackathon Tracks
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your track and start building innovative solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={cn(
                "absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000",
                `bg-gradient-to-br ${track.color}`
              )} />
              <div className="relative bg-card p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow border border-muted">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="text-primary mb-6 flex justify-center"
                >
                  <motion.div whileHover={{ rotate: 15 }}>{track.icon}</motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {track.title}
                </h3>
                <p className="text-muted-foreground mb-6">{track.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full border-2 bg-background/80 backdrop-blur-sm hover:bg-primary/10"
                  >
                    <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      Learn More
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              borderRadius: `${Math.random() * 50}%`,
              background: `linear-gradient(45deg, ${tracks[i % tracks.length].color})`,
            }}
          />
        ))}
      </section>
    </div>
  )
}