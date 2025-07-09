import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '+56912345678'; // Número de WhatsApp sin el +56
  const whatsappMessage = '¡Hola! Me gustaría contactarme con ustedes.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg transition-colors duration-300 flex items-center justify-center"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
