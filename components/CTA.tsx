import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export function CTA() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full max-w-[1200px] h-[400px] md:h-[600px] bg-gradient-to-r from-[#4de172]/10 via-transparent to-[#2dd4bf]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="relative w-full max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(77,225,114,0.1)] group">

          {/* Desktop Image */}
          <Image
            src="/Image/CTA_Image-Desktop.png"
            alt="CTA Presentation Desktop"
            width={1200}
            height={800}
            className="hidden md:block w-full h-auto object-cover scale-[1.03] md:scale-[1.05] transition-transform duration-700 group-hover:scale-[1.08] md:group-hover:scale-110"
            priority
          />

          {/* Mobile Phone Image */}
          <Image
            src="/Image/CTA_Image_Phone.png"
            alt="CTA Presentation Mobile"
            width={800}
            height={1200}
            className="block md:hidden w-full h-auto object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
            priority
          />

          {/* Dark Overlay for better button visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Buttons overlaid at the bottom */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 w-[90%] sm:w-auto z-20">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-[#4de172] to-[#2dd4bf] hover:from-[#3dcc60] hover:to-[#22b5a1] text-black font-bold rounded-full px-10 h-14 text-lg transition-all shadow-[0_0_20px_rgba(77,225,114,0.3)] hover:shadow-[0_0_30px_rgba(77,225,114,0.5)] border-0 group/btn cursor-pointer">
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white hover:text-green-500 border-white/20 font-semibold rounded-full px-10 h-14 text-lg backdrop-blur-md transition-all cursor-pointer">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
