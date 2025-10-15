// components/WinEffect.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

interface WinEffectProps {
  winner: string; 
}

export default function WinEffect({ winner }: WinEffectProps) {
  if (!winner) return null; // 

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-5xl font-bold text-white drop-shadow-lg"
        >
          {winner === "circle" && (
            <span className="text-sky-400">⭕ Circle Wins!</span>
          )}
          {winner === "cross" && (
            <span className="text-red-400">❌ Cross Wins!</span>
          )}
          {winner === "draw" && (
            <span className="text-yellow-400">🤝 Draw!</span>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
