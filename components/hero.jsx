"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative px-4 pt-40 pb-20 overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] via-white to-[hsl(var(--accent)/0.1)] opacity-50 animate-gradient dark:from-[hsl(var(--primary)/0.15)] dark:via-[hsl(var(--background))] dark:to-[hsl(var(--accent)/0.15)]" />
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/30 backdrop-blur-[2px]" />
      
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-[hsl(var(--primary)/0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-[hsl(var(--primary)/0.3)]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-[hsl(var(--accent)/0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-[hsl(var(--accent)/0.3)]"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [45, 0, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--chart-3)/0.2)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-[hsl(var(--chart-3)/0.3)]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container relative mx-auto text-center">
        <div className="relative">
          {/* Text background with glass effect */}
          <div className="absolute inset-0 p-8 -m-8 shadow-2xl bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl" />
          
          <div className="relative">
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title animate-slide-up dark:from-[hsl(var(--primary)/0.9)] dark:via-[hsl(var(--accent)/0.9)] dark:to-[hsl(var(--chart-3)/0.9)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Manage Your Finances <br /> with Intelligence
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto mb-8 text-xl text-muted-foreground animate-fade-in dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              An AI-powered financial management platform that helps you track,
              analyze, and optimize your spending with real-time insights.
            </motion.p>
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-8 space-x-4 animate-slide-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="px-8 m-8 button-hover bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] dark:bg-[hsl(var(--primary)/0.9)] dark:hover:bg-[hsl(var(--primary))] relative overflow-hidden group"
            >
              <span className="relative z-10 ">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
