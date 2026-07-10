"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/hero/hero-section";

export default function LoadingSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<
    "loading" | "portrait" | "orbit" | "complete"
  >("loading");

  const advancePhase = useCallback(() => {
    setPhase((prev) => {
      switch (prev) {
        case "loading":
          return "portrait";
        case "portrait":
          return "orbit";
        case "orbit":
          return "complete";
        default:
          return prev;
      }
    });
  }, []);

  useEffect(() => {
    // Phase 1: Show CK logo + ring for 600ms
    const t1 = setTimeout(() => advancePhase(), 600);
    // Phase 2: Portrait fade in for 400ms
    const t2 = setTimeout(() => advancePhase(), 1000);
    // Phase 3: Orbit builds + hero reveals
    const t3 = setTimeout(() => advancePhase(), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [advancePhase]);

  useEffect(() => {
    if (phase !== "complete") {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => document.body.classList.remove("scroll-locked");
  }, [phase]);

  return (
    <>
      {/* Loading overlay */}
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5F5F7]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* CK Monogram */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="text-4xl font-bold tracking-tight text-[#1D1D1F]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                CK
              </motion.div>
              {/* Expanding ring */}
              <motion.div
                className="absolute w-16 h-16 rounded-full border border-[#0071E3]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute w-16 h-16 rounded-full border border-[#0071E3]/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.15,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div
        className={phase !== "complete" ? "pointer-events-none" : undefined}
      >
        {children}
      </div>

      {/* Pass phase to hero */}
      <HeroPhaseContext.Provider value={phase}>
        <div />
      </HeroPhaseContext.Provider>
    </>
  );
}

// Context for hero to know loading phase
import { createContext, useContext } from "react";

export const HeroPhaseContext = createContext<
  "loading" | "portrait" | "orbit" | "complete"
>("complete");

export function useHeroPhase() {
  return useContext(HeroPhaseContext);
}
