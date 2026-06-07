import { useState } from "react";
import { Activity, Anchor, Grid, Smile, Heart, Shield, Clock, IndianRupee, ArrowRight, X, Check, HelpCircle } from "lucide-react";
import { DENTAL_SERVICES } from "../data";
import { DentalService } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);

  // Safely map string names or service ids to Lucide icons
  const getServiceIcon = (id: string, iconName: string) => {
    const iconClass = "w-6 h-6 text-dental-teal group-hover:scale-110 transition-transform duration-200";
    switch (id) {
      case "rct":
        return <Activity className={iconClass} />;
      case "implants":
        return <Anchor className={iconClass} />;
      case "aligners":
        return <Grid className={iconClass} />;
      case "cosmetic":
        return <Smile className={iconClass} />;
      case "pediatric":
        return <Heart className={iconClass} />;
      case "gum-therapy":
        return <Shield className={iconClass} />;
      default:
        return <HelpCircle className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-dental-teal-light/40 border-b border-slate-50 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-100/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono">
            Clinical Solutions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Specialized Dentistry Tailored to Solapur Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
            From emergency severe toothaches to complex cosmetic aligners, we bring certified MDS specialists and pain-free equipment under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTAL_SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between group"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dental-teal/10 flex items-center justify-center">
                    {getServiceIcon(service.id, service.iconName)}
                  </div>
                  {service.costEstimate && (
                    <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
                      <IndianRupee className="w-3 h-3 text-slate-400" />
                      <span>Est: {service.costEstimate.split(" - ")[0]}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-950 mb-3 group-hover:text-dental-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom detail action row */}
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{service.duration}</span>
                </span>

                <button
                  id={`view_details_btn_${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-dental-teal flex items-center gap-1 hover:text-teal-700 transition-colors group-hover:gap-1.5 focus:outline-none cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Elegant Interactive Details Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
          
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Soft clinical-header bar of Modal */}
            <div className="bg-gradient-to-r from-dental-teal-light to-dental-mint p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/90 shadow-sm flex items-center justify-center">
                  {getServiceIcon(selectedService.id, selectedService.iconName)}
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-none">
                    {selectedService.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono mt-1 font-medium select-none">
                    TREATMENT OVERVIEW & BENEFITS
                  </p>
                </div>
              </div>

              <button
                id="close_treatment_modal_btn"
                onClick={() => setSelectedService(null)}
                className="p-1 px-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-500 hover:text-slate-900 transition-all border border-slate-200/50 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable details contents */}
            <div className="p-6 overflow-y-auto text-left flex flex-col gap-6">
              
              {/* Detailed description */}
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">Deep Clinical Insights</h5>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {selectedService.detailedDescription || selectedService.description}
                </p>
              </div>

              {/* Grid of parameters */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#fafbfb] border border-slate-100">
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 uppercase font-bold font-mono">Sessions Duration</span>
                  <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 mt-1">
                    <Clock className="w-4 h-4 text-dental-teal" />
                    <span>{selectedService.duration}</span>
                  </p>
                </div>
                
                {selectedService.costEstimate && (
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 uppercase font-bold font-mono">Solapur Standard Tariffs</span>
                    <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5 mt-1">
                      <IndianRupee className="w-4 h-4 text-emerald-600" />
                      <span>{selectedService.costEstimate}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Standard Treatment Benefits Checklist */}
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">Key Treatment Benefits</h5>
                <div className="flex flex-col gap-3">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High comfort reassurance footer in modal */}
              <div className="p-4 rounded-xl bg-teal-50/40 border border-teal-100 flex items-center gap-3">
                <span className="text-xl shrink-0">🛡️</span>
                <p className="text-xs text-teal-900 leading-relaxed font-medium">
                  <strong>Painless Dentistry Guarantee</strong>: We utilize computer-guided numbing and localized ultrasonic tools, ensuring high comfort throughout your session.
                </p>
              </div>

            </div>

            {/* CTA action bar of modal */}
            <div className="p-5 border-t border-slate-100 bg-[#fafbfb] flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Need immediate consultation on this treatment?</span>
              <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
                <button
                  id="modal_consultation_form_cta"
                  onClick={() => {
                    setSelectedService(null);
                    const appointmentSec = document.getElementById("appointments");
                    if (appointmentSec) {
                      appointmentSec.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-4.5 py-2 border border-slate-200 text-slate-700 font-semibold text-xs rounded-full hover:bg-slate-50 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  Fill Inquiry Form
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=919422048110&text=Hello,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(selectedService.title)}%20treatment%20at%20Solapur%20Dental%20Care.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4.5 py-2 bg-emerald-500 text-white font-semibold text-xs rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
