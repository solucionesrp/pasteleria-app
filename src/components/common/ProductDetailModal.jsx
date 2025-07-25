import React, { useState } from 'react';
import { useCart } from '../../context/CartContext'; // Importar el hook del carrito
import AddToCartModal from './AddToCartModal';

const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useCart(); // Obtener la función para añadir al carrito
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('10 Personas');
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!product) return null;

  const handleIncreaseQuantity = () => setQuantity(prev => prev + 1);
  const handleDecreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setShowConfirmation(true);
  };

  const handleCloseAll = () => {
    setShowConfirmation(false); // Oculta la confirmación
    onClose(); // Cierra el modal de detalles por completo
  };

  // Si se debe mostrar la confirmación, renderiza solo el modal de "Añadir al Carrito"
  if (showConfirmation) {
    return <AddToCartModal product={product} onClose={handleCloseAll} />;
  }

  // Elegir el precio según el tipo de producto
  let price = '';
  if (product.price12 && !product.price10 && !product.price30) {
    price = product.price12;
  } else if (product.price && !product.price10 && !product.price30) {
    price = product.price;
  } else if (selectedSize === '10 Personas') {
    price = product.price10;
  } else {
    price = product.price30;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl relative flex flex-col md:flex-row min-h-[400px]" data-aos="fade-up">
        <button onClick={onClose} className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-800 text-3xl z-10">&times;</button>
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center text-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
          {product.description && (
            <p className="text-md text-gray-600 mb-4">{product.description}</p>
          )}
          <p className="text-xl md:text-2xl font-semibold text-[#e99d64] mb-4">{price}</p>
          {product.price12 && !product.price10 && !product.price30 ? (
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Porciones:</h3>
              <div className="flex gap-2">
                <span className="w-32 flex-1 border font-semibold py-2 px-4 rounded-lg bg-[#e99d64] text-white border-[#e99d64] text-center">12 Porciones</span>
              </div>
            </div>
          ) : product.price && !product.price10 && !product.price30 ? (
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Unidades:</h3>
              <div className="flex gap-2">
                <span className="w-32 flex-1 border font-semibold py-2 px-4 rounded-lg bg-[#e99d64] text-white border-[#e99d64] text-center">Precio Unitario</span>
              </div>
            </div>
          ) : (
          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Tamaño:</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedSize('10 Personas')}
                className={`w-32 flex-1 border font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${selectedSize === '10 Personas' ? 'bg-[#e99d64] text-white border-[#e99d64]' : 'border-gray-300 text-gray-500 hover:bg-gray-200'}`}>
                10 Personas
              </button>
              <button 
                onClick={() => setSelectedSize('30 Personas')}
                className={`w-32 flex-1 border font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${selectedSize === '30 Personas' ? 'bg-[#e99d64] text-white border-[#e99d64]' : 'border-gray-300 text-gray-500 hover:bg-gray-200'}`}>
                30 Personas
              </button>
            </div>
          </div>
          )}
          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Cantidad:</h3>
            <div className="flex items-center gap-4">
              <button onClick={handleDecreaseQuantity} className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition-colors">-</button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button onClick={handleIncreaseQuantity} className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition-colors">+</button>
            </div>
          </div>
          <p className="text-sm text-green-600 font-semibold mb-6">En existencia</p>
          <button onClick={handleAddToCart} className="w-full bg-[#44646c] hover:bg-[#3a565d] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-auto">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
