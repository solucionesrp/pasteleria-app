import React, { useState } from 'react';
import ProductCard from '../home/ProductCard';
import ProductDetailModal from '../common/ProductDetailModal';
import pastelImg from '../../assets/img/pastel.JPG';

const products = [
  {
    id: 'past-1',
    title: 'Pastel de Chocolate',
    price: '$2.321',
    description: 'Delicioso pastel de chocolate con relleno de manjar.',
    image: pastelImg,
    type: 'pastel'
  },
];

const Pasteles = () => {
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
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Pasteles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-xl">Pronto agregaremos productos de Pasteles.</div>
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

export default Pasteles; 