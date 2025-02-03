"use client"

import AnimatedHero from "@/components/AnimatedHero";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, Box, Gem, Shield, Sparkles, Terminal, Cpu, Database, Network } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);

  // Use transforms with safe window dimensions
  const rotateX = useTransform(y, [0, isClient ? window.innerHeight : 0], [15, -15]);
  const rotateY = useTransform(x, [0, isClient ? window.innerWidth : 0], [-15, 15]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={isClient ? handleMouse : undefined}
        className="relative h-screen flex items-center justify-center overflow-hidden cursor-none"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <motion.div 
            className="absolute inset-0 bg-radial-gradient from-primary/30 via-transparent to-transparent"
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Floating Tech Elements */}
       {/* Floating Tech Elements */}
<div className="absolute inset-0 z-0">
  {[...Array(15)].map((_, i) => {
    const Icon = [Terminal, Cpu, Database, Network][i % 4];
    return (
      <motion.div
        key={i}
        className="absolute text-primary/20"
        style={{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          rotateX,
          rotateY,
        }}
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon size={40} />
      </motion.div>
    );
  })}
</div>

        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-8 overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-5xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(99,102,241,0.5)",
                    "0 0 20px rgba(99,102,241,0.8)",
                    "0 0 10px rgba(99,102,241,0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                SOLVEATHON
              </motion.h1>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-400 max-w-2xl mx-auto"
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1.5 }}
            >
              Where <motion.span 
                className="text-primary" 
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >code</motion.span> meets{' '}
              reality in 24 hours of<br />
              non-stop innovation
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-full px-8 py-6 text-lg font-bold shadow-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                <Sparkles className="mr-2" /> Join the Revolution
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="w-4 h-8 rounded-full border-2 border-primary/50 relative">
            <motion.div
              className="w-2 h-2 bg-primary rounded-full absolute top-1 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className="mt-2 text-sm text-primary/50">Explore More</span>
        </motion.div>
      </section>

      {/* Enhanced Grid Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: item * 0.2 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-noise opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {item === 1 ? <Box className="w-8 h-8 text-primary" /> : 
                   item === 2 ? <Gem className="w-8 h-8 text-accent" /> : 
                   <Shield className="w-8 h-8 text-green-400" />}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  whileHover={{ x: 5 }}
                >
                  {item === 1 ? 'Build the Future' : 
                   item === 2 ? 'Premium Prizes' : 
                   'Secure Platform'}
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item === 1 ? 'Create groundbreaking solutions using cutting-edge tech' : 
                   item === 2 ? 'Compete for exclusive rewards and recognition' : 
                   'Enterprise-grade infrastructure for your projects'}
                </motion.p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Brilliant Minds</h2>
            <p className="text-muted-foreground">Meet the mentors and innovators behind Solveathon</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "Prof. Sarah Johnson",
                role: "Lead Mentor",
                description: "AI/ML Expert with 15+ years experience"
              },
              {
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "Dr. Michael Chen",
                role: "Blockchain Specialist",
                description: "Web3 enthusiast and researcher"
              },
              {
                img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "Emma Williams",
                role: "Student Innovator",
                description: "Last year's Grand Prize Winner"
              },
              {
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "Alex Martinez",
                role: "Tech Mentor",
                description: "Full-stack development expert"
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  y: -10,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                className="bg-card rounded-xl shadow-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                </div>
                
                <motion.div
                  className="p-6 text-center"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                  <p className="text-primary mb-2">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800">
                <h2 className="text-4xl font-bold mb-6">The Next Generation Hackathon</h2>
                <p className="text-gray-400 mb-8">
                  Experience a fusion of cutting-edge technology and creative problem solving. 
                  Our platform provides everything you need to turn visionary ideas into reality.
                </p>
                <div className="space-y-6">
                  {['Real-time Collaboration', 'AI-Powered Mentoring', 'Blockchain Integration', 'Cloud Native Infrastructure'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item * 0.2 }}
                  className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {item === 1 ? 'Smart Contracts' : 
                       item === 2 ? 'Quantum Computing' : 
                       'Neural Networks'}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-400">
                    {item === 1 ? 'Build decentralized applications with automated trust' : 
                     item === 2 ? 'Solve complex problems with quantum algorithms' : 
                     'Implement machine learning models in real-world scenarios'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AnimatedHero/>
    </div>
  )
}