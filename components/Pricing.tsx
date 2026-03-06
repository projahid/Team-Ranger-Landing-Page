import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for organizing small teams securely.",
      price: "$0",
      duration: "/month",
      features: [
        "Manage up to 3 active projects",
        "Track up to 50 content drafts",
        "Monitor 100 backlinks per month",
        "Community forum support",
      ],
      buttonText: "Start for Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "For growing teams needing comprehensive SEO tracking.",
      price: "$29",
      duration: "/month",
      features: [
        "Unlimited active projects",
        "Track unlimited content & emails",
        "Monitor up to 5,000 backlinks/month",
        "Advanced SEO dashboard analytics",
        "Priority 24/7 chat support",
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "Custom management solutions for large organizations.",
      price: "Custom",
      duration: "",
      features: [
        "Custom backlink tracking volume",
        "Dedicated private cloud infrastructure",
        "Advanced team permissions & roles",
        "Dedicated account manager & success team",
        "Unlimited API access & integrations",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Dynamic Background glowing effects matching the hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-full md:max-w-[800px] h-[300px] md:h-[400px] bg-[#4de172]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-1/4 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#2dd4bf]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 font-medium text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse shadow-[0_0_10px_#2dd4bf]" />
            <span className="text-gray-300">Simple & Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
            Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4de172] to-[#2dd4bf] block sm:inline mt-1 sm:mt-0">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4 md:px-0">
            Scale your team management and SEO tracking with flexible plans designed for ultimate performance. Choose the power you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 transition-all hover:-translate-y-2 duration-300 ${plan.isPopular
                ? "border-2 border-[#4de172]/50 shadow-[0_0_40px_rgba(77,225,114,0.1)] md:-mt-8 md:mb-8 bg-gradient-to-b from-white/10 to-transparent"
                : "border border-white/10 hover:border-white/20 hover:bg-white/10"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4de172] to-[#2dd4bf] text-black text-sm font-bold px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(77,225,114,0.4)] whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-white">
                  {plan.price}
                </span>
                {plan.duration && (
                  <span className="text-gray-400 text-lg font-medium">{plan.duration}</span>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-[#4de172]/10 rounded-full p-1 border border-[#4de172]/20 shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#4de172]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`cursor-pointer w-full rounded-full h-12 text-base font-bold transition-all duration-300 shadow-lg ${plan.isPopular
                  ? "cursor-pointer bg-gradient-to-r from-[#4de172] to-[#2dd4bf] hover:from-[#3dcc60] hover:to-[#22b5a1] text-black shadow-[0_0_20px_rgba(77,225,114,0.3)] hover:shadow-[0_0_30px_rgba(77,225,114,0.5)] border-0"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md"
                  }`}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
