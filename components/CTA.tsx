import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full max-w-[1200px] h-[400px] md:h-[600px] bg-gradient-to-r from-[#4de172]/10 via-transparent to-[#2dd4bf]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 lg:p-24 overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">

          {/* Inner Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
          <div className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-40 sm:w-64 h-40 sm:h-64 bg-[#4de172]/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 md:-bottom-24 -left-16 md:-left-24 w-40 sm:w-64 h-40 sm:h-64 bg-[#2dd4bf]/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#4de172]/20 to-[#2dd4bf]/20 border border-white/10 shadow-[0_0_30px_rgba(77,225,114,0.2)] mb-6 md:mb-8">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#4de172]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 max-w-3xl leading-tight">
              Ready to Accelerate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf] block sm:inline mt-1 sm:mt-0">
                AI Journey?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-2xl px-2">
              Join thousands of innovative teams already building the future with our powerful, secure, and scalable AI infrastructure. Start building for free today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#4de172] to-[#2dd4bf] hover:from-[#3dcc60] hover:to-[#22b5a1] text-black font-bold rounded-full px-10 h-14 text-lg transition-all shadow-[0_0_20px_rgba(77,225,114,0.3)] hover:shadow-[0_0_30px_rgba(77,225,114,0.5)] border-0 group cursor-pointer">
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/20 font-semibold rounded-full px-10 h-14 text-lg backdrop-blur-sm transition-all cursor-pointer">
                Contact Sales
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-medium tracking-wide">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
