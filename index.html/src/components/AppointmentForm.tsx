import React, { useState, useEffect } from "react";
import { Calendar, Phone, Clock, User, Heart, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { DENTAL_SERVICES, CLINIC_CONTACT } from "../data";

interface AppointmentFormProps {
  selectedDoctor: string;
  setSelectedDoctor: (doc: string) => void;
}

export default function AppointmentForm({ selectedDoctor, setSelectedDoctor }: AppointmentFormProps) {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10:00 AM - 02:00 PM)");
  const [symptoms, setSymptoms] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMode, setSuccessMode] = useState<"whatsapp" | "callback" | null>(null);

  // Validate fields
  const validateForm = () => {
    if (!patientName.trim()) {
      setErrorMsg("Please enter the patient's full name.");
      return false;
    }
    if (!mobileNumber.trim() || mobileNumber.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!selectedService) {
      setErrorMsg("Please select a required dental treatment.");
      return false;
    }
    if (!preferredDate) {
      setErrorMsg("Please select your preferred appointment date.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  // Submit via WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const summaryText = `*Solapur Dental Care - Appointment Slot Sync*\n\n` +
      `👤 *Patient:* ${patientName}\n` +
      `📞 *Mobile:* ${mobileNumber}\n` +
      `🦷 *Treatment:* ${selectedService}\n` +
      `👨‍⚕️ *Doctor Preferred:* ${selectedDoctor || "Any MDS Specialist"}\n` +
      `📅 *Date:* ${preferredDate}\n` +
      `🕒 *Pref Slot:* ${preferredTime}\n` +
      `📝 *Symptoms:* ${symptoms || "Regular dental checkup"}\n\n` +
      `_Please confirm slot availability for this request._`;

    const waURI = `https://api.whatsapp.com/send?phone=${CLINIC_CONTACT.whatsappNumber}&text=${encodeURIComponent(summaryText)}`;
    
    setSuccessMode("whatsapp");
    setSuccess(true);
    
    // Open in new tab securely
    window.open(waURI, "_blank");
  };

  // Submit via Callback
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSuccessMode("callback");
    setSuccess(true);
  };

  // Reset Form
  const handleReset = () => {
    setPatientName("");
    setMobileNumber("");
    setSelectedService("");
    setPreferredDate("");
    setSymptoms("");
    setSuccess(false);
    setSuccessMode(null);
    setSelectedDoctor("");
  };

  return (
    <section id="appointments" className="py-20 bg-[#fafbfb] border-b border-slate-50 relative overflow-hidden">
      
      {/* Visual ornaments */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-teal-200/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informational checklist column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono self-start select-none">
              Online Registration
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
              Secure Your Priority Slot Instantly
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Skip clinic queue wait times. Fill out our digital checkup request, and easily synchronize coordinates immediately to our doctors via secure WhatsApp dispatch.
            </p>

            <div className="flex flex-col gap-5 pt-4">
              
              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-dental-teal/10 flex items-center justify-center shrink-0 text-dental-teal">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono font-bold text-slate-400">Response Speed</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">15-Min Confirmation</p>
                  <p className="text-xs text-slate-600 mt-1">Our Solapur desks will inspect parameters and lock your timings slot.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono font-bold text-slate-400">Maternal Quality</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Zero Registration Cost</p>
                  <p className="text-xs text-slate-600 mt-1">First-time routine dental diagnostics contain transparent assessments.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono font-bold text-slate-400">Child comfort</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Specialized Pediatric Bays</p>
                  <p className="text-xs text-slate-600 mt-1">Calm toys and stress-free interaction guarantees high safety.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Form column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-100/90 shadow-xl p-6 sm:p-8 relative">
              
              {/* Success Screen */}
              {success ? (
                <div className="py-12 px-4 text-center flex flex-col items-center gap-5 sm:gap-6 animate-fade-in text-left">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="max-w-md flex flex-col gap-2">
                    <h3 className="font-heading font-extrabold text-2xl text-slate-950">
                      Slot Inquiry Dispatched!
                    </h3>
                    
                    {successMode === "whatsapp" ? (
                      <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal">
                        Your appointment summary has been synchronized to our <strong>official WhatsApp interface ({CLINIC_CONTACT.phoneFormatted})</strong>. Please double-check WhatsApp to click send! We will lock your target slot.
                      </p>
                    ) : (
                      <p className="text-slate-600 text-sm leading-relaxed font-sans font-normal">
                        We have successfully registered your dental callback query. Our Solapur receptionist at Saat Rasta will cross-reference Dr. {selectedDoctor || "Rohan Patil"}'s patient log and call you back shortly.
                      </p>
                    )}
                  </div>

                  {/* Summary recap */}
                  <div className="w-full max-w-sm rounded-xl bg-slate-50 border border-slate-100 p-4.5 text-xs text-slate-600 flex flex-col gap-2.5 text-left font-sans">
                    <p className="border-b border-slate-200/50 pb-2 font-semibold text-slate-800">Registration Details Recived:</p>
                    <p>👨‍🌾 <strong>Patient:</strong> {patientName}</p>
                    <p>🦷 <strong>Treatment:</strong> {selectedService}</p>
                    <p>📅 <strong>Target Date:</strong> {preferredDate}</p>
                    <p>🕒 <strong>Selected Slot:</strong> {preferredTime}</p>
                  </div>

                  <button
                    id="book_another_button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Register Another Patient
                  </button>
                </div>
              ) : (
                
                /* Standard form panel */
                <form className="flex flex-col gap-5 text-left md:grid md:grid-cols-2 lg:flex lg:flex-col lg:gap-5">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-heading font-extrabold text-slate-950">
                      Medical Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Please provide accurate parameters to expedite dental reviews.</p>
                  </div>

                  {/* Active validation warning */}
                  {errorMsg && (
                    <div className="md:col-span-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-100">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Patient Name */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Patient's Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Mobile Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="tel" 
                        maxLength={11}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="e.g. 94220XXXXX"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  {/* Required Treatment */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Select Required Treatment <span className="text-red-500">*</span></label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800 hover:cursor-pointer"
                      required
                    >
                      <option value="">-- Choose Diagnosis --</option>
                      {DENTAL_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Consultation">General Checkup & Scaling</option>
                    </select>
                  </div>

                  {/* Preferred Doctor */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Select Preferred Dentist</label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800 hover:cursor-pointer"
                    >
                      <option value="">Any Available Specialist Doctor</option>
                      <option value="Dr. Rohan Patil">Dr. Rohan Patil (Senior Implantologist)</option>
                      <option value="Dr. Smita Deshmukh">Dr. Smita Deshmukh (Orthodontist / Cosmetic)</option>
                    </select>
                  </div>

                  {/* Date picker */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800 hover:cursor-pointer"
                        required
                      />
                    </div>
                  </div>

                  {/* Preferred Timing slot */}
                  <div className="flex flex-col">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Preferred Timing Period</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800 hover:cursor-pointer"
                    >
                      <option value="Morning (10:00 AM - 02:00 PM)">Morning: 10:00 AM - 02:00 PM</option>
                      <option value="Evening (05:00 PM - 09:00 PM)">Evening: 05:00 PM - 09:00 PM</option>
                    </select>
                  </div>

                  {/* Describe problem / comments */}
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">Symptoms or Comments (Optional)</label>
                    <textarea 
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={2}
                      placeholder="e.g. Sensitivity to cold water since 3 days / Regular cleaning required."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent bg-white text-slate-800 resize-none"
                    />
                  </div>

                  {/* Split submission choices */}
                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      id="submit_appointment_by_wa_btn"
                      type="submit"
                      onClick={handleWhatsAppSubmit}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs sm:text-sm font-semibold px-5.5 py-3.5 rounded-full transition-all duration-200 shadow-sm shadow-emerald-100 flex-1 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-emerald-100 text-emerald-600 inline-block" />
                      <span>Sync & Book on WhatsApp</span>
                    </button>

                    <button
                      id="submit_appointment_callback_btn"
                      type="button"
                      onClick={handleCallbackSubmit}
                      className="bg-dental-teal-dark hover:bg-teal-900 text-white font-sans text-xs sm:text-sm font-semibold px-5.5 py-3.5 rounded-full transition-all duration-200 shadow-sm shadow-teal-100 flex-1 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-teal-100" />
                      <span>Request Offline Callback</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
