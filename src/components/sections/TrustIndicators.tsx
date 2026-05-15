"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Stethoscope, Car, HeartHandshake } from "lucide-react";

const indicators = [
  {
    icon: UserCheck,
    title: "Verified Care Agents",
    description: "Highly trained professionals you can trust with your family.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Background Verified",
    description: "Rigorous background checks for every agent on our platform.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Stethoscope,
    title: "Hospital Assistance",
    description: "Expert guidance and support during routine hospital visits.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Car,
    title: "Safe Pickup & Drop",
    description: "Comfortable and reliable transportation for all appointments.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Support",
    description: "We treat your loved ones with the utmost respect and empathy.",
    color: "bg-teal-100 text-teal-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TrustIndicators() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Families Trust Oricare
          </h2>
          <p className="text-slate-600 text-lg">
            We understand that leaving your loved ones in someone else&apos;s care requires immense trust. Here is how we ensure their safety and comfort.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
