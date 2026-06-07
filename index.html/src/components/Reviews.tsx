import React, { useState } from "react";
import { Star, MessageSquare, Check, UserPlus, Heart, Award, ArrowRight } from "lucide-react";
import { PATIENT_REVIEWS, DENTAL_SERVICES } from "../data";
import { Review } from "../types";

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(PATIENT_REVIEWS);
  const [formOpen, setFormOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [treatment, setTreatment] = useState("Root Canal Therapy");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: String(Date.now()),
      patientName: patientName.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      date: "Today",
      treatment: treatment,
      verified: true
    };

    // Prepend new review
    setReviewsList([newReview, ...reviewsList]);
    setSubmissionSuccess(true);
    
    // Auto reset values after 2 seconds
    setTimeout(() => {
      setPatientName("");
      setComment("");
      setRating(5);
      setSubmissionSuccess(false);
      setFormOpen(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 bg-dental-teal-light/20 border-b border-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block with stats recap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 text-left">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono">
              Patient Testimonials
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight mt-3">
              1,500+ Solapur Families Keep Smiling with Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-3 max-w-xl leading-relaxed">
              Read real logs written by residents of Solapur on pain-free root canals, aligners adjustments, and children treatments.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <button
              id="toggle_review_form_btn"
              onClick={() => setFormOpen(!formOpen)}
              className="bg-dental-teal text-white hover:bg-teal-700 font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm shadow-teal-200 flex items-center gap-2 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>{formOpen ? "View Patient Stories" : "Share Your Smile Story"}</span>
            </button>
          </div>
        </div>

        {/* Dynamic review submission form drawer */}
        {formOpen && (
          <div className="max-w-xl mx-auto bg-white border border-teal-100 rounded-3xl p-6 sm:p-8 shadow-xl mb-12 animate-fade-in text-left">
            {submissionSuccess ? (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">Thank you for your Feedback!</h4>
                <p className="text-xs text-slate-500 max-w-xs">Your kind words are added directly to our Solapur reviews board.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="flex flex-col gap-4">
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-950">Write an Honest Clinical Review</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Your evaluation helps our doctors improve daily standards.</p>
                </div>

                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Priyanjali Gore"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-dental-teal focus:outline-none text-slate-800 bg-white"
                  />
                </div>

                {/* Grid rows */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Rating Selector */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-bold text-slate-400 font-mono mb-1">Clinic Experience</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-dental-teal focus:outline-none text-slate-800 bg-white cursor-pointer"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (Good)</option>
                      <option value={3}>⭐⭐⭐ (Satisfactory)</option>
                      <option value={2}>⭐⭐ (Needs Improvement)</option>
                      <option value={1}>⭐ (Poor)</option>
                    </select>
                  </div>

                  {/* Treatment Category */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase font-bold text-slate-400 font-mono mb-1">Treatment Recived</label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-dental-teal focus:outline-none text-slate-800 bg-white cursor-pointer"
                    >
                      {DENTAL_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Checkup">Regular Teeth Cleaning</option>
                      <option value="Emergency Consultation">Dental Emergency</option>
                    </select>
                  </div>

                </div>

                {/* Experience Review Comments */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-slate-400 font-mono mb-1">Review Comments</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe your session comfort. How was the doctor's explanation?"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-dental-teal focus:outline-none text-slate-800 bg-white resize-none"
                  />
                </div>

                <button
                  id="submit_user_review_btn"
                  type="submit"
                  className="w-full bg-dental-teal hover:bg-teal-700 text-white font-sans text-xs font-semibold py-3 rounded-full transition-all cursor-pointer shadow-sm text-center"
                >
                  Post Review Now
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-100/90 shadow-sm hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                
                {/* Micro Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < rev.rating ? "fill-amber-400" : "text-slate-200 fill-slate-100"}`} 
                      />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">
                      <Check className="w-2.5 h-2.5" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Comments text */}
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>

              </div>

              {/* Patient Footer */}
              <div className="border-t border-slate-100 pt-3.5 mt-auto">
                <p className="text-xs font-extrabold text-[#2c5e5e]">{rev.patientName}</p>
                <div className="flex items-center justify-between mt-0.5 select-none">
                  <span className="text-[10px] text-slate-400 font-medium">{rev.treatment}</span>
                  <span className="text-[9px] text-slate-400 font-mono font-medium">{rev.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Unsplash Dentist feedback ribbon */}
        <div className="mt-16 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 shadow-sm border border-slate-100">
              <img src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150" alt="Clinic Representative" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Your Trust is Our Commitment</p>
              <p className="text-xs text-slate-500 mt-1 lines-clamp-1">Every review on this page reflects our daily passion for gentle dentistry.</p>
            </div>
          </div>
          <button
            id="reviews_appointment_shortcut_btn"
            onClick={() => {
              const appSec = document.getElementById("appointments");
              if (appSec) appSec.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs font-bold text-dental-teal flex items-center gap-1.5 hover:text-teal-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Book Your Session Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
