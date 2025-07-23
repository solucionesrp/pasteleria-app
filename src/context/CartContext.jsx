import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito de forma sencilla
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};

// 2. Crear el Proveedor del contexto, que contendrá el estado y las funciones
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Este console.log se ejecutará cada vez que cartItems cambie, mostrando el estado actualizado.
    console.log('Carrito actualizado:', cartItems);
  }, [cartItems]);

  const addToCart = (product, quantity, size) => {
    setCartItems(prevItems => {
      // Si es tarta (price12 y sin size), no le agregues size
      const isTarta = product.price12 && !product.price10 && !product.price30;
      // Si es alfajor (price fijo), no le agregues size
      const isAlfajor = product.price && !product.price10 && !product.price30;
      const cartItemId = `${product.id}-${product.title}-${isTarta ? '12porciones' : isAlfajor ? 'preciounitario' : size}`;
      
      // Buscamos si el producto con el mismo cartItemId ya existe
      const existingItem = prevItems.find(item => item.cartItemId === cartItemId);

      if (existingItem) {
        // Si ya existe, actualizamos solo la cantidad
        return prevItems.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es un producto nuevo, lo añadimos al carrito
        const newItem = { 
          ...product, 
          quantity, 
          ...(isTarta || isAlfajor ? {} : { size }),
          cartItemId
        };
        return [...prevItems, newItem];
      }
    });
    
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return; // No permitir cantidades menores a 1

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Aquí se añadirán más funciones (eliminar, actualizar cantidad, etc.)

  // El valor que se compartirá con los componentes hijos
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
