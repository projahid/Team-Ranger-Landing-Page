import { Activity, FileText, Mail, Link as LinkIcon, LayoutDashboard, MessageSquare } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Project Management",
      description: "Easily track Total, Pending, Ongoing, and Completed projects in one unified dashboard.",
      icon: Activity,
      color: "from-[#4de172] to-[#3dcc60]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Content Tracking",
      description: "Manage all your content. Filter by name or title and keep your team aligned effortlessly.",
      icon: FileText,
      color: "from-[#2dd4bf] to-[#22b5a1]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
    {
      title: "Email Campaigns",
      description: "Keep track of all your emails. Filter by name or email to quickly find exactly what you need.",
      icon: Mail,
      color: "from-[#4de172] to-[#2dd4bf]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Backlink Monitoring",
      description: "Monitor your monthly backlinks and track your SEO performance over time with ease.",
      icon: LinkIcon,
      color: "from-[#2dd4bf] to-[#4de172]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
    {
      title: "Detailed Dashboards",
      description: "Get a bird's-eye view of your team's progress with intuitive, real-time grids and customizable columns.",
      icon: LayoutDashboard,
      color: "from-[#4de172] to-[#3dcc60]",
      shadow: "shadow-[0_0_20px_rgba(77,225,114,0.3)]",
    },
    {
      title: "Dedicated Support",
      description: "24/7 Team Ranker Support via our seamless chat system to help you whenever you need.",
      icon: MessageSquare,
      color: "from-[#2dd4bf] to-[#22b5a1]",
      shadow: "shadow-[0_0_20px_rgba(45,212,191,0.3)]",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background Glowing Effects */}
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#4de172]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2dd4bf]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 font-medium text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#4de172] animate-pulse shadow-[0_0_10px_#4de172]" />
            <span className="text-gray-300">Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
            Tools that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf] block sm:inline mt-1 sm:mt-0">Empower Teams</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4 md:px-0">
            Discover a comprehensive suite of tools designed to manage your projects, streamline communications, and boost your SEO tracking.
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
