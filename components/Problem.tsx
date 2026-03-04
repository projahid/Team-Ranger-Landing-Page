import { AlertCircle, Clock, TrendingDown, Database, FileX, Users } from "lucide-react";

export function Problem() {
  const problems = [
    {
      title: "Data Overload & Silos",
      description: "Teams are drowning in fragmented data across multiple platforms, making it impossible to get a unified view of performance or customer behavior.",
      icon: Database,
    },
    {
      title: "Manual & Slow Analysis",
      description: "Extracting insights requires hours of manual spreadsheet work or depending on an over-burdened analytics team, causing expensive delays.",
      icon: Clock,
    },
    {
      title: "Missed Opportunities",
      description: "Without real-time predictive capabilities, businesses react to past events rather than proactively anticipating market shifts or customer needs.",
      icon: TrendingDown,
    },
    {
      title: "Inconsistent Decision Making",
      description: "Different departments rely on different metrics and interpretations, leading to misaligned strategies and wasted resources.",
      icon: Users,
    },
    {
      title: "High Error Rates",
      description: "Manual data entry and complex workflow routing are prone to human error, resulting in compliance risks and unhappy customers.",
      icon: AlertCircle,
    },
    {
      title: "Stale Intelligence",
      description: "By the time reports are generated and reviewed, the information is often outdated, rendering the insights useless for immediate action.",
      icon: FileX,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050508] overflow-hidden border-b border-white/5">
      {/* Subtle Red/Orange glow to indicate "Problem" area, contrasting with the Green/Teal AI theme */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-6 font-medium text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
            <span className="text-red-200">The Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Bottlenecks</span> of Traditional Workflows
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4 md:px-0">
            Before AI, scaling operations meant scaling complexity. Teams struggle with fragmented tools, manual processes, and delayed insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
