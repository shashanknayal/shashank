import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FaqItem } from "../types";

const CLINICAL_FAQS: FaqItem[] = [
  {
    id: "differentiation",
    question: "What makes your implants different from others on the market?",
    answer: "Our implants utilize advanced 3D printing technology and hypoallergenic materials, ensuring a superior fit and minimizing the risk of allergic reactions."
  },
  {
    id: "materials",
    question: "What materials do you use for your implants?",
    answer: "We use biocompatible, medical-grade Titanium Alloy (Ti-6Al-4V Grade 5) and ultra-high strength translucent zirconia. Both materials provide maximum mechanical rigidity, chemical non-reactivity, and zero biological toxicity."
  },
  {
    id: "osseointegration",
    question: "How do your implants enhance osseointegration?",
    answer: "Our implants feature an SLA chemically sandblasted and acid-etched microtopography. This increases osteoblast (bone-growing cell) adhesion speed, helping reduce natural recovery/loading cycles down to three point two weeks."
  },
  {
    id: "customization",
    question: "What technologies support the customization of your implants?",
    answer: "We use selective laser melting (SLM) metal 3D printers that directly intake digital DICOM/STL data from patient CBCT scans. This ensures custom-built implant geometries match bone anatomy with less than five microns of deviation."
  },
  {
    id: "success-rates",
    question: "Can you provide data on implant success rates?",
    answer: "In longitudinal peer studies covering ten-year periods, OsseoTech implants documented a 99.4% clinical survival coefficient. High initial mechanical stability guarantees reliable outcomes even in type-4 soft bone tissues."
  },
  {
    id: "post-op-protocols",
    question: "What post-operative protocols do you recommend for optimal results?",
    answer: "We provide clinicians with specific digital planning templates covering progressive loading timelines, soft-tissue flap management, and precise torque-management specifications."
  }
];

export default function FaqSection() {
  // First item expanded by default to mirror screenshot
  const [expandedId, setExpandedId] = useState<string | null>("differentiation");

  const toggleAccordion = (id: string) => {
    setActiveSection(expandedId === id ? null : id);
  };

  const setActiveSection = (id: string | null) => {
    setExpandedId(id);
  };

  return (
    <section id="faq-section" className="py-20 bg-slate-950 text-white relative">
      {/* Background radial gradient flares */}
      <div className="absolute top-[40%] left-[-15%] w-[30rem] h-[30rem] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[30rem] h-[30rem] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12 space-y-3">
          <HelpCircle className="h-6 w-6 text-blue-400 mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Key Questions
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light">
            Quick responses to essential technical, clinical, and biological inquiries about OsseoTech.
          </p>
        </div>

        {/* List of Accordions */}
        <div className="space-y-4" id="faq-accordion-group">
          {CLINICAL_FAQS.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900 border-blue-500/30 shadow-lg shadow-blue-500/5"
                    : "bg-slate-900/30 border-slate-800/80 hover:border-slate-800 hover:bg-slate-900/60"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-medium font-display leading-snug text-slate-100 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Toggles styled beautifully */}
                  <span className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-850 text-slate-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Body Content with Framer Motion AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-slate-850/50">
                        <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
