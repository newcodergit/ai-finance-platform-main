"use client";

import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

export function Logo({ className = "" }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="relative p-2 text-white bg-primary rounded-xl"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Wallet className="w-6 h-6" />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="text-xl font-bold gradient-title">FinFlow</span>
        <span className="text-xs text-muted-foreground">Smart Finance</span>
      </motion.div>
    </motion.div>
  );
} 