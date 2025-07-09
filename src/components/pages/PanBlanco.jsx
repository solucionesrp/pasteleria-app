import React, { useState } from 'react';
import ProductCard from '../home/ProductCard';
import ProductDetailModal from '../common/ProductDetailModal';
import bgPanes from '../../assets/img/panMenu.jpg'; // Usaremos una imagen de marcador de posición

const products = [
  { id: 'pb-1', title: 'Baguette Clásico', price: '$2.500', image: bgPanes },
  { id: 'pb-2', title: 'Pan de Molde', price: '$3.200', image: bgPanes },
  { id: 'pb-3', title: 'Ciabatta', price: '$2.800', image: bgPanes },
  { id: 'pb-4', title: 'Panecillos Suaves', price: '$2.100', image: bgPanes },
];

const PanBlanco = () => {
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
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Pan Blanco</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                product={product}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default PanBlanco;
