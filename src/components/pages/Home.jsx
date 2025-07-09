import React, { useState } from 'react';
import ShippingBar from '../common/ShippingBar';
import Hero from '../home/Hero';
import Certification from '../home/Certification';
import Categories from '../home/Categories';
import Favorites from '../home/Favorites';
import Benefits from '../home/Benefits';
import Info from '../home/Info';
import ProductDetailModal from '../common/ProductDetailModal';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <ShippingBar />
      <Hero />
      <Certification />
      <Categories />
      <Favorites onViewProduct={handleViewProduct} />
      <Benefits />
      <Info />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
