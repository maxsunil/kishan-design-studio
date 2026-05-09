import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          alt="Abstract background"
        />
      </div>
      
      <div className="relative z-20 text-center max-w-5xl">
        <h1 className="text-6xl md:text-[120px] font-serif leading-[0.9] tracking-tighter mb-8">
          Visual <br />
          <span className="italic ml-12 md:ml-24">Poetry</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-light leading-relaxed">
          An independent design studio crafting timeless brand identities and digital experiences for the modern era.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-white" />
      </div>
    </section>
  );
};

export default Hero;