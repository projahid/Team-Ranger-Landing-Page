import { Brain, Zap, Shield, Activity, Code, Sparkles } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Advanced AI Modeling",
      description: "Leverage state-of-the-art machine learning models trained on vast datasets to generate accurate and insightful results for your complex problems.",
      icon: Brain,
      color: "from-[#4de172] to-[#3dcc60]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Real-time Processing",
      description: "Experience lightning-fast processing speeds. Our optimized infrastructure ensures your data is analyzed and returned with zero noticeable latency.",
      icon: Zap,
      color: "from-[#2dd4bf] to-[#22b5a1]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your data is protected by military-grade encryption and SOC2 compliant protocols, ensuring complete privacy and control over your AI interactions.",
      icon: Shield,
      color: "from-[#4de172] to-[#2dd4bf]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Actionable Analytics",
      description: "Transform raw data into beautiful, intuitive dashboards. Uncover hidden trends and make data-driven decisions with unparalleled clarity.",
      icon: Activity,
      color: "from-[#2dd4bf] to-[#4de172]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
    {
      title: "Seamless Integration APIs",
      description: "Connect our AI engine directly into your existing workflow using our robust, developer-friendly REST and GraphQL APIs.",
      icon: Code,
      color: "from-[#4de172] to-[#3dcc60]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Creative Generation",
      description: "Push the boundaries of creativity. Generate high-quality content, code, and insights that empower your team to innovate faster.",
      icon: Sparkles,
      color: "from-[#2dd4bf] to-[#22b5a1]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4de172]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#2dd4bf]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4de172] animate-pulse shadow-[0_0_10px_#4de172]" />
            <span className="text-sm font-medium text-gray-300">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Intelligence that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf]">Empowers</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Discover a comprehensive suite of AI tools designed to elevate your workflow, secure your data, and unlock unprecedented creative potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} ${feature.shadow} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-7 h-7 text-black" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4de172] group-hover:to-[#2dd4bf] transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
