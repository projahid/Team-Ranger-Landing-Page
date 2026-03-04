import { Hero } from "@/components/Hero";
import { HeroImage } from "@/components/HeroImage";
import { Features } from "@/components/Features";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Hero />
      <HeroImage />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </div>
  );
}
