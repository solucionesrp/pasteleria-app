import React from 'react';
import ProductCard from './ProductCard';
import pieLimon from '../../assets/img/favoritos/pieLimon.JPG';
import cheesecake from '../../assets/img/favoritos/cheesecake.JPG';
import galletas from '../../assets/img/favoritos/galletas.JPG';
import tortaChocolate from '../../assets/img/favoritos/tortaChoco.JPG';

const favoriteProducts = [
  { id: 'fav-1', title: 'Pie de Limón', price: '$2.990', image: pieLimon },
  { id: 'fav-2', title: 'Cheesecake', price: '$3.590', image: cheesecake },
  { id: 'fav-3', title: 'Galletas', price: '$4.290', image: galletas },
  { id: 'fav-4', title: 'Torta de Chocolate', price: '$3.990', image: tortaChocolate },
];

const Favorites = ({ onViewProduct }) => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">FAVORITOS BELLA</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {favoriteProducts.map((product, index) => (
            <ProductCard key={index} product={product} onViewProduct={onViewProduct} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#e99d64] hover:bg-[#d58954] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
            Ver Todo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
