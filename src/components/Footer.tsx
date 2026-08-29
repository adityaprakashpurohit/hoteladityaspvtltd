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