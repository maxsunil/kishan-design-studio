import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity">
          KISHAN
        </Link>
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em] font-medium">
          <Link to="/" className="hover:text-white/50 transition-colors">Work</Link>
          <a href="#about" className="hover:text-white/50 transition-colors">About</a>
          <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
        </div>
        <button className="text-xs uppercase tracking-[0.2em] border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">
          Inquiry
        </button>
      </div>
    </nav>
  );
};

export default Navbar;