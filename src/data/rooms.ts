import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King",
    price: 8500,
    size: "42 m²",
    guests: 2,
    bed: "King Bed",
    view: "City View",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    description: "Our Deluxe King rooms offer a serene escape with contemporary design, featuring floor-to-ceiling windows, a plush king-size bed, and an elegant marble bathroom equipped with a rain shower.",
    amenities: ["Free Wi-Fi", "Rain Shower", "Smart TV", "Minibar", "Coffee Machine", "Room Service", "Air Conditioning"]
  },
  {
    id: "premier-room",
    name: "Premier Room",
    price: 11500,
    size: "55 m²",
    guests: 2,
    bed: "King Bed",
    view: "Premium City View",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    description: "Experience heightened luxury in our Premier Rooms. With a dedicated lounge area and elevated views of the city skyline, these rooms are perfect for both relaxation and business.",
    amenities: ["Free Wi-Fi", "Rain Shower", "Bathtub", "Smart TV", "Minibar", "Espresso Machine", "Room Service", "Lounge Area"]
  },
  {
    id: "aurelia-suite",
    name: "Aurelia Suite",
    price: 18500,
    size: "82 m²",
    guests: 3,
    bed: "King Bedroom",
    view: "Panoramic View",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
    description: "The Aurelia Suite embodies our philosophy of expansive luxury. Featuring a separate living room, a master bedroom, and breathtaking panoramic views, it is designed for unforgettable stays.",
    amenities: ["Free Wi-Fi", "Separate Living Room", "Rain Shower & Tub", "Smart TV", "Premium Minibar", "Nespresso", "24/7 Butler Service"]
  },
  {
    id: "grand-presidential",
    name: "Grand Presidential Suite",
    price: 35000,
    size: "145 m²",
    guests: 4,
    bed: "King & Twin",
    view: "Panoramic Skyline View",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
    description: "The pinnacle of urban luxury. The Grand Presidential Suite offers unparalleled space, a private dining area, an executive lounge, and dedicated butler service for our most discerning guests.",
    amenities: ["Private Lounge", "Dining Area", "Butler Service", "Free Wi-Fi", "Luxury Bath Amenities", "Home Theater", "Premium Bar"]
  }
];