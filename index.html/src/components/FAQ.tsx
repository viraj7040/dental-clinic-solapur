import { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronRight } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("q1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Treatment", "Appointments", "Costs"];

  const filteredItems = selectedCategory === "All" 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setActiveId(prevId => prevId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-50 relative overflow-hidden">
      
      <div className="absolute top-10 right-0 w-80 h-80 bg-teal-200/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono select-none">
            Learning Hub
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Frequently Asked Dental Questions
          </h2>
          <p className="text-slate-600 text-sm font-sans max-w-xl leading-relaxed mt-1">
            Understanding your teeth dental operations leads to better oral protection. Get instant answers below.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveId(null);
              }}
              className={`px-4 py-2 text-xs rounded-full cursor-pointer font-semibold transition-all ${
                selectedCategory === cat 
                  ? "bg-dental-teal text-white shadow-sm shadow-teal-900/10" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-4 text-left">
          {filteredItems.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div 
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-[#fafbfb] border-teal-200 shadow-md shadow-teal-900/5" 
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-sans focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? "text-dental-teal" : "text-slate-400"}`} />
                    <span className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-dental-teal/10 text-dental-teal" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:pb-6 pt-0 border-t border-dashed border-slate-200/60 animate-fade-in text-left">
                    <p className="text-xs text-slate-400 uppercase font-mono font-bold tracking-wider mb-2 select-none">Clinic Response</p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* FAQ helper footer card */}
        <div className="p-4 px-6 rounded-2xl bg-teal-50/25 border border-teal-150/50 mt-12 text-left flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">💡</span>
            <p className="text-xs text-slate-600 leading-normal">
              Have different dental symptoms or inquiries you wish to share directly?
            </p>
          </div>
          <a
            href={`https://wa.me/919422048110?text=Hello,%20I%20checked%20the%20FAQs%20and%20had%20a%20clinical%20question%20regarding:`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-dental-teal hover:text-teal-700 transition-colors flex items-center gap-1 shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Ask Us On WhatsApp</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
