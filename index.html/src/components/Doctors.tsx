import { ShieldCheck, Calendar, Award, UserCheck, Stethoscope } from "lucide-react";
import { CLINIC_DOCTORS } from "../data";
import { Doctor } from "../types";

interface DoctorsProps {
  onDoctorSelect: (doctorName: string) => void;
}

export default function Doctors({ onDoctorSelect }: DoctorsProps) {
  return (
    <section id="doctors" className="py-20 bg-white border-b border-slate-50 relative overflow-hidden">
      
      {/* Absolute decorative bubbles for organic clinical look */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-150/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-dental-teal-light/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono">
            Medical Board
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Consult the Certified MDS Surgeons of Solapur
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
            Our diagnostic excellence is powered by master clinicians with post-graduate MDS degrees and extensive experience in painless dental procedures.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {CLINIC_DOCTORS.map((doc) => (
            <div 
              key={doc.id}
              className="bg-gradient-to-br from-[#fbfbf9]/40 to-white rounded-3xl border border-slate-100/80 p-6 md:p-8 hover:shadow-2xl hover:shadow-teal-950/5 transition-all duration-300 flex flex-col lg:flex-row gap-6 md:gap-8 items-start text-left hover:border-teal-100/60 group"
            >
              
              {/* Doctor Photo Column */}
              <div className="relative w-full lg:w-48 aspect-square lg:h-56 lg:aspect-auto rounded-2xl overflow-hidden shadow-md shrink-0">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                <img 
                  src={doc.imageUrl} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-dental-teal shadow-sm flex items-center gap-1 z-15">
                  <Award className="w-3.5 h-3.5 text-dental-teal" />
                  <span>{doc.experience.split(" ")[0]} Experience</span>
                </div>
              </div>

              {/* Doctor Details Column */}
              <div className="flex flex-col h-full justify-between w-full">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1 px-2 rounded bg-dental-teal/10 text-dental-teal text-[10px] font-bold uppercase tracking-wider">
                      MDS Specialist
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">ID: {doc.id.toUpperCase()}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-slate-950 group-hover:text-dental-teal transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">
                    {doc.title}
                  </p>

                  <p className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-400 mb-2">Qualifications</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                    {doc.education}
                  </p>

                  {/* Specialty Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doc.specialties.map((spec, i) => (
                      <span 
                        key={i}
                        className="bg-[#fafbfb] border border-slate-200/50 text-slate-600 text-[11px] px-2.5 py-1 rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Doctor Bio excerpt */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-normal italic border-l-2 border-teal-150 pl-3">
                    &ldquo;{doc.bio}&rdquo;
                  </p>
                </div>

                {/* Grid schedule & CTA */}
                <div className="border-t border-slate-100/80 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-4 select-none">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                    <span className="text-[11px] font-semibold text-slate-600">{doc.availability}</span>
                  </div>

                  <button
                    id={`book_doc_btn_${doc.id}`}
                    onClick={() => onDoctorSelect(doc.name)}
                    className="w-full bg-[#fafbfb] hover:bg-dental-teal hover:text-white text-slate-700 font-sans text-xs font-semibold py-2.5 rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 border border-slate-200 hover:border-dental-teal hover:shadow-sm cursor-pointer inline-flex"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Select & Request Appointment</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Medical Board message ticker */}
        <div className="p-4 px-6 rounded-2xl bg-teal-50/20 border border-teal-100/50 max-w-3xl mx-auto mt-12 flex flex-col sm:flex-row gap-3 items-center text-center sm:text-left">
          <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-700">
            <UserCheck className="w-5 h-5 text-dental-teal" />
          </span>
          <p className="text-xs text-slate-600 leading-normal">
            <strong>Need child dental expert?</strong> Dr. Smita Deshmukh leads pediatric diagnostics, using friendly behavioral modeling so your kids enjoy their session with absolute relaxation.
          </p>
        </div>

      </div>
    </section>
  );
}
