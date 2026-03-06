import { AlertCircle, Clock, TrendingDown, Database, FileX, Users } from "lucide-react";

export function Problem() {
  const problems = [
    {
      title: "Scattered Projects",
      description: "Losing track of pending, ongoing, and completed tasks across multiple disconnected tools, making project management a nightmare.",
      icon: Database,
    },
    {
      title: "Unorganized Content",
      description: "Struggling to find, manage, and filter content titles and drafts, leading to misaligned strategies and wasted resources.",
      icon: FileX,
    },
    {
      title: "Lost Emails",
      description: "Important communications and outreach emails get buried, resulting in missed opportunities and delayed responses.",
      icon: AlertCircle,
    },
    {
      title: "Blind SEO & Backlinks",
      description: "No clear visibility into monthly backlink performance or real-time analytics to boost your search engine rankings.",
      icon: TrendingDown,
    },
    {
      title: "Lack of Clear Ownership",
      description: "Confusion over who is handling which project status, leading to inconsistent decision making and dropped tasks.",
      icon: Users,
    },
    {
      title: "Disconnected Communication",
      description: "Support requests and team chats are spread thin, rendering team communication slow and frustrating for everyone involved.",
      icon: Clock,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050508] overflow-hidden border-b border-white/5">
      {/* Subtle Green/Teal glow to match the AI theme */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#4de172]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4de172]/10 border border-[#4de172]/20 backdrop-blur-md mb-6 font-medium text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#4de172] animate-pulse shadow-[0_0_10px_#4de172]" />
            <span className="text-[#4de172]">The Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf]">Bottlenecks</span> of Scattered Tools
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4 md:px-0">
            Scaling your operations usually means scaling complexity. Teams struggle with fragmented SEO tools, manual content tracking, and disconnected project insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-8 hover:border-[#4de172]/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4de172]/10 flex items-center justify-center mb-6 group-hover:bg-[#4de172]/20 transition-colors">
                <problem.icon className="w-6 h-6 text-[#4de172]" />
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
