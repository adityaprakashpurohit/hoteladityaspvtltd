import React from 'react';
import { experiences } from '../data/experiences';

export default function Experiences() {
  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">CURATED EXPERIENCES.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Discover the essence of our destination through carefully crafted moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map(exp => (
            <div key={exp.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden h-64">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4 text-xs tracking-widest uppercase text-gray-500">
                  <span>{exp.duration}</span>
                  <span>From ₹{exp.price}</span>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-deep-charcoal">{exp.title}</h3>
                <p className="text-gray-600 font-light mb-6 text-sm">{exp.description}</p>
                <button className="text-xs uppercase tracking-widest text-champagne-gold border-b border-champagne-gold pb-1 hover:text-deep-charcoal hover:border-deep-charcoal transition-colors">Enquire Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
