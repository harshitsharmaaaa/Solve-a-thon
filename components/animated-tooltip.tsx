"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const AnimatedTooltip = ({ content, children }: { content: React.ReactNode; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full mb-4 bg-gray-900/80 backdrop-blur-xl p-4 rounded-xl border border-gray-800"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};