import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">HOSPITALITY, REIMAGINED.</h1>
        </div>
        
        <div className="prose prose-lg mx-auto font-light text-gray-700 space-y-8">
          <p className="text-xl italic text-center text-gray-500 mb-12">"Luxury isn't about excess. It's about how every detail makes you feel."</p>
          
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80" alt="Hotel Architecture" className="w-full h-80 object-cover mb-12" />
          
          <h2 className="font-serif text-2xl text-deep-charcoal mt-12">Our Story</h2>
          <p>Founded in 2026, Aurelia Grand was born from a vision to create a sanctuary of calm within the vibrant heart of Bhubaneswar. We believe that true hospitality lies in anticipating needs before they arise, and creating environments that inspire both rest and connection.</p>
          
          <h2 className="font-serif text-2xl text-deep-charcoal mt-12">Our Commitment</h2>
          <p>We are deeply committed to responsible luxury. From partnering with local artisans and farmers to implementing sustainable energy solutions throughout the property, we strive to make a positive impact on our community and environment.</p>
        </div>
      </div>
    </div>
  );
}