"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Bangalore",
    relation: "Son",
    text: "Being in Bangalore while my parents are in Delhi always worried me. Since I found Oricare, I have complete peace of mind. The agents treat my parents like their own family.",
  },
  {
    name: "Priya Patel",
    location: "London",
    relation: "Daughter",
    text: "Oricare has been a blessing. The agent not only takes my father to his weekly dialysis but also stays with him, talks to him, and makes sure he is comfortable. It's truly emotional for me.",
  },
  {
    name: "Amit Desai",
    location: "Mumbai",
    relation: "Grandson",
    text: "The compassion and professionalism of Oricare's team is unmatched. When my grandmother had a sudden fall, the emergency assistance team arrived within minutes. I owe them a lot.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stories of Care & Trust
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from families who have experienced the warmth and reliability of Oricare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.relation} • {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
