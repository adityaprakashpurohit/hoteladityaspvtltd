import React from 'react';
import { offers } from '../data/offers';
import { Link } from 'react-router-dom';

export default function Offers() {
  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">EXCLUSIVE OFFERS.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Elevate your stay with our thoughtfully designed packages.</p>
        </div>

        <div className="space-y-16">
          {offers.map(offer => (
            <div key={offer.id} className="flex flex-col md:flex-row bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs tracking-widest uppercase text-champagne-gold mb-4">{offer.validity}</span>
                <h3 className="text-3xl font-serif mb-4 text-deep-charcoal">{offer.title}</h3>
                <p className="text-gray-600 font-light mb-8">{offer.description}</p>
                <div className="mt-auto">
                  <Link to="/booking" className="inline-block uppercase text-xs tracking-widest bg-deep-charcoal text-white px-8 py-3 hover:bg-champagne-gold transition-colors">Book Offer</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
