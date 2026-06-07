import { DentalService, Doctor, Review, ClinicFeature, FAQItem } from "./types";

export const CLINIC_CONTACT = {
  name: "Solapur Dental Care",
  shortAddress: "Saat Rasta, Solapur",
  fullAddress: "1st Floor, Royal Arcade, Opposite Bank of Baroda, Saat Rasta, Solapur, Maharashtra 413003",
  googleMapsUrl: "https://maps.google.com/?q=Saat+Rasta+Solapur",
  phone: "+91 94220 48110", // A realistic format
  phoneFormatted: "+91 94220 48110",
  whatsappNumber: "919422048110", // Raw number for URL api.whatsapp.com/send?phone=...
  whatsappText: "Hello Solapur Dental Care, I would like to schedule a dental checkup and consult with the dentist.",
  email: "care@solapurdental.com",
  timings: "Mon - Sat: 10:00 AM - 2:00 PM & 5:00 PM - 9:00 PM",
  sundayTimings: "Sunday: By Appointment Only",
};

export const CLINIC_FEATURES: ClinicFeature[] = [
  {
    id: "painless",
    title: "Gentle & Painless Tech",
    description: "Modern computer-aided anesthesia and high-precision lasers minimize discomfort for a truly gentle experience.",
    iconName: "Sparkles",
  },
  {
    id: "sterilization",
    title: "100% Class-B Sterilization",
    description: "We enforce international hygiene standards with vacuum-locked autoclave systems for absolute biological safety.",
    iconName: "ShieldCheck",
  },
  {
    id: "advanced",
    title: "Ultra-Modern Diagnostics",
    description: "Equipped with low-radiation Digital X-Rays (RVG), Intraoral Cameras, and digital crown mapping technologies.",
    iconName: "Cpu",
  },
  {
    id: "dentists",
    title: "Elite Medical Board",
    description: "Led by MDS specialty doctors holding 12+ years of clinical excellence in orthodontics, surgery, and implants.",
    iconName: "Award",
  },
];

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "rct",
    title: "Painless Root Canal",
    description: "Save your damaged or infected natural tooth with computerized rotary endodontics in a single comfortable session.",
    detailedDescription: "Using specialized rotary files and digital apex locators, we perform precise, infection-control procedures that preserve your decay-compromised teeth without traditional dental fear.",
    iconName: "Activity",
    duration: "45 - 60 minutes",
    costEstimate: "₹2,500 - ₹4,500",
    benefits: [
      "Saves your natural tooth structure and chewing balance",
      "Immediate, permanent relief from severe tooth throbbing",
      "Completed in a single visit with our high-tech rotary motors",
      "98% success rate sealed with dental-grade bio-ceramic sealers"
    ]
  },
  {
    id: "implants",
    title: "Advanced Dental Implants",
    description: "Permanent dental replacements looking and functioning exactly like your lost natural teeth.",
    detailedDescription: "A durable titanium post anchored seamlessly into the jawbone, acting as a structural anchor for hand-crafted ceramic or zirconia crowns. Restores complete biting strength.",
    iconName: "Anchor",
    duration: "2 - 3 sittings",
    costEstimate: "₹18,000 - ₹35,000",
    benefits: [
      "Prevents bone loss and facial contour sagging",
      "No grinding or reshaping needed on adjacent teeth",
      "Restores 99% of original chewing and chewing capacity",
      "Lifetime warranty materials from globally certified manufacturers"
    ]
  },
  {
    id: "aligners",
    title: "Invisible Aligners & Braces",
    description: "Straighten your smile discreetly using comfortable, custom-designed, clear plastic aligners or metal braces.",
    detailedDescription: "Advanced clear orthodontic aligners (digital design) slowly align teeth or bites. Completely transparent and removable for eating, brushing, and official meetings.",
    iconName: "Grid",
    duration: "6 - 18 months",
    benefits: [
      "Virtually invisible aligner trays that don't hamper your confidence",
      "Removable for effortless eating, dental flossing, and key events",
      "Computerized 3D preview of your future smile before therapy sets in",
      "Expert MDS Orthodontists monitoring progress monthly"
    ]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Smile Makeover",
    description: "Advanced whitening, porcelain veneers, and cosmetic contouring for an aesthetic, celebrity-grade smile.",
    detailedDescription: "Our aesthetic designers fix chips, gaps, or severe color stains using ultra-thin porcelain veneers, composite bonding, and medical-grade power light whitening.",
    iconName: "Smile",
    duration: "1 - 2 sittings",
    benefits: [
      "Brightens teeth up to 8 shades in a single clinical whitening session",
      "Custom-crafted digital mockups to co-design your teeth length and shape",
      "Conceals chips, gaps, and intrinsic tetracycline stains perfectly",
      "Boosts absolute personal and professional communicative confidence"
    ]
  },
  {
    id: "pediatric",
    title: "Pediatric (Child) Dentistry",
    description: "Warm, non-intimidating milk tooth treatments, fluoride guards, and decay sealing in a child-friendly bay.",
    detailedDescription: "Formulated specifically to ensure your kids enjoy visiting their dentist. Preventative sealing, space retainers, and playful behavioral reinforcement.",
    iconName: "Heart",
    duration: "30 - 45 minutes",
    benefits: [
      "Zero-needle, painless techniques tailored specifically for kids",
      "Decay-preventative fluoridation and highly durable pit sealers",
      "Prevents alignment complications of permanent teeth early on",
      "Playful instruction of hygienic brushing values to children"
    ]
  },
  {
    id: "gum-therapy",
    title: "Gum Therapy & Laser Care",
    description: "Reverse gum bleeding, periodontitis, and bad breath using painless ultrasonic scalers and soft-tissue lasers.",
    detailedDescription: "Treat bleeding gums, loose teeth, or socket pain. Lasers dissolve infection painlessly with near-zero bleeding and rapid bio-healing stimulation.",
    iconName: "Healer",
    duration: "30 minutes per jaw",
    benefits: [
      "Eliminates bleeding and reduces tissue inflammation immediately",
      "Eradicates persistent bad breath (halitosis) causing bacteria",
      "Laser desensitization protects teeth against extreme cold sensitivity",
      "Stops gum receding to shield underlying bone and teeth roots"
    ]
  }
];

export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: "dr-patil",
    name: "Dr. Rohan Patil",
    title: "Senior Dentist & Implantologist",
    education: "BDS, MDS (Oral & Maxillofacial Implantology)",
    experience: "14+ Years of Clinical Practice",
    specialties: ["Dental Implants", "Painless Root Canals", "Surgical Extractions"],
    bio: "Dr. Rohan is highly regarded in Solapur for his exceptionally gentle hand. Having performed over 4,000 successful root canals and 1,200+ implants, he dedicates himself to painless modern techniques.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    availability: "10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM (Mon-Sat)"
  },
  {
    id: "dr-deshmukh",
    name: "Dr. Smita Deshmukh",
    title: "Consultant Orthodontist & Cosmetic Dentist",
    education: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "10+ Years of Aesthetic Excellence",
    specialties: ["Clear Invisible Aligners", "Smile Designing", "Pediatric Dental Care"],
    bio: "Dr. Smita loves crafting flawless smiles. A certified clear aligners specialist, she integrates artistic precision with technical brilliance to deliver comfortable, stunning smile corrections.",
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600",
    availability: "5:00 PM - 9:00 PM (Mon, Wed, Fri)"
  }
];

export const PATIENT_REVIEWS: Review[] = [
  {
    id: "1",
    patientName: "Vijay Shinde",
    rating: 5,
    comment: "I was extremely scared of root canals, but Dr. Rohan explained the process and completed it with absolutely zero pain. Best dental experience in Solapur! Cleanliness is extremely good.",
    date: "May 15, 2026",
    treatment: "Single-Sitting Root Canal",
    verified: true
  },
  {
    id: "2",
    patientName: "Anjali Kulkarni",
    rating: 5,
    comment: "Excellent service for my daughter's braces treatment. Dr. Smita is very friendly and patient. The price is reasonable compared to other clinics. Highly recommended Solapur Dental Care!",
    date: "April 28, 2026",
    treatment: "Invisible Clear Aligners",
    verified: true
  },
  {
    id: "3",
    patientName: "Mustafa Shaikh",
    rating: 5,
    comment: "Perfect hygiene standards. They opened new sterilized packets in front of me. I got teeth cleanings and a bridge placed. Extremely professional team.",
    date: "May 22, 2026",
    treatment: "Dental Bridge & Cleaning",
    verified: true
  },
  {
    id: "4",
    patientName: "Priyanjali Birajdar",
    rating: 5,
    comment: "My 6-year-old son had cavity pain. The clinic's environment is so calm and colorful, he didn't even cry during treatment. Special thanks for such sweet pediatric care.",
    date: "June 01, 2026",
    treatment: "Pediatric Cavity Sealing",
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "q1",
    category: "General",
    question: "How often should I visit Solapur Dental Care?",
    answer: "We recommend scheduling a dental checkup and cleanups once every 6 months to discover hidden decay or gum plaque accumulation before it turns painful."
  },
  {
    id: "q2",
    category: "Treatment",
    question: "Do you offer truly 'painless dentistry'?",
    answer: "Yes. We use advanced computer-designed localized anesthetics, high frequency ultrasonic micro-vibe scalers, and specialized dental lasers to keep treatments remarkably trauma-free."
  },
  {
    id: "q3",
    category: "Appointments",
    question: "Is booking an appointment on WhatsApp secure?",
    answer: "Yes, WhatsApp connects you instantly to our administrative assistant who will lock in your favorite clinical times slot and share coordinates directly."
  },
  {
    id: "q4",
    category: "Costs",
    question: "What are your modes of payment?",
    answer: "We accept all major UPI platforms (GPay, PhonePe, Paytm), cash, debit/credit cards, and also offer zero-cost EMI plans for advanced dental implants and orthodontic alignments."
  }
];
