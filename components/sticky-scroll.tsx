"use client";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export const StickyScroll = ({ content }: { content: React.ReactNode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="w-full">
          {content}
        </motion.div>
      </div>
    </div>
  );
};