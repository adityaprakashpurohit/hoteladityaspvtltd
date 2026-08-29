export type DietaryTag = 'VEG' | 'CHEF_SPECIAL' | 'SPICY' | 'NEW' | 'GLUTEN_FREE' | 'SIGNATURE' | 'HALAL';

export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  description: string;
  price: number;
  formattedPrice?: string;
  category: 'starters' | 'mains' | 'signatures' | 'desserts' | 'beverages';
  tags?: DietaryTag[];
  image?: string;
  imageAlt?: string;
  winePairing?: string;
  calories?: string;
  allergens?: string[];
  chefNote?: string;
}

export type PageLayoutType = 
  | 'cover' 
  | 'starters-left' 
  | 'starters-right' 
  | 'mains-left' 
  | 'mains-right' 
  | 'signatures-left' 
  | 'signatures-right' 
  | 'desserts-left' 
  | 'desserts-right' 
  | 'beverages-left' 
  | 'beverages-right' 
  | 'back-cover';

export interface MenuPageData {
  pageNumber: number;
  title: string;
  subtitle?: string;
  sectionCategory?: string;
  layoutType: PageLayoutType;
  items?: MenuItem[];
  featuredItem?: MenuItem;
  heroImage?: string;
  heroImageCaption?: string;
  editorialQuote?: string;
  chefNote?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Main Dining Room' | 'Private Wine Cellar' | 'Chef’s Interactive Counter' | 'Veranda Garden Terrace';
  occasion?: 'None' | 'Anniversary' | 'Birthday Celebration' | 'Business Dining' | 'Romantic Evening' | 'Epicurean Tasting';
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  source: string;
  year?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Atmosphere' | 'Kitchen' | 'Cellar' | 'Culinary Art';
  image: string;
  caption: string;
}
