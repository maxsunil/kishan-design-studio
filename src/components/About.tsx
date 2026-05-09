import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
            alt="Designer portrait" 
            className="w-full aspect-[3/4] object-cover grayscale"
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-white/10 hidden md:block" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 block">The Studio</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            We believe in the power of <span className="italic">understated</span> elegance.
          </h2>
          <div className="space-y-6 text-white/60 leading-relaxed font-light">
            <p>
              Kishan is a multidisciplinary design studio based in London. We partner with visionary brands to create visual identities that resonate on a deeper level.
            </p>
            <p>
              Our approach is rooted in minimalism, typography, and a relentless pursuit of clarity. We strip away the noise to reveal the essence of your story.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-medium mb-2">Services</h4>
              <ul className="text-xs uppercase tracking-widest text-white/40 space-y-2">
                <li>Brand Identity</li>
                <li>Art Direction</li>
                <li>Editorial Design</li>
                <li>Digital Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Awards</h4>
              <ul className="text-xs uppercase tracking-widest text-white/40 space-y-2">
                <li>Awwwards SOTD</li>
                <li>Behance Featured</li>
                <li>Adobe Design Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;