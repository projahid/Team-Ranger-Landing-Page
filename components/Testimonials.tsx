import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO at TechFlow",
      image: "https://i.pravatar.cc/150?img=1",
      content: "Integrating this AI platform transformed our data pipeline. The predictive models are incredibly accurate, saving our team hundreds of hours each month.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Lead Developer at Orbit",
      image: "https://i.pravatar.cc/150?img=11",
      content: "The API is a dream to work with. Lightning fast responses and crystal clear documentation meant we had our custom AI features deployed in days, not weeks.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director at GrowthCo",
      image: "https://i.pravatar.cc/150?img=5",
      content: "The analytics dashboards are stunning. I can finally generate actionable insights from our complex customer data without needing a data scientist.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Founder at StartupX",
      image: "https://i.pravatar.cc/150?img=8",
      content: "We chose the Enterprise plan and the dedicated support has been phenomenal. The custom trained models blew our expectations completely out of the water.",
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-gradient-to-r from-[#4de172]/5 via-transparent to-[#2dd4bf]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse shadow-[0_0_10px_#2dd4bf]" />
            <span className="text-sm font-medium text-gray-300">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf]">Innovators</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            See how forward-thinking teams are using our AI infrastructure to build the next generation of intelligent applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Subtle hover gradient border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#4de172]/30 transition-colors duration-500 pointer-events-none" />

              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-[#4de172]/10 transition-colors duration-500" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2dd4bf] text-[#2dd4bf]" />
                ))}
              </div>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#4de172]/50 transition-colors duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
