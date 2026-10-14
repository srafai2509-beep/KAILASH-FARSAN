export type ProductCategory = 
  | 'all'
  | 'morning-farsan'
  | 'sweets'
  | 'namkeen'
  | 'festival-boxes';

export interface ProductWeightOption {
  weight: string; // e.g. "250g", "500g", "1kg"
  price: number;
}

export interface Product {
  id: string;
  name: string;
  gujaratiName: string;
  category: 'morning-farsan' | 'sweets' | 'namkeen' | 'festival-boxes';
  shortDesc: string;
  longDesc: string;
  weights: ProductWeightOption[];
  defaultWeight: string;
  image: string;
  badge?: string;
  isBestSeller?: boolean;
  ingredients: string[];
  shelfLife: string;
  accompaniments?: string;
  cookingMedium: 'Pure Singtel (Groundnut Oil)' | '100% Desi Cow Ghee' | 'Premium Roasted';
  isJainAvailable: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  gujaratiName: string;
  weight: string;
  unitPrice: number;
  quantity: number;
  image: string;
  cookingMedium: string;
}

export interface Review {
  id: string;
  author: string;
  roleOrLocation: string;
  rating: number;
  date: string;
  reviewText: string;
  highlightItem: string;
  isVerifiedCustomer: boolean;
}

export interface FestivalOffer {
  id: string;
  festivalName: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  startingPrice: number;
  tag: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  occasion: string;
  estimatedGuests: string;
  eventDate: string;
  notes: string;
}
