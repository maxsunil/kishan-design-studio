import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter">
          Let's create <br />
          <span className="italic">something</span> iconic.
        </h2>
        <p className="text-xl text-white/60 mb-16 font-light">
          Currently accepting new projects for Q3 2024.
        </p>
        <a 
          href="mailto:kishan@gmail.com" 
          className="text-2xl md:text-4xl font-serif border-b border-white/20 pb-4 hover:border-white transition-colors inline-block"
        >
          kishan@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;