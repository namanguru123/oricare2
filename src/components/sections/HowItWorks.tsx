"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Users, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a Service",
    description: "Choose the service you need and schedule a date and time that works best for your loved ones.",
  },
  {
    number: "02",
    icon: Users,
    title: "Verified Agent Assists",
    description: "Our background-verified professional arrives on time and provides compassionate assistance.",
  },
  {
    number: "03",
    icon: Home,
    title: "Safe Return Home",
    description: "We ensure they are safely dropped back home, and keep you updated throughout the process.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Oricare Works
          </h2>
          <p className="text-slate-600 text-lg">
            A simple, transparent process designed to give you peace of mind while we care for your family.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full" />
          
          {/* Animated Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 -translate-y-1/2 rounded-full origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-6 bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-teal-500 transition-colors">
                  {step.number}
                </div>

                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-teal-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
