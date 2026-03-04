"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Team Ranker and how does it work?",
      answer: "Team Ranker is a comprehensive platform designed to evaluate, analyze, and rank team members based on performance metrics, peer reviews, and overall impact. It uses advanced algorithms to provide fair and actionable insights for team improvement."
    },
    {
      question: "Is Team Ranker suitable for small businesses?",
      answer: "Absolutely! Team Ranker is scalable and can be customized to fit the needs of organizations of any size, from small startups to large enterprises."
    },
    {
      question: "How secure is the data stored on Team Ranker?",
      answer: "We take security very seriously. All data is encrypted both in transit and at rest using industry-standard protocols. We adhere strictly to GDPR and other major data protection regulations."
    },
    {
      question: "Can I integrate Team Ranker with other tools we use?",
      answer: "Yes, Team Ranker offers seamless integrations with popular productivity and HR tools like Slack, Jira, Asana, and Workday via our comprehensive API."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 email support for all tiers, and priority dedicated account managers for our Enterprise plans. We also have a comprehensive knowledge base with tutorials and guides."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050508]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#10b981]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4de172]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#4de172]">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-white/5 shadow-[0_0_20px_rgba(16,185,129,0.1)] border-[#10b981]/30" : "bg-transparent hover:bg-white-[0.02]"
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium text-lg pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? "bg-[#10b981] text-white rotate-180" : "bg-white/5 text-gray-400"}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
