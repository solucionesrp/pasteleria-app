import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Importar el hook del carrito

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Obtener todo lo necesario del contexto
  const subtotal = cartItems.reduce((sum, item) => {
    let priceStr = '';
    if (item.price12 && !item.size) priceStr = item.price12;
    else if (item.price && !item.price10 && !item.price30) priceStr = item.price;
    else if (item.size === '10 Personas') priceStr = item.price10;
    else if (item.size === '30 Personas') priceStr = item.price30;
    else priceStr = item.price10 || item.price30 || '';
    // Si el string contiene ':', toma solo la parte después de los dos puntos
    if (priceStr.includes(':')) priceStr = priceStr.split(':')[1].trim();
    // Elimina solo el símbolo $ y los puntos (separador de miles)
    const price = priceStr ? parseInt(priceStr.replace(/\$/g, '').replace(/\./g, ''), 10) : 0;
    return sum + price * item.quantity;
  }, 0);

  const shipping = 2500; // Costo de envío en CLP
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-down">Tu Carrito de Compras</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-lg shadow-md" data-aos="fade-up">
            <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío.</p>
            <Link to="/productos" className="bg-[#e99d64] hover:bg-[#d58954] text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Ir a la Tienda
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna de productos - ocupa más espacio */}
            <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-6" data-aos="fade-right">
              <h2 className="text-2xl font-semibold mb-6">Artículos en tu carrito</h2>
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.cartItemId} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-6 last:border-b-0">
                    <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded-lg shadow-sm" />
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                      {item.price12 && !item.size ? (
                        <>
                          <p className="text-sm text-gray-500">Porciones: 12</p>
                          <p className="text-md font-semibold text-[#e99d64]">{(() => {
                            let priceStr = item.price12;
                            if (priceStr.includes(':')) priceStr = priceStr.split(':')[1].trim();
                            return priceStr;
                          })()}</p>
                        </>
                      ) : item.price && !item.price10 && !item.price30 ? (
                        <>
                          <p className="text-sm text-gray-500">Precio Unitario: {item.price}</p>
                        </>
                      ) : (
                        <>
                      <p className="text-sm text-gray-500">Tamaño: {item.size}</p>
                      <p className="text-md font-semibold text-[#e99d64]">
                        {item.size === '10 Personas' ? item.price10 : item.size === '30 Personas' ? item.price30 : item.price10 || item.price30 || '$0'}
                      </p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition-colors">-</button>
                      <span className="font-semibold text-lg">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded-lg hover:bg-gray-300 transition-colors">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.cartItemId)} className="text-red-500 hover:text-red-700 font-semibold text-2xl ml-4">&times;</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna de resumen - ocupa menos espacio */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6 h-fit" data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-6">Resumen del Pedido</h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-800">${subtotal.toLocaleString('es-CL')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold text-gray-800">${shipping.toLocaleString('es-CL')}</span>
                </div>
                <div className="border-t my-3"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toLocaleString('es-CL')}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <button className="w-full bg-[#44646c] hover:bg-[#3a565d] text-white font-bold py-3 rounded-lg transition-colors text-lg">
                  Proceder al Pago
                </button>
                <Link to="/" className="w-full text-center bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-lg">
                  Seguir Comprando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
