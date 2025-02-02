"use client";

import { motion } from "framer-motion";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};