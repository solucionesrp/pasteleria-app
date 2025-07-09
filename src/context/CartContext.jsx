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
      // Buscamos si el producto con el mismo ID y TAMAÑO ya existe
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size
      );

      if (existingItem) {
        // Si ya existe, actualizamos solo la cantidad
        return prevItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es un producto nuevo (o de un tamaño diferente), lo añadimos al carrito
        const newItem = { 
          ...product, 
          quantity, 
          size,
          // Creamos un ID único para el item en el carrito combinando producto y tamaño
          cartItemId: `${product.id}-${size}` 
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
