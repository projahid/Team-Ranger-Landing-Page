import Link from "next/link";
import { Layers, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050508] text-gray-400 py-16 border-t border-white/5 mt-auto relative overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4de172]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 inline-flex">
              <div className="relative flex items-center justify-center w-10 h-10 bg-[#10b981] rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <Layers className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Team Ranker</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Elevate your team's performance with our industry-leading ranking and analytics platform. Build better teams, together.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#10b981] hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#10b981] hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#10b981] hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#10b981] hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">Our Features</Link></li>
              <li><Link href="#pricing" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">Pricing Plans</Link></li>
              <li><Link href="#about" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link href="#team" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">Meet The Team</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">API Documentation</Link></li>
              <li><Link href="#faq" className="hover:text-[#10b981] hover:translate-x-1 inline-block transition-all duration-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#10b981]" />
                </div>
                <span className="pt-1 text-gray-400">123 Innovation Drive, Tech City, TC 10010</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#10b981]" />
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#10b981]" />
                </div>
                <span className="text-gray-400">support@teamranker.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Team Ranker. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
