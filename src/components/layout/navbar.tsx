"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LiquidGlassLink from "@/components/ui/liquid-glass-link";
import ThemeToggle from "@/components/ui/theme-toggle";
import profileData from "@/data/profile.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-all duration-500",
          scrolled
            ? "bg-white/78 dark:bg-[#0a0a0e]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.08)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/72 dark:bg-white/[0.06] px-4 shadow-sm backdrop-blur-xl md:px-5">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-bold text-[#15171C] dark:text-white transition-opacity hover:opacity-75"
            aria-label="Chandan Kumar home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#15171C] dark:bg-white text-xs text-white dark:text-[#15171C]">
              CK
            </span>
            <span className="hidden sm:inline">Chandan Kumar</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {profileData.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-semibold text-[#445063] dark:text-[#a1a1aa] transition-colors duration-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-[#15171C] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <LiquidGlassLink
              href="/resume.pdf"
              className="ml-1 h-9 px-5 text-xs"
            >
              Resume
            </LiquidGlassLink>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full text-[#15171C] dark:text-white transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.1]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#F7F8FB] dark:bg-[#0a0a0e]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="flex flex-col items-center gap-5">
              {profileData.navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full px-5 py-2 text-3xl font-bold text-[#15171C] dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: profileData.navItems.length * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <LiquidGlassLink
                  href="/resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="h-12 px-8 text-2xl font-bold"
                >
                  Resume
                </LiquidGlassLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
