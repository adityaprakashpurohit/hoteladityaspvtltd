export interface Room {
  id: string;
  name: string;
  price: number;
  size: string;
  guests: number;
  bed: string;
  view: string;
  image: string;
  description: string;
  amenities: string[];
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  validity: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  hours: string;
  cuisine: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
  image: string;
}