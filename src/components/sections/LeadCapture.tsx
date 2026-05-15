"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    age: "",
    service: "Routine Health Checkups",
    contactMethod: "WhatsApp",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.age || isNaN(Number(formData.age))) newErrors.age = "Valid age is required";
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid phone number required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);

      // Construct WhatsApp message
      const text = `Hello Oricareo! I need assistance.
Name: ${formData.fullName}
City: ${formData.city}
Elderly Person Age: ${formData.age}
Service Needed: ${formData.service}
Preferred Contact: ${formData.contactMethod}
Phone: ${formData.phone}`;

      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/917400657966?text=${encodedText}`;

      // Redirect to WhatsApp after showing toast briefly
      setTimeout(() => {
        window.open(waUrl, "_blank");
        setIsSubmitted(false);
        setFormData({ fullName: "", city: "", age: "", service: "Routine Health Checkups", contactMethod: "WhatsApp", phone: "" });
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-xl border border-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 opacity-50 -z-10" />

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Assistance Today</h2>
            <p className="text-slate-600">Fill out the form below, and our care coordination team will reach out to you instantly.</p>
          </div>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 bg-green-50 text-green-700 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg border border-green-200 z-50 w-[90%] md:w-auto"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Details received! Redirecting to WhatsApp...</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              {errors.fullName && <span className="text-xs text-red-500">{errors.fullName}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 74006 57966"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">City</label>
              <input
                type="text"
                placeholder="Mumbai"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.city ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              {errors.city && <span className="text-xs text-red-500">{errors.city}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Elderly Person Age</label>
              <input
                type="number"
                placeholder="75"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.age ? 'border-red-400 bg-red-50' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              {errors.age && <span className="text-xs text-red-500">{errors.age}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              >
                <option>Routine Health Checkups</option>
                <option>Hospital Pickup & Drop</option>
                <option>Religious Visits</option>
                <option>Medicine Assistance</option>
                <option>Companion Support</option>
                <option>Emergency Assistance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Preferred Contact Method</label>
              <select
                value={formData.contactMethod}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              >
                <option>WhatsApp</option>
                <option>Phone Call</option>
              </select>
            </div>

            <div className="col-span-1 md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitted ? "Processing..." : (
                  <>
                    <span>Submit & Continue to WhatsApp</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
