import Image from "next/image";

export function HeroImage() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 mt-[-100px] z-30 flex justify-center">
      <div className="relative w-full container mx-auto rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(77,225,114,0.15)] border border-white/10 bg-[#050508]/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 pt-10">

        {/* Browser Mockup Top Bar */}
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
        </div>

        {/* The Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/Image/her-section-2.png.png"
            alt="Platform Dashboard"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
