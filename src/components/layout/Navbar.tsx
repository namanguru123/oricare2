"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass border-slate-200/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="bg-teal-500 p-2 rounded-xl text-white group-hover:bg-teal-600 transition-colors">
            <HeartPulse className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            Oricare
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-teal-600 font-medium transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition-all shadow-md hover:shadow-teal-500/20 active:scale-95"
          >
            Book Assistance
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-slate-100 absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-teal-600 font-medium p-2 rounded-lg hover:bg-teal-50/50"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 mt-2 bg-teal-500 text-white font-medium rounded-xl hover:bg-teal-600 transition-all"
          >
            Book Assistance
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
