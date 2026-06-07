import { Heart, Phone, ShieldCheck, Star } from "lucide-react";
import { CLINIC_CONTACT } from "../data";

interface FooterProps {
  setActiveSection: (sec: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  
  const handleJumpClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
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

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 text-left">
          
          {/* Clinic Brand and Vision column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-dental-teal flex items-center justify-center text-white font-serif font-black shadow-inner">
                <span>S</span>
              </div>
              <span className="font-heading font-bold text-lg text-white leading-none tracking-tight">
                Solapur Dental <span className="text-dental-teal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-extrabold">Care</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed mt-2.5 max-w-sm">
              We stand for painless, high-hygiene oral dentistry in Solapur. Our clinic enlists experienced MDS specialist doctors equipped with dental lasers and computer-aided diagnostic instruments.
            </p>

            <div className="flex items-center gap-2 mt-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 self-start select-none">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs text-slate-300 font-semibold font-sans">4.9/5.0 Star Rated Local Clinic</span>
            </div>
          </div>

          {/* Quick Jump-links Column */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-4">
            <h5 className="font-heading font-extrabold text-sm uppercase tracking-wider text-white">
              Quick Shortcuts
            </h5>
            <div className="flex flex-col gap-3 text-xs">
              <button onClick={() => handleJumpClick("home")} className="hover:text-white transition-colors text-left cursor-pointer">Home Landing Page</button>
              <button onClick={() => handleJumpClick("about")} className="hover:text-white transition-colors text-left cursor-pointer">About Clinic Philosophy</button>
              <button onClick={() => handleJumpClick("services")} className="hover:text-white transition-colors text-left cursor-pointer">Dental Treatment Panels</button>
              <button onClick={() => handleJumpClick("doctors")} className="hover:text-white transition-colors text-left cursor-pointer">Certified MDS Surgeons</button>
              <button onClick={() => handleJumpClick("reviews")} className="hover:text-white transition-colors text-left cursor-pointer">Patient Experience Logs</button>
              <button onClick={() => handleJumpClick("contact")} className="hover:text-white transition-colors text-left cursor-pointer">Saat Rasta Map & Contacts</button>
            </div>
          </div>

          {/* Emergency Disclaimer & Landmark Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-slate-800/40 p-5 rounded-2xl border border-slate-800">
            <h5 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white flex items-center gap-1.5 text-rose-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span>Emergency Disclaimer</span>
            </h5>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans mt-1.5">
              If you have deep localized facial trauma, severe cheek swelling, or high tooth pulpal throbbing at night, call our emergency hotline directly: 
              <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-white hover:underline block mt-1 font-bold">{CLINIC_CONTACT.phoneFormatted}</a>
            </p>
            
            <div className="h-[1px] bg-slate-700/50 my-1"></div>
            
            <p className="text-[10px] text-slate-500 font-mono">
              ★ Reg No: MH-SOL-DC-2016-0889
            </p>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Solapur Dental Care. All Rights Reserved. Designed for gentle dental hygiene.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for Solapur residents</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
