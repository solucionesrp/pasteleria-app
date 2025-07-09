import React from 'react';

const ProductCard = ({ product, onViewProduct }) => {
  const { image, title, price } = product;
  return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full" data-aos="fade-up">
      <div className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
            <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
                <button 
          onClick={() => onViewProduct(product)}
          className="w-full border border-[#e99d64] text-[#e99d64] hover:bg-[#e99d64] hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 mt-auto">
          Ver Producto
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
