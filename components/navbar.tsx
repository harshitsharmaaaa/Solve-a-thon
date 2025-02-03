"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tracks", label: "Tracks" },
    { href: "/schedule", label: "Schedule" },
    { href: "/sponsors", label: "Sponsors" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <MotionDiv
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a1930]/90 md:backdrop-blur-lg shadow-lg shadow-blue-900/20"
            : "bg-[#0a1930]/70 md:backdrop-blur-md"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Solveathon
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative px-3 py-2 text-sm font-medium text-blue-100/90 hover:text-blue-100 transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="pl-6">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                  Register Now
                </Button>
              </div>
            </div>

            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-blue-400/10 transition-colors text-blue-100">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <MotionDiv initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden border-t border-blue-400/10 bg-[#0a1930] rounded-b-2xl overflow-hidden">
              <div className="px-4 py-3 space-y-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className="block px-3 py-2 text-base font-medium rounded-lg transition-colors text-blue-100/90 hover:bg-blue-400/5">
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 pb-3">
                  <Button onClick={closeMenu} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                    Register Now
                  </Button>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </MotionDiv>
    </div>
  );
}
