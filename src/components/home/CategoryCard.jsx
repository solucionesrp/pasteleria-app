import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ image, title, path, animation }) => {
  // Ajuste de posición solo para Alfajores
  // const bgPosition = title === 'Alfajores' ? 'center 80%' : 'center'; // Eliminado porque no se usa

  return (
    <div className="group" data-aos={animation}>
      <div className="flex items-center justify-center h-[400px] bg-gray-100 rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="max-h-70 w-auto object-contain mx-auto rounded-lg shadow-md"
        />
      </div>
      <Link to={path} className="block w-full text-center bg-[#e99d64] hover:bg-[#d58954] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 group-hover:scale-105">
        {title}
      </Link>
    </div>
  );
};

export default CategoryCard;
