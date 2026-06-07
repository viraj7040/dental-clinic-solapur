import { Sparkles, ShieldCheck, Cpu, Award, Heart, CheckCircle2 } from "lucide-react";
import { CLINIC_FEATURES, CLINIC_CONTACT } from "../data";

export default function About() {
  
  // Icon dictionary to safely resolve icons by string names
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors animate-pulse" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors" />;
      case "Award":
        return <Award className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors" />;
      default:
        return <Heart className="w-5 h-5 text-dental-teal group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-50 relative overflow-hidden">
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-dental-mint/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern section title layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono">
            Our Dental Philosophy
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Designed for Comfort, Driven by Sterile Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
            At Solapur Dental Care, we reject traditional intimidating clinical coldness. We have custom-tailored a soothing space featuring soft colors, gentle air conditioning, and friendly faces.
          </p>
        </div>

        {/* Clinical Overview Grid (Two columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Aesthetic credentials / Statistics cluster */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-gradient-to-br from-dental-teal-light to-white p-6 rounded-2xl border border-teal-100 shadow-sm text-left">
                <p className="text-4xl sm:text-5xl font-heading font-black text-dental-teal">14+</p>
                <p className="text-sm font-bold text-slate-900 mt-2">Years of Service</p>
                <p className="text-xs text-slate-500 mt-1 lines-clamp-2">Delivered trusted family denticare in Solapur district.</p>
              </div>

              <div className="bg-gradient-to-br from-[#fbfbf9] to-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                <p className="text-4xl sm:text-5xl font-heading font-black text-dental-teal-dark">4.9★</p>
                <p className="text-sm font-bold text-slate-900 mt-2">Patient Rating</p>
                <p className="text-xs text-slate-500 mt-1">Based on 1,500+ verified Solapur medical reviews.</p>
              </div>

              <div className="bg-gradient-to-br from-[#fbfbf9] to-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                <p className="text-4xl sm:text-5xl font-heading font-black text-dental-teal-dark">12k+</p>
                <p className="text-sm font-bold text-slate-900 mt-2">Smiles Restored</p>
                <p className="text-xs text-slate-500 mt-1">Spanning crowns, aligners, tooth whitening, and painless fillings.</p>
              </div>

              <div className="bg-gradient-to-br from-dental-teal-light to-white p-6 rounded-2xl border border-teal-100 shadow-sm text-left">
                <p className="text-4xl sm:text-5xl font-heading font-black text-dental-teal">100%</p>
                <p className="text-sm font-bold text-slate-900 mt-2">Autoclave Sterility</p>
                <p className="text-xs text-slate-500 mt-1">Strict Class-B autoclave testing log updated daily.</p>
              </div>

            </div>
          </div>

          {/* Core Descriptive Text */}
          <div className="lg:col-span-7 text-left order-1 lg:order-2 flex flex-col gap-5">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-950 leading-snug tracking-tight">
              A Warm, Pediatric-Friendly Space in Saat Rasta
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Serving our community from our centrally located clinic at Saat Rasta, Solapur, we specialize in rescuing decaying teeth with rotary single-sitting root canals, correcting alignment with invisible clear aligners, and placing multi-year prosthetic implants.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We know dental anxiety is real. That is why our team prioritizes conservative healthcare – we always aim to preserve your original teeth rather than forcing extractions. From toddler oral checks to adult bone-guided implants, your comfort is mapped out prior to treatment.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-dental-teal shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base"><strong>Full Covid & Hepatitis Safe Protocol</strong>: Safe clinical disinfection before every consultation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-dental-teal shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base"><strong>Affordable & Transparant Pricing</strong>: Honest treatment estimations without hidden charges.</span>
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-xl bg-teal-50/50 border border-teal-100/60 flex items-center gap-4 text-left">
              <span className="text-2xl">📍</span>
              <div className="text-xs font-sans">
                <p className="font-bold text-slate-900">Clinic Landmarking</p>
                <p className="text-slate-600 mt-0.5">{CLINIC_CONTACT.fullAddress}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {CLINIC_FEATURES.map((feat) => (
            <div 
              key={feat.id}
              className="bg-[#fafbfb] hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-dental-teal/10 group-hover:bg-dental-teal group-hover:text-white transition-colors flex items-center justify-center mb-5 shrink-0">
                {getFeatureIcon(feat.iconName)}
              </div>
              <h4 className="font-heading font-bold text-base text-slate-950 mb-2">
                {feat.title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-sans font-normal leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
