import React from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
    </div>
  );
};

export default Home;