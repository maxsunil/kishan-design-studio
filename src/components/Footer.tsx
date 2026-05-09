import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
          © 2024 Kishan Design Studio
        </div>
        <div className="flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="https://www.instagram.com/_kishan_s" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Instagram</a>
          <a href="#" className="hover:text-white/50 transition-colors">Behance</a>
          <a href="#" className="hover:text-white/50 transition-colors">LinkedIn</a>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
          London / Global
        </div>
      </div>
    </footer>
  );
};

export default Footer;