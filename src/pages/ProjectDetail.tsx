import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-fade-in">
      <Link to="/" className="text-xs uppercase tracking-widest text-white/40 hover:text-white mb-12 inline-block">
        ← Back to Work
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 capitalize">{id?.replace('-', ' ')}</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
            A comprehensive visual identity system designed to elevate the brand's presence in a competitive market. We focused on minimalist aesthetics and high-end typography to convey a sense of luxury and reliability.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Client</h4>
              <p className="font-serif">{id?.toUpperCase()} Global</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Year</h4>
              <p className="font-serif">2024</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] aspect-square">
           <img 
            src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200" 
            alt="Project detail" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      <div className="space-y-12">
        <img 
          src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=2000" 
          alt="Process" 
          className="w-full aspect-video object-cover"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200" 
            alt="Detail 1" 
            className="w-full aspect-square object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=1200" 
            alt="Detail 2" 
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;