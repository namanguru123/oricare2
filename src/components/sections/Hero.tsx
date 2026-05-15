"use client";

import { motion } from "framer-motion";
import { Calendar, PhoneCall, HeartPulse, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6 shadow-sm border border-teal-200">
              <HeartPulse className="w-4 h-4" />
              <span>Compassionate Care for Seniors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
              Because Your Loved Ones Deserve Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Even When You&apos;re Away
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Oricareo connects you with verified, qualified caretaking agents who provide daily assistance, hospital visits, and companion support for your elderly family members.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                Book Assistance
              </a>
              <a
                href="https://wa.me/917400657966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50 transition-all shadow-sm active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-teal-600" />
                Talk on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Background Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-rose-500" />
                <span>Compassionate Staff</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content / Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/elderly-care.png" 
                alt="Compassionate care agent with an elderly person" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 md:-left-12 glass p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">100% Verified</p>
                <p className="text-xs text-slate-500">Professional Agents</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-20 -right-6 md:-right-10 glass p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                    User
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-800">500+ Families</p>
                <p className="text-xs text-slate-500">Trust Oricareo</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
