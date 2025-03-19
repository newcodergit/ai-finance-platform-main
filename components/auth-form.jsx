"use client";

import { motion } from "framer-motion";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";

export function AuthForm({ type = "sign-in" }) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card/80 backdrop-blur-lg rounded-2xl shadow-xl border border-border/50 p-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Logo className="scale-125" />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold gradient-title mb-2">
              {type === "sign-in" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground">
              {type === "sign-in"
                ? "Sign in to manage your finances"
                : "Start your financial journey today"}
            </p>
          </motion.div>

          {/* Auth Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {type === "sign-in" ? (
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-transparent shadow-none",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "bg-secondary hover:bg-secondary/80",
                    formButtonPrimary: "bg-primary hover:bg-primary/90",
                    footerActionLink: "text-primary hover:text-primary/90",
                  },
                }}
              />
            ) : (
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-transparent shadow-none",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton: "bg-secondary hover:bg-secondary/80",
                    formButtonPrimary: "bg-primary hover:bg-primary/90",
                    footerActionLink: "text-primary hover:text-primary/90",
                  },
                }}
              />
            )}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
} 