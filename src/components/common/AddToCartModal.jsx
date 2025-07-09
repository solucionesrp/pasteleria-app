import React from 'react';
import { Link } from 'react-router-dom';

const AddToCartModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md text-center p-6 relative" data-aos="zoom-in">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl">&times;</button>

        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Artículo Agregado al Carrito!</h2>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded-lg" />
          <p className="text-lg font-semibold text-gray-800">{product.title}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/cart" onClick={onClose} className="w-full bg-[#44646c] hover:bg-[#3a565d] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 no-underline">
            Ver Carrito
          </Link>
          <button className="w-full bg-[#e99d64] hover:bg-[#d58954] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300">
            Pagar Pedido
          </button>
          <Link to="/" onClick={onClose} className="text-gray-600 hover:text-gray-900 font-semibold mt-2 no-underline">
            Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
