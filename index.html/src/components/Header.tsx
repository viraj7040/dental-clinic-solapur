import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, Calendar, MessageSquare } from "lucide-react";
import { CLINIC_CONTACT } from "../data";

interface HeaderProps {
  onBookClick: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ onBookClick, activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Clinic" },
    { id: "services", label: "Our Treatments" },
    { id: "doctors", label: "Our Doctors" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of dry header
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro alert info bar */}
      <div className="bg-dental-teal-dark text-dental-teal-light text-xs py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wide">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5" />
              <span>{CLINIC_CONTACT.shortAddress}</span>
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_CONTACT.phone}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-teal-800/60 px-2 py-0.5 rounded-full text-emerald-300 font-medium">
              ★ ISO 9001:2015 Certified Clinic
            </span>
            <a 
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-[11px] font-semibold"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main glass navigation navbar */}
      <nav 
        className={`transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3" 
            : "bg-[#fafbfb]/90 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand with soft therapeutic theme */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-dental-teal flex items-center justify-center text-white font-serif font-black shadow-inner relative overflow-hidden transition-transform group-hover:scale-102">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-700/40 to-transparent"></div>
              <span className="text-xl relative z-10">S</span>
              {/* Dental shine sparkle effect */}
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-slate-950 group-hover:text-dental-teal transition-colors">
                Solapur Dental <span className="text-dental-teal">Care</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 font-medium">
                Painless Oral Health Hub
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all duration-200 relative py-1 hover:text-dental-teal text-left cursor-pointer ${
                  activeSection === item.id 
                    ? "text-dental-teal font-semibold" 
                    : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dental-teal rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* Action Button & Contact Menu button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`}
              className="text-slate-700 text-sm font-semibold flex items-center gap-2 hover:text-dental-teal transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-normal text-slate-500 leading-none">Emergency Call</span>
                <span className="text-xs">{CLINIC_CONTACT.phoneFormatted}</span>
              </div>
            </a>

            <button
              id="header_book_now_btn"
              onClick={onBookClick}
              className="bg-dental-teal hover:bg-teal-700 text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm shadow-teal-200 active:scale-98 flex items-center gap-1.5 hover:cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Slot</span>
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="floating_header_mobile_book_btn"
              onClick={onBookClick}
              className="bg-dental-teal text-white hover:bg-teal-700 px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              id="mobile_hamburger_menu_btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-dental-teal"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile drop-down full panel menu with transitions */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-base font-medium rounded-lg text-left px-3 block hover:bg-slate-50 transition-colors ${
                  activeSection === item.id 
                    ? "text-dental-teal bg-teal-50/50 font-semibold" 
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-[1px] bg-slate-100 my-1"></div>

          <div className="flex flex-col gap-4 px-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-dental-teal" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-slate-800">Saat Rasta Clinic Location</p>
                <p className="text-slate-500 line-clamp-1">{CLINIC_CONTACT.fullAddress}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-150 flex items-center justify-center shrink-0 bg-emerald-50">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-slate-800">Call Hospital Helpline</p>
                <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-emerald-700 underline font-semibold block">{CLINIC_CONTACT.phoneFormatted}</a>
              </div>
            </div>

            <button
              id="mobile_header_book_cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full bg-dental-teal text-white py-3 rounded-full text-center font-semibold text-sm shadow-sm shadow-teal-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Slot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
