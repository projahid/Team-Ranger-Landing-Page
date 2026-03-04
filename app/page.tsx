import { Hero } from "@/components/Hero";
import { HeroImage } from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Hero />
      <HeroImage />
      {/* Other sections will go here later */}
    </div>
  );
}
