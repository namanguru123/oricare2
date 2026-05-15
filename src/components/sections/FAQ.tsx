"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do you verify your caretaking agents?",
    answer: "Every Oricare agent goes through a rigorous 4-step verification process, including an identity check, comprehensive background check, medical emergency response training verification, and a multi-round interview process.",
  },
  {
    question: "Can I choose the same agent for recurring visits?",
    answer: "Absolutely. We understand that comfort and familiarity are crucial for the elderly. You can request the same agent for recurring services, subject to their availability.",
  },
  {
    question: "How do you handle medical emergencies?",
    answer: "Our agents are trained in basic first aid and emergency response protocols. In case of an emergency, they will immediately contact the designated ambulance service, inform the nearest hospital, and notify you simultaneously.",
  },
  {
    question: "How will I receive updates during a hospital visit?",
    answer: "Our agents provide real-time updates via WhatsApp or phone call at every step—from pickup to doctor consultation details, medicine prescription sharing, and safe drop-off.",
  },
  {
    question: "Is there a minimum booking duration?",
    answer: "Our services are flexible. Whether you need assistance for a quick 2-hour checkup or full-day companion support, we tailor the scheduling to meet your specific needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about our caretaking services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index ? "border-teal-200 bg-teal-50/30" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? "text-teal-700" : "text-slate-800"}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? "bg-teal-100 text-teal-600" : "bg-slate-100 text-slate-500"
                }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
