import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Mail, Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  onRequestDemo: () => void;
}

export default function Navbar({ onRequestDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-blue-500/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection("hero-top")}
              id="brand-logo"
            >
              <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="h-5 w-5" />
                <div className="absolute inset-0 rounded-xl border border-white/20 animate-pulse-slow pointer-events-none" />
              </div>
              <div>
                <span className="text-xl font-display font-medium text-white tracking-wide block">
                  Osseo<span className="text-blue-400 font-bold">Tech</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono -mt-1 block">
                  Implant Systems
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {[
                { label: "Home", sectionId: "hero-top" },
                { label: "About Us", sectionId: "about-us" },
                { label: "Technology", sectionId: "technology" },
                { label: "Contact Us", sectionId: "contact-us" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-sm font-sans font-medium text-slate-300 hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4" id="nav-actions">
              <button
                onClick={onRequestDemo}
                className="py-2 px-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-display font-medium text-sm transition-all duration-300 shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                id="header-cta-btn"
              >
                Request a Demo
              </button>
            </div>

            {/* Mobile Hamburger menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-200 hover:text-white transition-colors p-2"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800" id="mobile-nav-drawer">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {[
                { label: "Home", sectionId: "hero-top" },
                { label: "About Us", sectionId: "about-us" },
                { label: "Technology", sectionId: "technology" },
                { label: "Contact Us", sectionId: "contact-us" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left py-2 px-3 text-slate-200 hover:text-white hover:bg-slate-950 rounded-lg text-sm font-medium transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestDemo();
                  }}
                  className="w-full text-center py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-display font-medium shadow-md shadow-blue-500/10 cursor-pointer"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
