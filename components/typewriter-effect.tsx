"use client";

import { motion } from "framer-motion";
import React from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: Array<{ text: string; className?: string }>;
  className?: string;
}) => {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className={`text-4xl md:text-6xl font-bold ${word.className}`}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
};