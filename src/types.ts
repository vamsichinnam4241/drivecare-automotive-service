export type PageType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-details' 
  | 'book' 
  | 'team' 
  | 'brands' 
  | 'pricing' 
  | 'gallery' 
  | 'testimonials' 
  | 'faqs' 
  | 'contact' 
  | 'privacy'
  | 'terms'
  | '404';

export interface Service {
  id: string;
  title: string;
  iconName: string; // Used to look up Lucide icons dynamically
  shortDesc: string;
  fullOverview: string;
  whatsIncluded: string[];
  benefits: string[];
  estimatedTime: string;
  basePrice: string;
  beforeImg: string;
  afterImg: string;
  faqs: { question: string; answer: string }[];
}

export interface Mechanic {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  certifications: string[];
  image: string;
  bio: string;
}

export interface Brand {
  name: string;
  country: string;
  logoUrl: string; // Or a fallback stylish circle with abbreviation
}

export interface PricingPlan {
  name: string;
  price: string;
  billing: string;
  popular: boolean;
  desc: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'garage' | 'repairs' | 'before-after' | 'deliveries' | 'workshop';
  imageUrl: string;
  beforeUrl?: string; // only for before-after
  afterUrl?: string; // only for before-after
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupOption: 'none' | 'pickup' | 'drop' | 'both';
  address?: string;
  notes?: string;
  status: 'pending' | 'confirmed';
}
