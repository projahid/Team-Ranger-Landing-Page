"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? " py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="relative flex items-center justify-center w-10 h-10 bg-[#10b981] rounded-lg">
            <Layers className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Team Ranker</span>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-white transition-colors">Our Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link href="#team" className="hover:text-white transition-colors">Our Team</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </nav>

        {/* Action Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-[#4de172] hover:bg-[#3dcc60] text-black font-bold rounded-full px-8 h-10 transition-all shadow-[0_0_15px_rgba(77,225,114,0.3)] hover:shadow-[0_0_20px_rgba(77,225,114,0.5)]">
            Login
          </Button>

          <button className="md:hidden text-gray-300 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
