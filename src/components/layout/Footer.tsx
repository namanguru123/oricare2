import { HeartPulse, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2 group inline-flex">
              <div className="bg-teal-500/20 p-2 rounded-xl text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">Oricare</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We provide compassionate, verified caretaking agents for elderly family members, giving you peace of mind when you can&apos;t be there.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "How It Works", "Services", "Why Choose Us"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-teal-400 transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-teal-500 before:rounded-full before:opacity-0 hover:before:opacity-100"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="mailto:hello@oricare.com" className="hover:text-teal-400 transition-colors">
                  hello@oricare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>123 Care Avenue, Healthcare District, Mumbai 400001</span>
              </li>
            </ul>
          </div>

          {/* CTA / WhatsApp */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Need Immediate Help?</h3>
            <p className="text-sm text-slate-400">Our support team is available 24/7 on WhatsApp.</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Oricare. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <HeartPulse className="w-4 h-4 text-red-500" /> for your loved ones
          </p>
        </div>
      </div>
    </footer>
  );
}
