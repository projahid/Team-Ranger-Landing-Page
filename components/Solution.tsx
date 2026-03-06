import { CheckCircle2, Zap, BrainCircuit, BarChart3, ShieldCheck, Workflow } from "lucide-react";

export function Solution() {
  const solutions = [
    {
      title: "Unified Tracking Hub",
      description: "Team Ranker seamlessly connects your projects, contents, and emails, restructuring information into a single source of truth.",
      icon: DatabaseIcon, // Custom component defined below
      glow: "group-hover:shadow-[0_0_30px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Instant SEO Analytics",
      description: "Replace days of manual backlink analysis with our instant tracking dashboards. Get beautiful, actionable charts in seconds.",
      icon: BarChart3,
      glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]",
    },
    {
      title: "Project Opportunity Detection",
      description: "Our platform continuously monitors your ongoing and pending projects to identify ownership gaps before they become bottlenecks.",
      icon: TargetIcon, // Custom component
      glow: "group-hover:shadow-[0_0_30px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Centralized Chat Support",
      description: "Eliminate scattered communication. Our built-in support chat resolves your team's issues without ever leaving the dashboard.",
      icon: Workflow,
      glow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects - Stronger Teals and Greens */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#4de172]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#2dd4bf]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Solution Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4de172]/10 border border-[#4de172]/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-left-8 duration-1000 text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#4de172] animate-pulse shadow-[0_0_10px_#4de172]" />
              <span className="font-medium text-[#4de172]">The Solution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100">
              Transform Complexity into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf] block md:inline mt-2 md:mt-0">Clarity with Team Ranker</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 px-4 lg:px-0 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              We replace fragmented, manual processes with a unified platform. Experience unparalleled tracking, SEO insights, and team management that scales effortlessly with your business.
            </p>

            <ul className="space-y-4 text-left w-full lg:w-auto px-4 sm:px-8 lg:px-0 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              {[
                "Comprehensive project tracking and grids",
                "Real-time monthly backlink analytics",
                "Dedicated team support system"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#2dd4bf] shrink-0" />
                  <span className="text-gray-300 text-sm md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-md lg:max-w-none animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Conceptual Visual Graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4de172]/20 to-[#2dd4bf]/20 rounded-full blur-3xl" />
            <div className="relative h-full w-full border border-white/10 bg-[#0a0a0f]/50 backdrop-blur-xl rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="relative w-48 h-48">
                {/* Central AI Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#4de172] to-[#2dd4bf] rounded-xl shadow-[0_0_50px_rgba(77,225,114,0.5)] flex items-center justify-center z-20 animate-pulse">
                  <BrainCircuit className="w-12 h-12 text-black" strokeWidth={1.5} />
                </div>
                {/* Orbiting Elements */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 border border-[#2dd4bf]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-150" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0a0a0f] border-2 border-[#4de172] rounded-full z-10" />
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-[#2dd4bf] rounded-full z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid inside Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${solution.glow}`}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#4de172]/20 group-hover:to-[#2dd4bf]/20 transition-all">
                  <solution.icon className="w-7 h-7 text-white group-hover:text-[#4de172] transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4de172] group-hover:to-[#2dd4bf] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Custom internal icons to keep imports clean
function DatabaseIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function TargetIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
