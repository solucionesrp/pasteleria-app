import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#44646c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y descripción */}
          <div>
            <div className="flex-shrink-0">
              <img src={logo} alt="Cafeteria & Pasteleria Bella" className="h-20 w-20 rounded-full mb-4" />
              <p className="text-gray-400 text-center">Cafeteria & Pasteleria Bella</p> 
            </div>
            
          </div>

          {/* Columna 2 - Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Teléfono: +56 9 12345678</li>
              <li className="text-gray-400">Email: info@pasteleriabella.cl</li>
              <li className="text-gray-400">Dirección: Av. Libertador Bernardo O'Higgins 1234, Santiago</li>
            </ul>
          </div>

          {/* Columna 3 - Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Lunes a Viernes: 8:00 - 20:00</li>
              <li className="text-gray-400">Sábados: 9:00 - 18:00</li>
              <li className="text-gray-400">Domingos: 10:00 - 16:00</li>
            </ul>
          </div>

          {/* Columna 4 - Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Siguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cafeteria & Pasteleria Bella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
