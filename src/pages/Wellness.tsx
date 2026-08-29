import React from 'react';

export default function Wellness() {
  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">REST. RESET. REPEAT.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Find your balance in our sanctuary of wellness and tranquility.</p>
        </div>

        <div className="w-full h-[60vh] mb-20">
           <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" alt="Spa" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-serif mb-6">Massages & Treatments</h2>
            <div className="space-y-6">
              {[
                { name: 'Aurelia Signature Massage', time: '90 minutes', price: 5500 },
                { name: 'Deep Tissue Recovery', time: '60 minutes', price: 4500 },
                { name: 'Aromatherapy Glow', time: '60 minutes', price: 4000 }
              ].map(t => (
                <div key={t.name} className="flex justify-between items-end border-b border-gray-200 pb-4">
                  <div>
                    <h4 className="font-medium text-deep-charcoal">{t.name}</h4>
                    <span className="text-sm text-gray-500 font-light">{t.time}</span>
                  </div>
                  <span className="text-deep-charcoal">₹{t.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-6">Facilities</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white shadow-sm text-center">
                <span className="block font-medium mb-2">Fitness Center</span>
                <span className="text-xs text-gray-500">24 Hours</span>
              </div>
              <div className="p-6 bg-white shadow-sm text-center">
                <span className="block font-medium mb-2">Infinity Pool</span>
                <span className="text-xs text-gray-500">6 AM - 8 PM</span>
              </div>
              <div className="p-6 bg-white shadow-sm text-center">
                <span className="block font-medium mb-2">Sauna & Steam</span>
                <span className="text-xs text-gray-500">8 AM - 10 PM</span>
              </div>
              <div className="p-6 bg-white shadow-sm text-center">
                <span className="block font-medium mb-2">Yoga Studio</span>
                <span className="text-xs text-gray-500">Scheduled Classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}