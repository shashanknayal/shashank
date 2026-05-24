import React, { useState } from "react";
import { Hammer, CircleAlert, Sparkles, Sliders, Check, Cpu } from "lucide-react";
import { ProductItem } from "../types";

const CLINICAL_PRODUCTS: ProductItem[] = [
  {
    id: "standard",
    title: "Standard Implants",
    description: "Ideal for most clinical cases, providing a reliable and stable foundation for dental prosthetics.",
    detailedSpecs: ["Diameter Range: 3.5mm – 6.0mm", "Perfect for root analogue designs", "SLA Surface chemistry treated", "Self-tapping threaded grooves"],
    clinicalIndication: "Single or multi-tooth restoration with normal bone density indices.",
    materialComposition: "Medical-Grade Ti-6Al-4V Titanium Alloy (Grade 5)"
  },
  {
    id: "mini",
    title: "Mini Implants",
    description: "Minimally invasive solutions designed for placement in limited space, perfect for narrow ridge gums.",
    detailedSpecs: ["Diameter Range: 1.8mm – 2.9mm", "Single-piece continuous design", "Immediate load capable", "No-incision punch technique compatible"],
    clinicalIndication: "Anterior jaw restoration or denture retention in severe ridge resorptions.",
    materialComposition: "High-Strength Pure Cold-Worked Titanium Alloy"
  },
  {
    id: "allon4",
    title: "All-on-4 Solutions",
    description: "Innovative solution for complete tooth replacement using just four implants. Restores immediate function.",
    detailedSpecs: ["Incline Angles: Up to 45° posterior tilts", "Complete edentulous arch recovery", "Immediate load provisional bridge", "Reduced osteotomy layout"],
    clinicalIndication: "Full arch restorations avoiding complex lateral sinus grafting.",
    materialComposition: "Biocompatible Titanium alloy with Zirconia sleeve inserts"
  },
  {
    id: "customized",
    title: "Customized Implants",
    description: "Custom-designed implants created using sub-micron 3D printing technology for perfect anatomical fit.",
    detailedSpecs: ["Custom 3D CAD matching", "Porous mesh bio-scaffold layout", "SLM 3D printing technology", "Direct matching to patient's cone beam (CBCT)"],
    clinicalIndication: "Severe oncology resections, post-traumatic reconstruction or massive socket atrophy.",
    materialComposition: "Direct 3D Laser-Sintered Porous Titanium Micro-Scaffolds"
  }
];

export default function ProductsCatalog() {
  const [selectedProductId, setSelectedProductId] = useState<string>("standard");
  const selectedProduct = CLINICAL_PRODUCTS.find((p) => p.id === selectedProductId) || CLINICAL_PRODUCTS[0];

  return (
    <section id="technology" className="py-20 bg-slate-900/40 relative">
      {/* Visual blueprint background grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold block">Product Catalog</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            High-Performance System Lines
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
            Engineered with precision geometries. Choose a primary implant line to inspect mechanical composition and micro-structure properties.
          </p>
        </div>

        {/* Outer Grid showing the 4 options matching visual blocks in right screenshot panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" id="products-grid-container">
          {CLINICAL_PRODUCTS.map((prod) => {
            const isSelected = selectedProductId === prod.id;
            
            // Custom decorative dental vector icon rendering based on implant type
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80"
                }`}
                id={`product-card-${prod.id}`}
              >
                {/* Glowing border effect */}
                {isSelected && (
                  <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl" />
                )}

                <div>
                  {/* Decorative dental graphics mimicking mockups */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-100"
                    }`}>
                      {prod.id === "standard" && (
                        /* standard implant screw icon mockup */
                        <div className="w-6 h-6 flex flex-col gap-0.5 items-center justify-center">
                          <div className="w-4 h-1 bg-current rounded-t-sm" />
                          <div className="w-3.5 h-[3px] bg-current" />
                          <div className="w-3 h-2 bg-current" />
                          <div className="w-2 h-[4px] bg-current rounded-b-sm" />
                        </div>
                      )}
                      {prod.id === "mini" && (
                        /* mini implant slim icon mockup */
                        <div className="w-6 h-6 flex items-end gap-1 justify-center">
                          <div className="w-1.5 h-5 bg-current rounded-t-xs" />
                          <div className="w-1.5 h-4 bg-current rounded-t-xs" />
                          <div className="w-1.5 h-5 bg-current rounded-t-xs" />
                        </div>
                      )}
                      {prod.id === "allon4" && (
                        /* all on 4 bridge anchor mockup */
                        <div className="w-6 h-6 flex flex-col justify-between py-1">
                          <div className="w-full h-1.5 bg-current rounded-xs" />
                          <div className="flex justify-between px-1">
                            <div className="w-1 h-2 bg-current rotate-12" />
                            <div className="w-1 h-3 bg-current" />
                            <div className="w-1 h-3 bg-current" />
                            <div className="w-1 h-2 bg-current -rotate-12" />
                          </div>
                        </div>
                      )}
                      {prod.id === "customized" && (
                        /* custom customized icon */
                        <div className="w-6 h-6 flex flex-col items-center justify-center p-0.5 border border-dashed border-current rounded-md">
                          <div className="w-3 h-3 bg-current rounded-full" />
                        </div>
                      )}
                    </div>
                    
                    {/* Active Radio Badge */}
                    <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-blue-500 bg-blue-600' : 'border-slate-800'
                    }`}>
                      {isSelected && <Check className="h-3 w-3 text-white stroke-[3.5]" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">{prod.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4">{prod.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-blue-400 transition-colors">
                    Clinical Specs
                  </span>
                  <span className="text-xs text-blue-400 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Technical Spec Sheet Drawer */}
        <div className="bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl" id="technical-spec-drawer">
          <div className="p-6 sm:p-8 bg-slate-950/40 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-semibold">Active Spec Sheet</span>
              <h4 className="text-xl font-display font-medium text-white tracking-tight mt-0.5">
                {selectedProduct.title} Structural Diagnostics
              </h4>
            </div>
            
            <div className="inline-flex self-start md:self-auto items-center gap-2 bg-blue-500/10 border border-blue-500/15 py-1 px-3.5 rounded-full text-blue-400 text-xs font-mono font-semibold">
              <Cpu className="h-4.5 w-4.5" />
              SLA-treated Zirconia Crown Lock
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specs Checklist */}
            <div className="space-y-4">
              <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Engineering Parameters</span>
              <ul className="space-y-3" id="active-spec-list">
                {selectedProduct.detailedSpecs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 font-sans">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Indication & Bio Material specs */}
            <div className="space-y-6">
              <div>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">Biological Composition</span>
                <p className="text-sm text-slate-100 font-sans leading-relaxed bg-slate-950/60 p-4 border border-slate-850 rounded-xl">
                  {selectedProduct.materialComposition}
                </p>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">Primary Clinical Indication</span>
                <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                  {selectedProduct.clinicalIndication}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
