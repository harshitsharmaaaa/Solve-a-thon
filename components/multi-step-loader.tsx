"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Rocket } from "lucide-react";
export const MultiStepLoader = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Rocket className="h-16 w-16 text-purple-400" />
            </motion.div>
            <p className="text-gray-400">Initializing quantum systems...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};