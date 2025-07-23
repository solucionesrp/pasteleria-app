import React from 'react';
import bgPanes from '../../assets/img/bellaCarrusel.png';

const Hero = () => {
  return (
    <section className="relative h-[720px] bg-cover bg-top" style={{ backgroundImage: `url(${bgPanes})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Pastelería Bella</h1>
        <p className="text-xl mb-8">El sabor de lo artesanal, en cada bocado.</p>
        <button className="bg-[#e99d64] hover:bg-[#d58954] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
          Ver Productos
        </button>
      </div>
    </section>
  );
};

export default Hero;
