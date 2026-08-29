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