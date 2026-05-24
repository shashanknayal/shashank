import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle2, Star, ShieldCheck, Mail, Phone, Building2 } from "lucide-react";
import { BookingForm } from "../types";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    practiceName: "",
    specialty: "General Dentistry",
    implantOfInterest: "Standard Implants",
    preferredDate: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingForm>>({});

  const validate = () => {
    const newErrors: Partial<BookingForm> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.practiceName.trim()) newErrors.practiceName = "Clinic/Practice name is required";
    if (!form.preferredDate) newErrors.preferredDate = "Please choose a preferred demonstration date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      practiceName: "",
      specialty: "General Dentistry",
      implantOfInterest: "Standard Implants",
      preferredDate: "",
      message: ""
    });
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900 shadow-2xl shadow-blue-500/10"
            id="modal-container"
          >
            {/* Top Glowing Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8" id="demo-request-form">
                <div className="mb-6">
                  <span className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold">OsseoTech Clinical Program</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">Request a Demonstration</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Book a high-definition virtual preview or on-site demonstration of our premium implants with a clinical coordinator.
                  </p>
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Dentist or Specialist Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Dr. Gregory House, DDS"
                      className={`w-full px-3 py-2 bg-slate-950 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all ${
                        errors.name ? 'border-red-500/50' : 'border-slate-800'
                      }`}
                      id="input-name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Practice Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Clinic or Practice Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={form.practiceName}
                        onChange={(e) => setForm({ ...form, practiceName: e.target.value })}
                        placeholder="Metro Dental Clinic"
                        className={`w-full pl-9 pr-3 py-2 bg-slate-950 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all ${
                          errors.practiceName ? 'border-red-500/50' : 'border-slate-800'
                        }`}
                        id="input-practice"
                      />
                      <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    </div>
                    {errors.practiceName && <p className="text-red-400 text-xs mt-1">{errors.practiceName}</p>}
                  </div>

                  {/* Dual columns for Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Coordinates *</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="physician@dental.com"
                          className={`w-full pl-9 pr-3 py-2 bg-slate-950 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-slate-800'
                          }`}
                          id="input-email"
                        />
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                      </div>
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Mobile Phone *</label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-9 pr-3 py-2 bg-slate-950 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all ${
                            errors.phone ? 'border-red-500/50' : 'border-slate-800'
                          }`}
                          id="input-phone"
                        />
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                      </div>
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Dual selection list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Clinical Specialty</label>
                      <select
                        value={form.specialty}
                        onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                        id="select-specialty"
                      >
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Implantology">Implantology</option>
                        <option value="Oral & Maxillofacial Surgery">Oral & Maxillofacial</option>
                        <option value="Periodontics">Periodontics</option>
                        <option value="Prosthodontics">Prosthodontics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Implant Line of Interest</label>
                      <select
                        value={form.implantOfInterest}
                        onChange={(e) => setForm({ ...form, implantOfInterest: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                        id="select-implant"
                      >
                        <option value="Standard Implants">Standard Titanium Implants</option>
                        <option value="Mini Implants">Mini Space Implants</option>
                        <option value="All-on-4 Solutions">All-on-4 Full Arch</option>
                        <option value="Customized Implants">Customized 3D-Printed Implants</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Demo Date *</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2 bg-slate-950 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all ${
                          errors.preferredDate ? 'border-red-500/50' : 'border-slate-800'
                        }`}
                        id="input-date"
                      />
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    </div>
                    {errors.preferredDate && <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Special Requirements or Case Notes (Optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="e.g. Seeking immediate load criteria details for custom surgical guides..."
                      rows={2}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all resize-none"
                      id="textarea-msg"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-display font-medium text-sm transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
                    id="submit-demo-btn"
                  >
                    Confirm Demo Booking
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    🛡️ HIPAA Compliance Guaranteed. Your clinical practice credentials are kept private.
                  </p>
                </div>
              </form>
            ) : (
              // Success Screen as an educational clinical ticket
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 text-center"
                id="modal-success-state"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Registration Confirmed</h3>
                <p className="text-sm text-slate-300 mb-6">
                  Thank you, <span className="text-blue-400 font-semibold">{form.name}</span>. Your clinical coordinator has reserved a demonstration session for your practice on <span className="text-white font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-xs">{form.preferredDate}</span>.
                </p>

                {/* Digital Ticket Detail */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-left font-mono text-xs text-slate-300 mb-6 space-y-2">
                  <div className="flex justify-between border-b border-slate-900 pb-2 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    <span>OsseoTech Clinical Access</span>
                    <span>No. IMP-2026-9912</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-500">Institution:</span>
                    <span className="text-white font-semibold">{form.practiceName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Implant Focus:</span>
                    <span className="text-blue-400 font-semibold">{form.implantOfInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Specialty Track:</span>
                    <span className="text-white">{form.specialty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Protocol:</span>
                    <span>{form.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 text-left mb-6">
                  <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <p className="text-[11px] text-slate-300">
                    A clinical support specialist will reach out to you within 2 business hours via <span className="text-white">{form.email}</span> with high-definition digital slides and system planning guidelines.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors"
                  id="close-success-btn"
                >
                  Close & Access Website
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
