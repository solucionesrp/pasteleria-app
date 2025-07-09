import React from 'react';

const Productos = () => {
  const productos = [
    {
      id: 'prod-1',
      nombre: 'Tarta de Chocolate',
      precio: '$14.990',
      imagen: 'https://via.placeholder.com/300x200',
      descripcion: 'Deliciosa tarta de chocolate con cobertura de chocolate belga'
    },
    {
      id: 'prod-2',
      nombre: 'Croissant',
      precio: '$1.990',
      imagen: 'https://via.placeholder.com/300x200',
      descripcion: 'Croissant crujiente y esponjoso'
    },
    {
      id: 'prod-3',
      nombre: 'Tarta de Manzana',
      precio: '$11.990',
      imagen: 'https://via.placeholder.com/300x200',
      descripcion: 'Tarta casera de manzana con cobertura crujiente'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Nuestros Productos
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={producto.imagen} alt={producto.nombre} className="object-cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{producto.nombre}</h3>
                  <p className="mt-1 text-sm text-gray-500">{producto.descripcion}</p>
                  <p className="mt-2 text-xl font-bold text-indigo-600">{producto.precio}</p>
                  <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
