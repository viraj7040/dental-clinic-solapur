import { Calendar, PhoneCall, Sparkles, Star, Users, CheckCircle2 } from "lucide-react";
import { CLINIC_CONTACT } from "../data";
import heroImage from "../assets/images/dental_clinic_hero_1780670780257.png";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const handleWAClick = () => {
    const waURL = `https://api.whatsapp.com/send?phone=${CLINIC_CONTACT.whatsappNumber}&text=${encodeURIComponent(CLINIC_CONTACT.whatsappText)}`;
    window.open(waURL, "_blank");
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 lg:pt-36 bg-gradient-to-b from-dental-teal-light via-dental-mint to-white overflow-hidden">
      
      {/* Absolute decorative backdrops to reinforce faint clinical attraction */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-2xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content side */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left animate-fade-in">
            
            {/* Soft clinical floating badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-teal-100 text-teal-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Best Dental Clinic in Solapur</span>
            </div>

            {/* Main polished headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-slate-950 leading-tight tracking-tight">
              A Warm, Painless Dental Experience for <span className="text-dental-teal text-transparent bg-clip-text bg-gradient-to-r from-dental-teal to-teal-700">Healthy Solapur Smiles</span>
            </h1>

            {/* Supporting crisp subtitle */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl font-sans font-normal leading-relaxed">
              Step into a soothing dental hospital atmosphere designed with cozy coordinates and faint pastel styles. Dr. Rohan Patil and team offer high-precision digital treatment with maximum maternal gentleness.
            </p>

            {/* Core credentials chips for visual trust */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium font-sans">Single-sitting RCT</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium font-sans">MDS Super-Specialists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium font-sans">Laser & Scaler Comfort</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs sm:text-sm text-slate-700 font-medium font-sans">Adult & Pediatric Bays</span>
              </div>
            </div>

            {/* Primary Action Panel including glowing WhatsApp booking */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero_schedule_appointment_btn"
                onClick={onBookClick}
                className="bg-dental-teal hover:bg-teal-700 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-teal-200 hover:cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinical Slot</span>
              </button>

              <button
                id="hero_whatsapp_book_btn"
                onClick={handleWAClick}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-emerald-100 flex items-center justify-center gap-2 hover:cursor-pointer animate-pulse-subtle relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                {/* Solapur dental custom green bubble */}
                <span className="relative w-2 h-2 rounded-full bg-emerald-200 animate-ping"></span>
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Social Trust Block */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200/60 mt-2">
              <div className="flex -space-x-2.5">
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Patient review" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Patient review Solapur" referrerPolicy="no-referrer" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Patient reviews" referrerPolicy="no-referrer" />
                <div className="w-9 h-9 rounded-full border-2 border-white bg-teal-500 text-white flex items-center justify-center font-bold text-[10px]">12k+</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-800 ml-1.5">4.9 / 5.0</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Verified Solapur Patient Reviews</span>
              </div>
            </div>

          </div>

          {/* Graphical representation side displaying our generated clinic image */}
          <div className="lg:col-span-5 relative w-full flex justify-center animate-fade-in">
            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] xl:aspect-[1/1] z-15">
              
              {/* Aesthetic glass borders representing dental cleanliness */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl blur-md opacity-45 -z-10 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative">
                <img 
                  src={heroImage} 
                  alt="Solapur Dental Care clinic interior - beautifully designed waiting lounge and soft light sterile space." 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating clinical certification card in bottom corners */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between gap-3 animate-fade-in delay-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900 leading-none">Safe Environment</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Equipped for pediatric care</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex bg-dental-teal/10 text-dental-teal font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      Pain-Free
                    </span>
                  </div>
                </div>

              </div>

              {/* Auxiliary floating badges to create depth */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 animate-bounce-gentle">
                <span className="text-xl">🌟</span>
                <div className="text-left font-sans">
                  <p className="text-[10px] font-bold text-slate-900 leading-none">100% Happy</p>
                  <p className="text-[9px] text-slate-500">Local Referrals</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
