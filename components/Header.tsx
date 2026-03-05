"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#050508]/80 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between z-50 relative">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-105 z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#10b981] rounded-lg">
            <Layers className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-xl font-bold text-white tracking-tight">Team Ranker</span>
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
        <div className="flex items-center gap-4 z-50">
          <Button className="hidden md:flex bg-[#4de172] hover:bg-[#3dcc60] text-black font-bold rounded-full px-8 h-10 transition-all shadow-[0_0_15px_rgba(77,225,114,0.3)] hover:shadow-[0_0_20px_rgba(77,225,114,0.5)] border-0">
            Login
          </Button>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#050508]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex flex-col items-center justify-center ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-6 text-xl font-medium text-gray-300 w-full px-8">
          <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">Our Features</Link>
          <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">Pricing</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">About</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">Contact Us</Link>
          <Link href="#team" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">Our Team</Link>
          <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 hover:text-white transition-colors border-b border-white/5">FAQ</Link>

          <Button className="mt-6 w-full max-w-[200px] bg-[#4de172] hover:bg-[#3dcc60] text-black font-bold rounded-full h-12 text-lg transition-all shadow-[0_0_20px_rgba(77,225,114,0.4)] hover:shadow-[0_0_30px_rgba(77,225,114,0.6)] border-0">
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
}
