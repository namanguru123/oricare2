import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustIndicators />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
        <Founder />
        <Testimonials />
        <FAQ />
        <LeadCapture />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
