import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="">
              <img src={logo} alt="Cafeteria & Pasteleria Bella" className="h-20 w-20 rounded-full" />
            </Link>
          </div>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <Link to="/" className="text-[#e99d64] hover:text-[#d58954] px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>
            <Link to="/productos" className="text-[#e99d64] hover:text-[#d58954] px-3 py-2 rounded-md text-sm font-medium">
              Productos
            </Link>
            <Link to="/nosotros" className="text-[#e99d64] hover:text-[#d58954] px-3 py-2 rounded-md text-sm font-medium">
              Nosotros
            </Link>
          </div>

          {/* Iconos de la derecha */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-[#e99d64] hover:text-[#d58954]">
              <FaSearch className="h-5 w-5" />
            </button>
            <button className="p-2 text-[#e99d64] hover:text-[#d58954]">
              <FaUser className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-[#e99d64] hover:text-[#d58954]">
              <FaShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          {/* Botón de hamburguesa para móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-[#e99d64] hover:text-[#d58954]">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="text-[#e99d64] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </Link>
            <Link to="/productos" onClick={toggleMenu} className="text-[#e99d64] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              Productos
            </Link>
            <Link to="/nosotros" onClick={toggleMenu} className="text-[#e99d64] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
              Nosotros
            </Link>
          </div>
          {/* Iconos en el menú móvil */}
          <div className="pt-4 pb-3 border-t border-gray-200">
             <div className="flex items-center justify-center space-x-4">
                <button className="p-2 text-[#e99d64] hover:text-[#d58954]">
                  <FaSearch className="h-5 w-5" />
                </button>
                <button className="p-2 text-[#e99d64] hover:text-[#d58954]">
                  <FaUser className="h-5 w-5" />
                </button>
                <Link to="/cart" onClick={toggleMenu} className="p-2 text-[#e99d64] hover:text-[#d58954]">
                  <FaShoppingCart className="h-5 w-5" />
                </Link>
              </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
