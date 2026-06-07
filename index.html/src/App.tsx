import { useState } from "react";
import { MessageSquare, Heart, Shield, Phone, ArrowUp } from "lucide-react";
import { CLINIC_CONTACT } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AppointmentForm from "./components/AppointmentForm";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleBookNowClick = () => {
    setActiveSection("appointments");
    const element = document.getElementById("appointments");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDoctorSelect = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setActiveSection("appointments");
    const element = document.getElementById("appointments");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleFloatingWAClick = () => {
    const waURL = `https://api.whatsapp.com/send?phone=${CLINIC_CONTACT.whatsappNumber}&text=${encodeURIComponent(CLINIC_CONTACT.whatsappText)}`;
    window.open(waURL, "_blank");
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-[#fafbfb] text-slate-800 selection:bg-teal-100 selection:text-teal-900 transition-colors duration-300">
      
      {/* 1. Header Segment */}
      <Header 
        onBookClick={handleBookNowClick} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main>
        {/* 2. Hero banner displaying generated dentist waiting room image */}
        <Hero onBookClick={handleBookNowClick} />

        {/* 3. About section with sterile autoclave details */}
        <About />

        {/* 4. Interactive treatments catalog and detail popup */}
        <Services />

        {/* 5. Team specialty board */}
        <Doctors onDoctorSelect={handleDoctorSelect} />

        {/* 6. Dynamic booking panel showcasing WhatsApp sync validations */}
        <AppointmentForm 
          selectedDoctor={selectedDoctor} 
          setSelectedDoctor={setSelectedDoctor} 
        />

        {/* 7. Client reviews and mock review appending drawer */}
        <Reviews />

        {/* 8. Frequently Asked Questions accordions */}
        <FAQ />

        {/* 9. Coordinates, opening hours & Map details */}
        <Contact />
      </main>

      {/* 10. Creative Footer with jump limits and emerency helpline card */}
      <Footer setActiveSection={setActiveSection} />

      {/* 11. Floating Permanent WhatsApp Bubble helper */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 select-none items-end">
        
        {/* Helper popover tooltip */}
        <div className="bg-white text-slate-900 px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100/60 max-w-xs text-right animate-bounce-gentle hidden md:block">
          <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-mono">Solapur Dental Desk</p>
          <p className="text-xs font-semibold text-slate-700 mt-1">Hello, how can I help you today?</p>
        </div>

        <div className="flex gap-2.5">
          {/* Scroll to Top button */}
          <button
            onClick={handleScrollToTop}
            className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center shadow-lg border border-slate-100 transition-all active:scale-95 cursor-pointer focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-500" />
          </button>

          {/* Glowing WhatsApp floating anchor action */}
          <button
            id="global_floating_whatsapp_btn"
            onClick={handleFloatingWAClick}
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/10 transition-transform active:scale-95 cursor-pointer relative group focus:outline-none"
            aria-label="Chat with Solapur Dental Care on WhatsApp"
          >
            <span className="absolute -inset-1.5 bg-emerald-400 rounded-full blur-md opacity-35 group-hover:opacity-50 animate-pulse"></span>
            <MessageSquare className="w-6 h-6 fill-white text-white relative z-10 shrink-0" />
          </button>
        </div>

      </div>

    </div>
  );
}
