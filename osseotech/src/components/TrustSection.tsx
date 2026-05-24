import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";

// Absolute path to generated professional dentist image
const DR_SOKOLOV_AVATAR = "/src/assets/images/doctor_ivan_sokolov_1779608181323.png";

const PRACTITIONER_REVIEWS = [
  {
    id: "sokolov",
    name: "Dr. Ivan Sokolov, DMD",
    role: "Senior Oral Implantologist, Munich Dental Center",
    text: "I've been practicing dentistry for over 20 years, and this product is a game-changer. Its innovative design and ease of use have significantly improved my workflow. I highly recommend it to any dental professional looking to enhance their practice!",
    rating: 5,
    avatar: DR_SOKOLOV_AVATAR
  },
  {
    id: "chen",
    name: "Dr. Eileen Chen, DDS, PhD",
    role: "Director of Periodontics, Allied Health Group",
    text: "The surface finishing on the OsseoTech Standard range has shown remarkable osseointegration rates in clinical trials. Bone attachment times dropped from seven weeks to just three point two weeks. Exceptional biomechanics.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "garrido",
    name: "Dr. Marcus Garrido, MD",
    role: "Maxillofacial Surgeon, Vista Oral Clinic",
    text: "Custom SLM titanium implants fit like a glove. Traditional implants occasionally require manual restructuring or compromised angles; with OsseoTech's 3D-printing guides, placement is sub-millimetric.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export default function TrustSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const currentReview = PRACTITIONER_REVIEWS[activeReviewIndex];

  return (
    <section id="about-us" className="py-20 bg-slate-950 border-t border-slate-950 text-white relative">
      {/* Visual glowing meshes */}
      <div className="absolute top-[10%] right-[10%] w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Ratings & Trust Details */}
          <div className="lg:col-span-5 space-y-6" id="trust-left-column">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold block">Clinically Vetted</span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
              Trusted by Leading <br />
              Dentists and Clinics <br />
              Worldwide
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Renowned dental professionals choose our implants for their exceptional quality and advanced technology. Built to integrate seamlessly and last, our products set the benchmark for reliability and performance in dental care.
            </p>

            {/* Interactive Rating Badge Grid */}
            <div className="bg-blue-600 border border-blue-400 rounded-2xl p-6 shadow-xl shadow-blue-500/10 text-white flex flex-col items-start gap-4" id="rating-badge-card">
              <div className="flex items-center gap-2">
                <span className="text-sm font-sans font-medium">Rating:</span>
                <span className="text-3xl font-display font-bold">4.9</span>
                <div className="flex items-center text-amber-300">
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-xs text-blue-100 font-sans">
                Based on peer-reviewed surveys from over 3,000 board-certified implantologists and dental professionals.
              </p>

              {/* Dentist Avatars Stack (Clicking toggles corresponding testimony!) */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-3 overflow-hidden">
                  {PRACTITIONER_REVIEWS.map((review, idx) => (
                    <button
                      key={review.id}
                      onClick={() => setActiveReviewIndex(idx)}
                      className={`relative inline-block h-10 w-10 rounded-full ring-2 transition-all cursor-pointer ${
                        activeReviewIndex === idx ? 'ring-white scale-110 z-10' : 'ring-blue-600 hover:ring-blue-200'
                      }`}
                      title={review.name}
                    >
                      <img
                        className="h-full w-full object-cover rounded-full"
                        src={review.avatar}
                        alt={review.name}
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-blue-200">Testimonials</span>
                  <span className="block text-xs font-semibold text-white">Click to slide reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Testimonial Card Slider with generated asset */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="trust-right-column">
            <div className="relative bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl">
              
              {/* Star rating stars header */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Quote Body */}
              <div className="relative z-10">
                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed italic pr-2">
                  "{currentReview.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-left">
                  <img
                    className="h-14 w-14 object-cover rounded-full border-2 border-blue-500/30 shadow-lg"
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="text-base font-display font-medium text-white">{currentReview.name}</h5>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mt-0.5">
                      {currentReview.role}
                    </p>
                  </div>
                </div>

                {/* Micro Carousel Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveReviewIndex((prev) => (prev === 0 ? PRACTITIONER_REVIEWS.length - 1 : prev - 1))}
                    className="p-2 bg-slate-950 border border-slate-800 rounded-lg hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-400 hover:text-white cursor-pointer"
                    id="prev-testimonial-btn"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActiveReviewIndex((prev) => (prev === PRACTITIONER_REVIEWS.length - 1 ? 0 : prev + 1))}
                    className="p-2 bg-slate-950 border border-slate-800 rounded-lg hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-400 hover:text-white cursor-pointer"
                    id="next-testimonial-btn"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
