"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

export const AnimatedGradientBorder = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const radius = 100;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const backgroundImage = useMotionTemplate`radial-gradient(
    ${radius}px circle at ${x}px ${y}px,
    rgba(139, 92, 246, 0.4),
    rgba(192, 132, 252, 0.2) 20%,
    transparent 50%
  )`;

  return (
    <motion.div
      className={`relative p-[2px] rounded-lg ${className}`}
      style={{ backgroundImage }}
      onMouseMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - bounds.left);
        y.set(e.clientY - bounds.top);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};