import React from 'react';
import CategoryCard from './CategoryCard';
import panBlanco from '../../assets/img/panMenu.jpg';
import paiImage from '../../assets/img/pie.jpg';
import tortaImage from '../../assets/img/torta.jpg';
import brownieImage from '../../assets/img/brown.jpg';

const categoriesData = [
  { title: 'Pan Blanco', image: panBlanco, path: '/pan-blanco' },
  { title: 'Pais', image: paiImage, path: '/pais' },
  { title: 'Tortas', image: tortaImage, path: '/tortas' },
  { title: 'Brownies', image: brownieImage, path: '/brownies' },
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="text-center text-[#e99d64] text-4xl mb-12">
        CATEGORÍAS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            path={category.path}
            animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
