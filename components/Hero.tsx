import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Image/hero-section-image.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-luminosity"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/90 via-[#0a0a0f]/60 to-[#0a0a0f] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center text-left pt-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4de172] animate-pulse shadow-[0_0_10px_#4de172]" />
            <span className="text-sm font-medium text-gray-300">The #1 Platform for Team Management</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Elevate Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf]">
              Team's Potential
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Discover the most powerful and intuitive platform to evaluate, rank, and manage your teams. Drive performance with data-driven insights and beautifully crafted dashboards.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="cursor-pointer w-full sm:w-auto bg-[#4de172] hover:bg-[#3dcc60] text-black font-bold rounded-full px-8 h-14 text-lg transition-all shadow-[0_0_20px_rgba(77,225,114,0.3)] hover:shadow-[0_0_30px_rgba(77,225,114,0.5)] group">
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" className="cursor-pointer w-full sm:w-auto bg-white/5 text-white border-white/20 font-semibold rounded-full px-8 h-14 text-lg backdrop-blur-sm transition-all">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#0a0a0f] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0a0a0f] flex items-center justify-center text-xs text-white font-medium z-10">
                +2k
              </div>
            </div>
            <p className="font-medium">Trusted by over <strong className="text-gray-300">2,000+</strong> top tier teams.</p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade matching Root background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
