import React, { useState } from 'react';
import ProductCard from '../home/ProductCard';
import ProductDetailModal from '../common/ProductDetailModal';
import amorxchocoImg from '../../assets/img/modal/amorxchoco.JPG';
import naranjaChocolateImg from '../../assets/img/tortas/naranjaChocolate.JPG';
import naranjaImg from '../../assets/img/tortas/naranja.JPG';
import muerteporchocolateImg from '../../assets/img/tortas/muerteporchocolate.JPG';
import maracuyamanjarImg from '../../assets/img/tortas/maracuyamanjar.JPG';
import amapolaImg from '../../assets/img/tortas/amapola.JPG';
import amorhojarascaImg from '../../assets/img/tortas/amorhojarasca.JPG';
import amorporchocolateImg from '../../assets/img/tortas/amorporchocolate.JPG';
import diplomaticaImg from '../../assets/img/tortas/diplomatica.JPG';
import lechechocolateImg from '../../assets/img/tortas/lechechocolate.JPG';
import lucumamanjarImg from '../../assets/img/tortas/lucumamanjar.JPG';
import selvanegraImg from '../../assets/img/tortas/selvanegra.JPG';
import piedefambruesaImg from '../../assets/img/tortas/piedefambruesa.jpg';
import cuatrolechesImg from '../../assets/img/tortas/cuatroleches.JPG';

const products = [
  {
    id: 't-1',
    title: 'Alfajor hojarasca',
    price10: '$15.500',
    price30: '$33.140',
    description: 'Hojarasca, manjar y decorado con merengue.',
    image: amorxchocoImg
  },
  {
    id: 't-2',
    title: 'Amapolas',
    price10: '$13.000',
    price30: '$28.000',
    description: 'Bizcocho con amapola, crema blanca, manjar y bañado con 3 tipos de leche.',
    image: amapolaImg
  },
  {
    id: 't-3',
    title: 'Amor hojarasca',
    price10: '$15.500',
    price30: '$33.140',
    description: 'Hojarasca, manjar, mermelada de frambuesa y crema diplomatica.',
    image: amorhojarascaImg
  },
  {
    id: 't-4',
    title: 'Amor por chocolate',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque, manjar y ganache de chocolate.',
    image: amorporchocolateImg
  },
  {
    id: 't-5',
    title: 'Diplomatica',
    price10: '$15.500',
    price30: '$33.140',
    description: 'Hojarasca, manjar, crema diplomatica.',
    image: diplomaticaImg
  },
  {
    id: 't-6',
    title: '4 Leches',
    price10: '$13.000',
    price30: '$28.000',
    description: 'Bizcocho chocolate, bañado con 3 tipos de leche, manjar y merengue',
    image: cuatrolechesImg
  },
  {
    id: 't-7',
    title: '4 leches chocolate',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Bizcocho chocolate, bañado con 3 tipos de leche, manjar y merengue.',
    image: lechechocolateImg
  },
  {
    id: 't-8',
    title: 'Lucuma manja',
    price10: '$13.000',
    price30: '$28.000',
    description: 'Bizcocho, crema de lucuma, manjar y nuez.',
    image: lucumamanjarImg
  },
  {
    id: 't-9',
    title: 'Maracuya manjar',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque, manjar, crema de maracuya y pepas de maracuya',
    image: maracuyamanjarImg
  },
  {
    id: 't-10',
    title: 'Muerte por chocolate',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque chocolate, ganache, manjar y mermelada de frambuesa.',
    image: muerteporchocolateImg
  },
  {
    id: 't-11',
    title: 'Naranja',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque, crema de naranja y ganache de chocolate .',
    image: naranjaImg
  },
  {
    id: 't-12',
    title: 'Naranja chocolate',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque, crema de naranja y ganache de chocolate .',
    image: naranjaChocolateImg
  },
  {
    id: 't-13',
    title: 'Torta de Pie de l. frambuesa',
    price10: '$13.500',
    price30: '$29.000',
    description: 'Panqueque, crema de limon, mermelada de frambuesa.',
    image: piedefambruesaImg
  },
  {
    id: 't-14',
    title: 'Torta selva negra',
    price10: '$13.000',
    price30: '$28.000',
    description: 'Bizcocho chocolate, bañado con mermelada de frambuesa, marrasquina, chocolate derretido.',
    image: selvanegraImg
  },
];

const Tortas = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Tortas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                product={product}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Tortas; 