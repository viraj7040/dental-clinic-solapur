import { Phone, MapPin, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { CLINIC_CONTACT } from "../data";

export default function Contact() {
  
  const handleWAClick = () => {
    const textStr = encodeURIComponent(CLINIC_CONTACT.whatsappText);
    const waURL = `https://api.whatsapp.com/send?phone=${CLINIC_CONTACT.whatsappNumber}&text=${textStr}`;
    window.open(waURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-dental-teal-light/40 relative overflow-hidden">
      
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono select-none">
            Get Directions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Visit Our Solapur Clinic Today
          </h2>
          <p className="text-slate-600 text-sm font-sans max-w-xl leading-relaxed mt-1">
            Our clinic is situated right in Saat Rasta, the commercial medical junction of Solapur with easy parking access.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Main Coordinates side */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            
            {/* Address Info card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center text-dental-teal shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">Clinic Address</p>
                <p className="font-bold text-slate-900 mt-1">Saat Rasta, Solapur Hub</p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-sans">
                  {CLINIC_CONTACT.fullAddress}
                </p>
                <a 
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-dental-teal hover:text-teal-700 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Helpline contact details */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-full">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">Enquiries & Emergency</p>
                <p className="font-bold text-slate-900 mt-1">Call Booking Reception desk</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                  <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-base font-extrabold text-[#2c5e5e] hover:underline">
                    {CLINIC_CONTACT.phoneFormatted}
                  </a>
                  <span className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-full font-medium">
                    Speaks Kannada, Marathi, Hindi & English
                  </span>
                </div>
              </div>
            </div>

            {/* Timings card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 shrink-0 bg-orange-50">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">Working Hours</p>
                <p className="font-bold text-slate-900 mt-1">Mon-Sat Schedules</p>
                <p className="text-xs text-slate-600 mt-1.5 font-sans">
                  {CLINIC_CONTACT.timings}
                </p>
                <p className="text-[11px] text-amber-600 font-semibold mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{CLINIC_CONTACT.sundayTimings}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Digital Map Mockup and Prominent WhatsApp trigger card */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Map mockup representing Saat Rasta */}
            <div className="bg-slate-950 rounded-2xl h-56 overflow-hidden relative shadow-lg group select-none border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-950/70 to-transparent z-10"></div>
              
              {/* Stylized geometric background represents grid lanes of Solapur */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
              
              {/* Map ping details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center p-6 gap-2">
                <div className="relative">
                  <span className="absolute -inset-2 bg-dental-teal rounded-full blur-sm opacity-55 animate-ping"></span>
                  <div className="w-8 h-8 rounded-full bg-dental-teal/30 flex items-center justify-center text-white relative border-2 border-white shadow-md">
                    📍
                  </div>
                </div>
                <h5 className="font-heading font-extrabold text-sm text-white mt-2">Solapur Dental Care</h5>
                <p className="text-[10px] text-slate-400 font-medium font-sans">1st Floor Royal Arcade, Saat Rasta, Solapur</p>
                
                <a 
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 bg-white text-slate-950 leading-none text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg border border-slate-200 transition-colors hover:bg-slate-50 flex items-center gap-1"
                >
                  <span>Directions Shortcuts</span>
                  <ExternalLink className="w-3 h-3 text-slate-800" />
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Call Out Box as requested */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 sm:p-8 rounded-2xl text-white text-left flex flex-col justify-between shadow-lg shadow-emerald-950/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-2xl -z-1 pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white/15 p-1 px-2.5 rounded text-[10px] font-bold tracking-wider uppercase">WhatsApp Assistance</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl leading-tight">
                  Prefer direct messaging over filling clinical forms?
                </h4>
                <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed mt-2.5 font-sans font-normal max-w-sm">
                  Ping our administrative assistant instantly. Text us to ask questions about prices, treatment durations, or doctor timings.
                </p>
              </div>

              {/* The big green WhatsApp button */}
              <button
                id="contact_page_central_wa_btn"
                onClick={handleWAClick}
                className="mt-6 bg-white hover:bg-slate-50 text-emerald-600 font-sans text-xs sm:text-sm font-extrabold py-3.5 px-6 rounded-full transition-all duration-200 shadow-md flex items-center justify-center gap-2.5 hover:cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-emerald-500 text-emerald-500 shrink-0" />
                <span>Chat Instantly on WhatsApp</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
