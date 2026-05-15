"use client";

import { motion } from "framer-motion";
import { Quote, Link, Mail } from "lucide-react";
import Image from "next/image";

export function Founder() {
  return (
    <section className="py-24 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-teal-100/50 relative">

          <Quote className="absolute top-8 right-8 w-16 h-16 text-teal-100/50 -z-0" />

          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-4 border-teal-100 overflow-hidden relative shadow-lg"
            >
              <Image 
                src="/founder.jpeg" 
                alt="Kushagra Sharma, Founder of Oricareo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                A Message from Our Founder
              </h3>
              <div className="w-12 h-1 bg-teal-500 rounded-full mb-6" />

              <p className="text-lg md:text-xl text-slate-600 italic leading-relaxed mb-6">
                &quot;Oricareo was created with a simple vision — no elderly person should feel alone when their children are away chasing dreams. We step in to provide the care, warmth, and reliability of family.&quot;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-lg">Kushagra Sharma</p>
                  <p className="text-teal-600 font-medium text-sm">Founder & CEO, Oricareo</p>
                </div>

                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Link className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
