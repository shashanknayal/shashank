import React, { useState } from "react";
import { ShieldCheck, Mail, Phone, ExternalLink, Send, CheckCircle } from "lucide-react";

export default function Footer() {
  const [quickEmail, setQuickEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail.trim() && /\S+@\S+\.\S+/.test(quickEmail)) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setQuickEmail("");
      }, 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const element = document.getElementById("hero-top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact-us" className="bg-slate-950 border-t border-slate-900 text-white relative">
      {/* Footer glow overlays */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-[20%] w-[35rem] h-[10rem] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Segment: Brand logo, description and Contact info as highlighted in mock screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          <div className="lg:col-span-5 space-y-6" id="footer-brand-segment">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={handleScrollToTop}
              id="footer-logo"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-display font-medium text-white tracking-wide">
                Osseo<span className="text-blue-400 font-bold">Tech</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              We specialize in the production of high-quality dental implants, engineered for optimal performance and longevity.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-2" id="footer-contact-info">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:info@osseotech.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="break-all">info@osseotech.com</span>
              </a>
            </div>
          </div>

          {/* Quick Inquiry / Technical Brochure sign up */}
          <div className="lg:col-span-7 space-y-4 bg-slate-900/40 p-6 rounded-2xl border border-slate-900" id="footer-inquiry-box">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-semibold">Immediate Dispatch</span>
            <h4 className="text-base font-display font-bold text-white">Request Biological Studies & Scientific Catalog</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Enter your professional email coordinates below to auto-fetch comparative clinical reviews and system certification papers.
            </p>

            {!sent ? (
              <form onSubmit={handleInquirySubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="physician@dentalpractice.com"
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  id="footer-brochure-input"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  id="footer-brochure-btn"
                >
                  <Send className="h-3 w-3" />
                  <span>Request</span>
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 py-2 px-3.5 rounded-lg text-xs">
                <CheckCircle className="h-4.5 w-4.5 flex-shrink-0 text-blue-400" />
                <span>Verification Sent! Check your clinical inbox for PDF booklets.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Menu Segment matching columns in screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12" id="footer-links-grid">
          {/* Column 1: Company */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Company</span>
            <ul className="space-y-2 text-xs font-light text-slate-300">
              <li>
                <button onClick={() => handleScrollToSection("about-us")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("technology")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  Product Catalog
                </button>
              </li>
              <li>
                <a href="#about-us" className="hover:text-blue-400 transition-colors block">Where to Buy</a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-blue-400 transition-colors block">News & Press</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Catalog */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Catalog</span>
            <ul className="space-y-2 text-xs font-light text-slate-300">
              <li>
                <button onClick={() => handleScrollToSection("technology")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  Standard Implants
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("technology")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  Mini Implants
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("technology")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  All-on-4 Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("technology")} className="hover:text-blue-400 transition-colors block text-left cursor-pointer">
                  Customized Implants
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Terms & Policy */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Terms & Policy</span>
            <ul className="space-y-2 text-xs font-light text-slate-300">
              <li>
                <a href="#contact-us" className="hover:text-blue-400 transition-colors block">Terms of Service</a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-blue-400 transition-colors block">Privacy Policy</a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-blue-400 transition-colors block">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social media follow us */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">Follow Us</span>
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", icon: "f" },
                { name: "Instagram", icon: "In" },
                { name: "LinkedIn", icon: "Li" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={`https://${s.name.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-display font-bold text-xs hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all cursor-pointer"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trademark copyright statement */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
          <span>
            © {currentYear} OsseoTech. All legal and clinical patents registered.
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 bg-slate-950 p-1.5 px-3 rounded border border-slate-900">
            System status: <span className="text-blue-400 font-bold">Operational</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
