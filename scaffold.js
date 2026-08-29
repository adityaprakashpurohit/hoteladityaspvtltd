import fs from 'fs';
import path from 'path';

const dirs = [
  'src/components',
  'src/pages',
  'src/data',
  'src/context',
  'src/hooks',
  'src/utils',
  'src/types'
];

dirs.forEach(dir => {
  const p = path.join(process.cwd(), dir);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

const files = {
  'src/types/index.ts': `
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
`,
  'src/data/rooms.ts': `
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
`,
  'src/data/offers.ts': `
import { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: "stay-3-pay-2",
    title: "Stay 3, Pay 2",
    description: "Stay three nights in any of our rooms or suites and receive your third night with our compliments. Enjoy extended relaxation.",
    price: 17000,
    validity: "Valid until 31 December 2026",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
  },
  {
    id: "weekend-escape",
    title: "Weekend Escape",
    description: "Disconnect from the city. Includes luxury accommodation, daily breakfast for two, and a 60-minute spa treatment.",
    price: 14500,
    validity: "Valid on Friday, Saturday, and Sunday",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
  },
  {
    id: "romantic-getaway",
    title: "Romantic Getaway",
    description: "Celebrate love with a stay in a luxury suite, a private dinner on our rooftop terrace, and a chilled mock beverage on arrival.",
    price: 22000,
    validity: "Valid until 31 December 2026",
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=80"
  }
];
`,
  'src/context/BookingContext.tsx': `
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  selectedRoomId: string | null;
}

interface BookingContextType {
  booking: BookingState;
  updateBooking: (updates: Partial<BookingState>) => void;
}

const defaultState: BookingState = {
  checkIn: '',
  checkOut: '',
  adults: 2,
  children: 0,
  rooms: 1,
  selectedRoomId: null,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState<BookingState>(defaultState);

  const updateBooking = (updates: Partial<BookingState>) => {
    setBooking(prev => ({ ...prev, ...updates }));
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
};
`,
  'src/App.tsx': `
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
`,
  'src/pages/Home.tsx': `
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-warm-ivory min-h-screen">
      <div className="relative h-screen w-full">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Hotel Exterior"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-white/80 text-sm tracking-[0.2em] uppercase mb-4">A Five-Star Experience in the Heart of the City</span>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-medium mb-6">STAY BEAUTIFULLY.</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light mb-10">Where thoughtful design, exceptional service, and unforgettable moments come together.</p>
          <div className="flex gap-4">
            <Link to="/booking" className="bg-white text-deep-charcoal px-8 py-3 uppercase tracking-wider text-sm hover:bg-champagne-gold hover:text-white transition-colors duration-300">Book Your Stay</Link>
            <Link to="/rooms" className="border border-white text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-deep-charcoal transition-colors duration-300">Explore The Hotel</Link>
          </div>
          <div className="absolute bottom-8 text-white/70 text-sm tracking-wide">
            Bhubaneswar, Odisha · India
          </div>
        </div>
      </div>
    </div>
  );
}
`,
  'src/components/Navbar.tsx': `
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navBg = scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm text-deep-charcoal' : (isHome ? 'bg-transparent text-white' : 'bg-white text-deep-charcoal border-b border-gray-100');

  return (
    <header className={\`fixed top-0 w-full z-50 transition-all duration-500 \${navBg}\`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">Aurelia Grand</Link>
        
        <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <Link to="/rooms" className="hover:text-champagne-gold transition-colors">Stay</Link>
          <Link to="/dining" className="hover:text-champagne-gold transition-colors">Dining</Link>
          <Link to="/wellness" className="hover:text-champagne-gold transition-colors">Wellness</Link>
          <Link to="/experiences" className="hover:text-champagne-gold transition-colors">Experiences</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/booking" className={\`px-6 py-2 border text-sm uppercase tracking-wider transition-colors \${scrolled || !isHome ? 'border-deep-charcoal hover:bg-deep-charcoal hover:text-white' : 'border-white hover:bg-white hover:text-deep-charcoal'}\`}>
            Book Your Stay
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-deep-charcoal">
          <Link to="/rooms" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Stay</Link>
          <Link to="/dining" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif">Dining</Link>
          <Link to="/booking" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 bg-deep-charcoal text-white uppercase tracking-wider text-sm mt-8">Book Now</Link>
        </div>
      )}
    </header>
  );
}
`,
  'src/components/Footer.tsx': `
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl mb-4 tracking-widest uppercase">Aurelia Grand Hotel</h3>
          <p className="text-champagne-gold tracking-widest uppercase text-sm mb-6">Stay Beautifully.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Hotel</h4>
          <ul className="space-y-3 font-light text-gray-300">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
            <li><Link to="/dining" className="hover:text-white transition-colors">Dining</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Contact</h4>
          <ul className="space-y-3 font-light text-gray-300">
            <li>+91 90000 00000</li>
            <li>stay@aureliagrand.com</li>
            <li className="pt-4">Bhubaneswar, Odisha<br/>India</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Newsletter</h4>
          <div className="flex border-b border-gray-600 pb-2">
            <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500 font-light" />
            <button className="uppercase text-sm tracking-wider hover:text-champagne-gold transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 font-light tracking-wide">
        <p>© 2026 Aurelia Grand Hotel. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
`,
  'src/pages/Rooms.tsx': `
import React from 'react';
import { rooms } from '../data/rooms';
import { Link } from 'react-router-dom';

export default function Rooms() {
  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">YOUR ROOM. YOUR RETREAT.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Designed for deep rest, quiet mornings, and unforgettable stays.</p>
        </div>
        
        <div className="space-y-24">
          {rooms.map((room, idx) => (
            <div key={room.id} className={\`flex flex-col \${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center\`}>
              <div className="w-full md:w-1/2 overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-[60vh] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-12">
                <h2 className="text-3xl font-serif mb-4">{room.name}</h2>
                <div className="flex gap-6 text-sm text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-6">
                  <span>{room.size}</span>
                  <span>{room.guests} Guests</span>
                  <span>{room.bed}</span>
                </div>
                <p className="text-gray-600 font-light mb-8 leading-relaxed">{room.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-medium">₹{room.price.toLocaleString()} <span className="text-sm font-light text-gray-500">/ night</span></span>
                  <div className="flex gap-4">
                    <Link to={\`/rooms/\${room.id}\`} className="uppercase text-xs tracking-widest border-b border-deep-charcoal pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors">View Details</Link>
                    <Link to="/booking" className="uppercase text-xs tracking-widest bg-deep-charcoal text-white px-6 py-3 hover:bg-champagne-gold transition-colors">Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`,
  'src/pages/RoomDetails.tsx': `
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === id);

  if (!room) return <div className="pt-40 text-center text-2xl font-serif min-h-screen">Room not found</div>;

  return (
    <div className="pt-24 bg-warm-ivory min-h-screen pb-24">
      <div className="w-full h-[60vh] relative">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 bg-white p-8 md:p-16 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal text-center">{room.name}</h1>
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-12">
          {room.size} · {room.guests} Guests · {room.bed} · {room.view}
        </p>
        <div className="prose prose-lg mx-auto font-light text-gray-600 text-center mb-16">
          <p>{room.description}</p>
        </div>
        
        <div className="border-t border-gray-100 pt-16">
          <h3 className="text-2xl font-serif text-center mb-10">Room Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-600 font-light text-sm">
            {room.amenities.map(amenity => (
              <div key={amenity} className="p-4 border border-gray-100 bg-gray-50/50">{amenity}</div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-16">
          <p className="text-2xl font-medium mb-6">Starts from ₹{room.price.toLocaleString()} / night</p>
          <Link to="/booking" className="inline-block bg-deep-charcoal text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-champagne-gold transition-colors">Book This Room</Link>
        </div>
      </div>
    </div>
  );
}
`,
  'src/pages/Booking.tsx': `
import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';

export default function Booking() {
  const { booking, updateBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [guestDetails, setGuestDetails] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const calculateTotal = () => {
    if (!booking.selectedRoomId) return 0;
    const room = rooms.find(r => r.id === booking.selectedRoomId);
    return room ? room.price * 1 : 0; // Assuming 1 night for MVP simplicity
  };

  const handleConfirm = () => {
    alert('Booking Confirmed! Reservation: AGH-2026-48291');
    window.location.href = '/';
  };

  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-serif mb-10 text-center">COMPLETE YOUR STAY</h1>
        
        <div className="bg-white p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 1: Select Room</h2>
              <div className="space-y-4">
                {rooms.map(room => (
                  <div key={room.id} className={\`border p-4 flex justify-between items-center cursor-pointer transition-colors \${booking.selectedRoomId === room.id ? 'border-champagne-gold bg-champagne-gold/5' : 'hover:border-gray-300'}\`} onClick={() => updateBooking({ selectedRoomId: room.id })}>
                    <div>
                      <h3 className="font-serif text-lg">{room.name}</h3>
                      <p className="text-sm text-gray-500 font-light">₹{room.price.toLocaleString()} / night</p>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                      {booking.selectedRoomId === room.id && <div className="w-3 h-3 bg-champagne-gold rounded-full" />}
                    </div>
                  </div>
                ))}
              </div>
              <button disabled={!booking.selectedRoomId} onClick={() => setStep(2)} className="w-full bg-deep-charcoal text-white py-3 uppercase tracking-widest text-sm disabled:opacity-50 mt-6">Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 2: Guest Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold" value={guestDetails.firstName} onChange={e => setGuestDetails({...guestDetails, firstName: e.target.value})} />
                <input type="text" placeholder="Last Name" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold" value={guestDetails.lastName} onChange={e => setGuestDetails({...guestDetails, lastName: e.target.value})} />
                <input type="email" placeholder="Email Address" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold col-span-2" value={guestDetails.email} onChange={e => setGuestDetails({...guestDetails, email: e.target.value})} />
                <input type="tel" placeholder="Phone Number" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold col-span-2" value={guestDetails.phone} onChange={e => setGuestDetails({...guestDetails, phone: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="w-1/3 border border-deep-charcoal text-deep-charcoal py-3 uppercase tracking-widest text-sm">Back</button>
                <button disabled={!guestDetails.firstName || !guestDetails.email} onClick={() => setStep(3)} className="w-2/3 bg-deep-charcoal text-white py-3 uppercase tracking-widest text-sm disabled:opacity-50">Review Booking</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 3: Review</h2>
              <div className="bg-gray-50 p-6 space-y-4 font-light text-sm">
                <div className="flex justify-between">
                  <span>Room</span>
                  <span>{rooms.find(r => r.id === booking.selectedRoomId)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (18%)</span>
                  <span>₹{(calculateTotal() * 0.18).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{(calculateTotal() * 1.18).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(2)} className="w-1/3 border border-deep-charcoal text-deep-charcoal py-3 uppercase tracking-widest text-sm">Back</button>
                <button onClick={handleConfirm} className="w-2/3 bg-champagne-gold text-white py-3 uppercase tracking-widest text-sm">Confirm Reservation</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(process.cwd(), filepath), content.trim());
}
console.log('Scaffold complete.');
