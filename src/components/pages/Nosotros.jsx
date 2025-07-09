import React from 'react';

const Nosotros = () => {
  return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#e99d64] sm:text-5xl md:text-6xl">
              Sobre Pastelería Bella
            </h1>
            <p className="mt-4 text-lg text-[#e99d64]">
              ¡Descubre el sabor auténtico en cada bocado!
            </p>
          </div>

          <div className="bg-[#e99d64] text-white p-8 rounded-lg shadow-md space-y-6">
            <p className="text-lg">
              Bienvenidos a <strong>Pastelería Bella</strong>, donde la tradición se une con la innovación para ofrecerte delicias libres de gluten, azúcar y lactosa.
            </p>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Nuestra Pasión</h2>
              <p>
                Desde el corazón de nuestra pastelería, creamos cada producto con amor y dedicación, manteniendo intactos los sabores y garantizando una experiencia gastronómica única.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Nuestros Productos</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Sin Gluten:</strong> Nos enorgullece ofrecer una amplia gama de pasteles y postres sin gluten que satisfacen a todos los paladares, sin importar las restricciones alimenticias.</li>
                <li><strong>Sin Azúcar:</strong> Nuestros dulces sin azúcar son la elección perfecta para aquellos que buscan disfrutar de un toque dulce sin preocuparse por el contenido de azúcar, manteniendo la salud en primer plano.</li>
                <li><strong>Sin Lactosa:</strong> Sabemos lo importante que es la lactosa para algunas personas, por lo que hemos creado opciones deliciosas sin lactosa que todos pueden disfrutar sin problemas digestivos.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Valor Agregado</h2>
              <p>
                Más allá de la calidad de nuestros productos, ofrecemos a nuestros clientes de cafeterías, restaurantes, catering y eventos un servicio personalizado y opciones de empaque exclusivas para resaltar su negocio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Tradición y Confianza</h2>
              <p>
                Nuestra pastelería se basa en recetas familiares combinadas con los estándares más altos de calidad y seguridad alimentaria. Desde 2016, hemos establecido relaciones sólidas con nuestros clientes, brindando productos consistentemente deliciosos y un servicio excepcional.
              </p>
            </div>
            
            <p className="text-center text-lg pt-4 border-t border-gray-200">
              Descubre cómo nuestros productos pueden llevar tus ofertas gastronómicas al siguiente nivel.
            </p>
          </div>

          <div className="mt-12 bg-[#e99d64] text-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <div className="space-y-2">
              <p><strong>Instagram:</strong> <a href="https://www.instagram.com/pasteleria.bella" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">pasteleria.bella</a></p>
              <p><strong>Email:</strong> <a href="mailto:pasteleriaign@gmail.com" className="text-white hover:underline">pasteleriaign@gmail.com</a></p>
              <p><strong>Teléfono:</strong> <a href="tel:+569967116122" className="text-white hover:underline">+56 9 9671 16122</a></p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Nosotros;
