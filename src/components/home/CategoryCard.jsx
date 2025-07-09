import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ image, title, path, animation }) => {
  return (
    <div className="group" data-aos={animation}>
      <div className="relative h-[400px] bg-cover bg-center rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50"></div>
      </div>
      <Link to={path} className="block w-full text-center bg-[#e99d64] hover:bg-[#d58954] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 group-hover:scale-105">
        {title}
      </Link>
    </div>
  );
};

export default CategoryCard;
