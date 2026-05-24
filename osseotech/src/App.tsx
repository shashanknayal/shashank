import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ProductsCatalog from "./components/ProductsCatalog";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Dynamic Header */}
      <Navbar onRequestDemo={openDemoModal} />

      {/* Main Sections */}
      <main>
        {/* Hero Area with interactive hotspots */}
        <Hero onRequestDemo={openDemoModal} />

        {/* Section 2: Clinical Vows & Reviews */}
        <TrustSection />

        {/* Section 3: Technical Catalog and Spec Sheets */}
        <ProductsCatalog />

        {/* Section 4: Interactive Accordion Q&As */}
        <FaqSection />
      </main>

      {/* Corporate Multi-Column Contact Footer */}
      <Footer />

      {/* High-Fidelity Booking System overlay modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
