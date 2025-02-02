"use client";

import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef } from "react";

export const InfiniteMovingCards = ({
  items,
}: {
  items: Array<{ img: string; name: string; role: string; description: string }>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useAnimationFrame(() => {
    if (!scrollerRef.current) return;
    
    const scrollWidth = scrollerRef.current.scrollWidth;
    const clientWidth = scrollerRef.current.clientWidth;
    
    if (scrollWidth > clientWidth) {
      scrollerRef.current.style.transform = `translateX(-${scrollWidth}px)`;
    }
  });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <ul
        ref={scrollerRef}
        className="flex gap-8 w-max"
      >
        {[...items, ...items].map((item, idx) => (
          <motion.li
            key={idx}
            className="relative w-[300px] bg-gray-900 rounded-2xl p-6"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-primary mb-1">{item.role}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};