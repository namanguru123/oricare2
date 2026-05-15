"use client";

import { motion } from "framer-motion";
import { Activity, Ambulance, Church, Pill, HeartHandshake, PhoneForwarded } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Routine Health Checkups",
    description: "Regular doctor visits and health monitoring with our professional agents.",
  },
  {
    icon: Ambulance,
    title: "Hospital Pickup & Drop",
    description: "Safe and comfortable transportation to and from the hospital.",
  },
  {
    icon: Church,
    title: "Religious Visits",
    description: "Assistance for visiting temples, churches, or other places of worship.",
  },
  {
    icon: Pill,
    title: "Medicine Assistance",
    description: "Timely reminders and assistance with daily medication routines.",
  },
  {
    icon: HeartHandshake,
    title: "Companion Support",
    description: "Friendly companionship to prevent loneliness and assist with daily tasks.",
  },
  {
    icon: PhoneForwarded,
    title: "Emergency Assistance",
    description: "Immediate response and support during unexpected medical situations.",
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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Care Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            From routine checkups to daily companionship, our services are designed to cater to all the essential needs of your loved ones.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-100/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="w-14 h-14 bg-slate-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
