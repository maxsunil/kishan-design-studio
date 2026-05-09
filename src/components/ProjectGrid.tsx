import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'lumina',
    title: 'Lumina Skincare',
    category: 'Branding & Packaging',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ethos',
    title: 'Ethos Magazine',
    category: 'Editorial Design',
    image: 'https://images.unsplash.com/photo-1544924497-5f2bb35b13d2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'vanguard',
    title: 'Vanguard Tech',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'noir',
    title: 'Noir Coffee',
    category: 'Packaging Design',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=1200'
  }
];

const ProjectGrid: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-serif">Portfolio</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {projects.map((project, index) => (
          <Link 
            key={project.id} 
            to={`/project/${project.id}`} 
            className={`group block ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <div className="overflow-hidden bg-[#1a1a1a] aspect-[4/5]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
              <p className="text-xs uppercase tracking-widest text-white/40">{project.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;