import React, { useState } from 'react';
import ProductCard from '../home/ProductCard';
import ProductDetailModal from '../common/ProductDetailModal';
import kuchenfrutorojosImg from '../../assets/img/tartas/kuchenfrutosrojos.JPG';
import kuchenmanzanaImg from '../../assets/img/tartas/kuchenmanzana.JPG';
import kuchennuezImg from '../../assets/img/tartas/kuchennuez.JPG';
import piedelimonImg from '../../assets/img/tartas/piedelimon.JPG';


const products = [
  {
    id: 't-1',
    title: 'Kuchen frutos rojos',
    price12: 'Porciones 12: $13.000',
    description: 'Hojarasca, manjar y decorado con merengue.',
    image: kuchenfrutorojosImg
  },
  {
    id: 't-1',
    title: 'kuchen manzana',
    price12: 'Porciones 12: $13.000',
    description: 'Hojarasca, manjar y decorado con merengue.',
    image: kuchenmanzanaImg
  },
  {
    id: 't-1',
    title: 'kuchen Nuez',
    price12: 'Porciones 12: $13.000',
    description: 'Hojarasca, manjar y decorado con merengue.',
    image: kuchennuezImg
  },
  {
    id: 't-1',
    title: 'Pie de limon',
    price12: 'Porciones 12: $13.000',
    description: 'Hojarasca, manjar y decorado con merengue.',
    image: piedelimonImg
  },
];

const Tartas = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Tartas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-xl">Pronto agregaremos productos de Tartas.</div>
            ) : (
              products.map((product, index) => (
                <ProductCard 
                  key={index}
                  product={product}
                  onViewProduct={handleViewProduct}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Tartas; 