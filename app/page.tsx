import { Hero } from "@/components/Hero";
import { HeroImage } from "@/components/HeroImage";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Hero />
      <HeroImage />
      <Pricing />
      <FAQ />
    </div>
  );
}
