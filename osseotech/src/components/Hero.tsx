import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Info, ZoomIn, Shield, Cpu, RefreshCw } from "lucide-react";
import { Hotspot } from "../types";

// Absolute path to generated hero image asset
const HERO_IMAGE_PATH = "/src/assets/images/dental_implant_hero_1779608162186.png";

const CLINICAL_HOTSPOTS: Hotspot[] = [
  {
    id: "crown-zirconia",
    title: "Multilevel Surface",
    label: "Multilevel Surface",
    description: "Multi-layered biocompatible ceramic microtopography that mirrors natural cementum, enhancing soft tissue seals and prosthetic retention.",
    position: { top: "30%", left: "68%" },
    alignment: "right"
  },
  {
    id: "implant-3d",
    title: "3D Printing Technology",
    label: "3D Printing Technology",
    description: "State-of-the-art selective laser melting (SLM) fabricated geometries enabling custom dental root anatomy matching with sub-micron surgical accuracy.",
    position: { top: "45%", left: "28%" },
    alignment: "left"
  },
  {
    id: "screw-hypo",
    title: "Hypoallergenic Materials",
    label: "Hypoallergenic Materials",
    description: "Engineered with Grade-5 Ti-6Al-4V Medical Alloy. Uncompromising mechanical strength with near-zero ion release, preventing peri-implantitis risk.",
    position: { top: "65%", left: "55%" },
    alignment: "right"
  }
];

interface HeroProps {
  onRequestDemo: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(CLINICAL_HOTSPOTS[1]); // SLM is active by default

  return (
    <section
      id="hero-top"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 blueprint-grid"
    >
      {/* Visual background flares fitting the mock screenshot */}
      <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-slate-950 via-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-600/10 blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Modern Titles */}
          <div className="space-y-6 text-center lg:text-left" id="hero-marketing-side">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-2 animate-bounce">
              <Shield className="h-3 w-3" />
              CE & FDA Certified Implantation
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
              The New Standard <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent font-bold">
                in Dental Implantation
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              OsseoTech implants fuse high-performance clinical metallurgy with custom 3D printing workflows. Empowering implantologists with 99.4% stability coefficients.
            </p>

            {/* Live Interactive Information Display corresponding to active hotspot */}
            <div className="bg-slate-900/60 border border-blue-500/10 rounded-2xl p-4 md:p-5 backdrop-blur-md max-w-xl mx-auto lg:mx-0 shadow-lg" id="hotspot-live-card">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    {activeHotspot ? activeHotspot.title : "Select clinical feature"}
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
                  </h4>
                  <p className="text-slate-300 text-xs md:text-sm mt-1 leading-relaxed">
                    {activeHotspot
                      ? activeHotspot.description
                      : "Click on any interactive hotspot dot over the implant blueprint model to analyze biological properties and customized specs."}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto py-3 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-display font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-indigo-500/35 cursor-pointer transform hover:-translate-y-0.5"
                id="hero-request-demo-btn"
              >
                Request a Demo
              </button>
              <a
                href="#technology"
                className="w-full sm:w-auto py-3 px-8 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-200 rounded-full font-display font-medium text-sm text-center transition-all cursor-pointer"
              >
                Explore Technology
              </a>
            </div>

            {/* Quick specifications counter strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-xl md:text-2xl font-display font-bold text-white tracking-tight">99.4%</span>
                <span className="block text-[10px] text-slate-400 tracking-wide uppercase font-mono mt-0.5">Success Rate</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-display font-bold text-blue-400 tracking-tight">3.2 Weeks</span>
                <span className="block text-[10px] text-slate-400 tracking-wide uppercase font-mono mt-0.5">Healing Period</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-display font-bold text-indigo-300 tracking-tight">3000+</span>
                <span className="block text-[10px] text-slate-400 tracking-wide uppercase font-mono mt-0.5">Clinicians Trust</span>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Interactive 3D Model View */}
          <div className="relative flex justify-center items-center" id="hero-implant-interactive-canvas">
            {/* Fine Blueprint grid lines just around the frame */}
            <div className="absolute inset-0 rounded-3xl border border-blue-500/5 bg-slate-900/10 blueprint-grid-fine pointer-events-none" />

            {/* Implant Render Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] p-4 flex items-center justify-center bg-slate-950/10 rounded-2xl">
              {/* Outer Blue Ring Halo */}
              <div className="absolute h-72 w-72 rounded-full border border-blue-500/5 bg-blue-500/[0.01] animate-pulse-slow pointer-events-none" />
              <div className="absolute h-96 w-96 rounded-full border border-indigo-500/[0.03] pointer-events-none" />

              {/* Main Implant Image with no-referrer for safety */}
              <img
                src={HERO_IMAGE_PATH}
                alt="OsseoTech Implant System"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain relative z-20 select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(59,130,246,0.15)] transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Overlay lines and hotspots */}
              {CLINICAL_HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot?.id === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    className="absolute z-30 group"
                    style={{ top: hotspot.position.top, left: hotspot.position.left }}
                  >
                    {/* Hotspot Pulse Trigger Button */}
                    <button
                      onClick={() => setActiveHotspot(hotspot)}
                      onMouseEnter={() => setActiveHotspot(hotspot)}
                      className="relative h-6 w-6 flex items-center justify-center focus:outline-none cursor-pointer"
                      title={hotspot.label}
                    >
                      <span className={`absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping duration-1000 ${isActive ? 'scale-150' : ''}`} />
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? 'bg-white ring-4 ring-blue-500' : 'bg-blue-400 outline outline-2 outline-blue-500/50'}`} />
                    </button>

                    {/* Laser Alignment Line Indicator (Dotted line connecting hotspots to technical labels) */}
                    <div
                      className={`hidden sm:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-blue-500to-transparent pointer-events-none transition-all duration-300 ${
                        hotspot.alignment === "right"
                          ? "left-6 w-16"
                          : "right-6 w-16 rotate-180"
                      } ${isActive ? 'opacity-100' : 'opacity-40'}`}
                    />

                    {/* High-Contrast Interactive Floating Text Badges corresponding exactly to the mock screenshot */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 z-30 transition-all duration-300 w-44 pointer-events-none ${
                        hotspot.alignment === "right"
                          ? "left-24 sm:left-22"
                          : "right-24 sm:right-22 text-right"
                      } ${isActive ? 'opacity-100 translate-x-0' : 'opacity-60 hover:opacity-100'}`}
                    >
                      <span className={`inline-block text-xs font-mono py-1 px-2.5 rounded border ${
                        isActive
                          ? 'bg-blue-600 border-blue-400 text-white font-semibold'
                          : 'bg-slate-900/95 border-slate-800 text-slate-300'
                      }`}>
                        {hotspot.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom floating helper tip */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-lg relative z-30">
              <span className="animate-ping h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] uppercase font-mono text-slate-300 tracking-wider">Hover/Tap Highlights</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
