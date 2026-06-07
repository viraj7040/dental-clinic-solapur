export interface DentalService {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  duration: string;
  costEstimate?: string;
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  education: string;
  experience: string;
  specialties: string[];
  bio: string;
  imageUrl: string;
  availability: string;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
  verified: boolean;
}

export interface ClinicFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
