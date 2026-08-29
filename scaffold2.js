import fs from 'fs';
import path from 'path';

const files = {
  'src/data/restaurants.ts': `
import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: "aurelia",
    name: "Aurelia",
    description: "Contemporary cuisine inspired by seasonal ingredients and local flavours. Our all-day dining restaurant offers an elegant atmosphere for breakfast, lunch, and dinner.",
    hours: "6:30 AM - 11:00 PM",
    cuisine: "Contemporary International",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
  },
  {
    id: "the-orchard",
    name: "The Orchard",
    description: "An intimate dining experience celebrating modern Indian cuisine. Discover rich flavors presented with avant-garde culinary techniques.",
    hours: "7:00 PM - 11:30 PM",
    cuisine: "Modern Indian",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80"
  },
  {
    id: "skyline-bar",
    name: "Skyline Bar",
    description: "Signature cocktails, sunset views, and late-night conversations. Located on the rooftop, offering panoramic views of the city.",
    hours: "5:00 PM - 1:00 AM",
    cuisine: "Cocktails & Tapas",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80"
  },
  {
    id: "the-patisserie",
    name: "The Patisserie",
    description: "Fresh pastries, artisan coffee, and elegant afternoon treats. Perfect for a quick morning coffee or a leisurely high tea.",
    hours: "8:00 AM - 8:00 PM",
    cuisine: "Bakery & Café",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80"
  }
];
`,
  'src/data/experiences.ts': `
import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: "city-discovery",
    title: "City Discovery",
    duration: "4 Hours",
    description: "Explore local landmarks with a private guide. Dive deep into the history and culture of Bhubaneswar.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80"
  },
  {
    id: "sunset-dinner",
    title: "Sunset Dinner",
    duration: "3 Hours",
    description: "A private rooftop dining experience for two, featuring a custom 5-course menu curated by our executive chef.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1529543544282-ea669408eec9?auto=format&fit=crop&q=80"
  },
  {
    id: "wellness-retreat",
    title: "Couples Retreat",
    duration: "Full Day",
    description: "A romantic day including a private spa experience, afternoon tea, and a candlelit dinner.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80"
  }
];
`,
  'src/pages/Dining.tsx': `
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
            <div key={restaurant.id} className={\`flex flex-col \${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center\`}>
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
`,
  'src/pages/Wellness.tsx': `
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
`,
  'src/pages/About.tsx': `
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
`,
  'src/pages/Contact.tsx': `
import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">WE'RE HERE TO HELP.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Get in touch with us for inquiries, special requests, or assistance with your reservation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif mb-8">Contact Information</h2>
            <div className="space-y-6 font-light text-gray-600">
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Address</h4>
                <p>Aurelia Grand Hotel<br/>123 Luxury Avenue<br/>Bhubaneswar, Odisha<br/>India</p>
              </div>
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Phone</h4>
                <p>+91 90000 00000</p>
              </div>
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Email</h4>
                <p>stay@aureliagrand.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-serif mb-4 text-green-700">Message Sent</h3>
                <p className="font-light text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <input required type="text" placeholder="Your Name" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <input required type="email" placeholder="Your Email" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <input type="text" placeholder="Subject" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <textarea required placeholder="Message" rows={5} className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-deep-charcoal text-white py-4 uppercase tracking-widest text-sm">Send Message</button>
              </form>
            )}
          </div>
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
console.log('Scaffold 2 complete.');
