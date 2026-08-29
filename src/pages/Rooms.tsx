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
            <div key={room.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
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
                    <Link to={`/rooms/${room.id}`} className="uppercase text-xs tracking-widest border-b border-deep-charcoal pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors">View Details</Link>
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