import React, { useState } from 'react';
import { restaurants } from '../data/restaurants';

export default function Dining() {
  const [reservationModal, setReservationModal] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">TASTE THE MOMENT.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Exceptional dining experiences crafted with passion and precision.</p>
        </div>

        <div className="space-y-24">
          {restaurants.map((restaurant, idx) => (
            <div key={restaurant.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 overflow-hidden">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-[50vh] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-12">
                <h2 className="text-3xl font-serif mb-4">{restaurant.name}</h2>
                <div className="flex gap-6 text-sm text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-6">
                  <span>{restaurant.cuisine}</span>
                  <span>{restaurant.hours}</span>
                </div>
                <p className="text-gray-600 font-light mb-8 leading-relaxed">{restaurant.description}</p>
                <button onClick={() => setReservationModal(true)} className="uppercase text-xs tracking-widest border border-deep-charcoal text-deep-charcoal px-8 py-3 hover:bg-deep-charcoal hover:text-white transition-colors">Reserve Table</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {reservationModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 max-w-md w-full relative">
            <button onClick={() => setReservationModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
            <h3 className="text-2xl font-serif mb-6 text-center">Reserve a Table</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
              <input type="email" placeholder="Email" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
              <select className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none">
                {restaurants.map(r => <option key={r.id}>{r.name}</option>)}
              </select>
              <div className="flex gap-4">
                <input type="date" className="w-1/2 border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <input type="time" className="w-1/2 border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
              </div>
              <input type="number" placeholder="Number of Guests" min="1" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
              <button onClick={() => {
                alert('TABLE REQUEST RECEIVED. We will confirm shortly.');
                setReservationModal(false);
              }} className="w-full bg-deep-charcoal text-white py-4 uppercase tracking-widest text-sm mt-4">Reserve Table</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}