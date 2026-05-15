"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Strictly Verified Care Agents",
  "Real-time Coordination & Updates",
  "Emotional Support & Companionship",
  "Safe and Reliable Transportation",
  "Flexible Scheduling tailored to you",
  "24/7 Emergency Support line",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              More than just a service, we provide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Peace of Mind.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We know how difficult it is to balance your career, your life away from home, and the well-being of your parents. Oricareo bridges that gap with compassion and professionalism.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30 active:scale-95"
              >
                Experience the Difference
              </a>
            </div>
          </motion.div>

          {/* Visual comparison/trust UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl p-8 relative z-10 border border-slate-700/50">
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Standard Care</h3>
                  <p className="text-slate-400 text-sm">Typical alternatives</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold">
                  VS
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-teal-400 mb-1">Oricareo</h3>
                  <p className="text-slate-400 text-sm">Our premium promise</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Background Checks", standard: "Basic", oricareo: "Rigorous & Verified" },
                  { label: "Updates", standard: "End of day", oricareo: "Real-time tracking" },
                  { label: "Support", standard: "Transactional", oricareo: "Compassionate" },
                  { label: "Flexibility", standard: "Rigid blocks", oricareo: "Tailored to need" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm sm:text-base">
                    <span className="text-slate-400 w-1/3 text-left">{item.label}</span>
                    <span className="text-slate-500 w-1/3 text-center line-through decoration-slate-600/50">{item.standard}</span>
                    <span className="text-teal-400 w-1/3 text-right font-semibold">{item.oricareo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
