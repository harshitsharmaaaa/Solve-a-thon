"use client";

import { motion } from "framer-motion";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-px ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-30" />
      <div className="relative bg-gray-900 rounded-3xl p-8">
        {children}
      </div>
    </motion.div>
  );
};