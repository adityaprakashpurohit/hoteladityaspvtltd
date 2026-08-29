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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">Aurelia Grand</Link>
        
        <nav className="hidden lg:flex gap-6 text-xs tracking-widest uppercase font-medium">
          <Link to="/rooms" className="hover:text-champagne-gold transition-colors">Stay</Link>
          <Link to="/dining" className="hover:text-champagne-gold transition-colors">Dining</Link>
          <Link to="/wellness" className="hover:text-champagne-gold transition-colors">Wellness</Link>
          <Link to="/experiences" className="hover:text-champagne-gold transition-colors">Experiences</Link>
          <Link to="/offers" className="hover:text-champagne-gold transition-colors">Offers</Link>
          <Link to="/gallery" className="hover:text-champagne-gold transition-colors">Gallery</Link>
          <Link to="/about" className="hover:text-champagne-gold transition-colors">About</Link>
          <Link to="/contact" className="hover:text-champagne-gold transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/booking" className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${scrolled || !isHome ? 'border-deep-charcoal hover:bg-deep-charcoal hover:text-white' : 'border-white hover:bg-white hover:text-deep-charcoal'}`}>
            Book Your Stay
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 flex flex-col items-center justify-start pt-12 space-y-6 text-deep-charcoal overflow-y-auto pb-24">
          <Link to="/rooms" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Stay</Link>
          <Link to="/dining" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Dining</Link>
          <Link to="/wellness" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Wellness</Link>
          <Link to="/experiences" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Experiences</Link>
          <Link to="/offers" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Offers</Link>
          <Link to="/gallery" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Gallery</Link>
          <Link to="/about" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">About</Link>
          <Link to="/contact" onClick={closeMenu} className="text-xl font-serif uppercase tracking-widest">Contact</Link>
          <Link to="/booking" onClick={closeMenu} className="px-8 py-3 bg-deep-charcoal text-white uppercase tracking-wider text-sm mt-4">Book Now</Link>
        </div>
      )}
    </header>
  );
}