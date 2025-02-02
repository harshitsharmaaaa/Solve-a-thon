"use client";

import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({ words, className }: { words: { text: string; className?: string }[], className?: string }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className={`text-6xl md:text-9xl font-bold ${word.className}`}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
};