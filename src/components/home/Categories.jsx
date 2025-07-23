import React from 'react';
import CategoryCard from './CategoryCard';
import tortasImage from '../../assets/img/tortas.JPG';
import tartasImage from '../../assets/img/tartas.JPG';
import alfajoresImage from '../../assets/img/alfajores.JPG';
import pastelImage from '../../assets/img/pastel.JPG';

const categoriesData = [
  { title: 'Tortas', image: tortasImage, path: '/tortas' },
  { title: 'Tartas', image: tartasImage, path: '/tartas' },
  { title: 'Alfajores', image: alfajoresImage, path: '/alfajores' },
  { title: 'Pasteles', image: pastelImage, path: '/pasteles' },
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
