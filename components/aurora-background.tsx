"use client";

import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900  ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.4, 0.2, 0.1],
            scale: 1,
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute blur-[100px] -inset-[100px] bg-gradient-to-r from-violet-600/20 to-pink-600/20"
        />
      </div>
      {children}
    </div>
  );
};