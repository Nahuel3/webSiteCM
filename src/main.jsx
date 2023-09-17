import React, { useState, useEffect } from 'react';
import './main.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Main = () => {
  // Índice de la persona seleccionada
  const [selectedPersona, setSelectedPersona] = useState(0);
  // Índice de la imagen de la persona seleccionada
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Datos de las personas en el carrusel
  const personas = [
    {
      nombre: 'Micaela',
      descripcion: 'Micaela es una Publicista y Social Media Manager con más de 7 años de experiencia en el mundo del marketing digital. Su enfoque estratégico y su creatividad son sus principales activos. Micaela ha ayudado a numerosas empresas y emprendedores a prosperar en el ámbito digital, aprovechando al máximo las oportunidades que ofrece. Su pasión por el marketing y su capacidad para impulsar el crecimiento en línea la convierten en una aliada valiosa para cualquier proyecto en el mundo digital.',
      imagenes: [
        'https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg',
        'https://img.freepik.com/foto-gratis/foto-estudio-encantadora-joven-rubia-peinado-casual-mirando-camara-amplia-sonrisa-alegre-pie-sobre-fondo-rosa-blusa-blanca-falda-flores-manos-abajo_295783-6455.jpg',
      ],
    },
    {
      nombre: 'Belen',
      descripcion:
        'Mi nombre es Belén Turín, soy Community Manager, Trafficker y Emprendedora. Con mi socia decidimos fundar 𝗚𝗹𝗼𝘄𝗡𝗲𝘁 para ayudar a empresas y emprendedores a crecer en el mundo digital.⁣      ⁣    ¡Llevo más de dos años trabajando con el Marketing Digital! Me inicié como Community Manager y luego decidí sumar publicidad, para poder ofrecer más servicios a mis clientes.¡El momento de llevar tu empresa al éxito es hoy!',
      imagenes: [
        'https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg',
        'https://pps.whatsapp.net/v/t61.24694-24/310558651_565378178371191_6360899242281261324_n.jpg?ccb=11-4&oh=01_AdQImACnWaj5OlKpg4C2Th92WtqGDks5PUn5pxlVo4zGOA&oe=64FDEEE6&_nc_cat=100',
      ],
    },

  ];

  // Función para cambiar la imagen de la persona seleccionada
  const handleChangeImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  useEffect(() => {
    // Cambiar automáticamente la imagen de la persona cada 10 segundos
    const imageInterval = setInterval(() => {
      handleChangeImage();
    }, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);



  return (
    <div className="main-content">
    {personas.map((persona, index) => (
      <div className="person-container" key={index}>
        <div className="text-container">
          <h2>{persona.nombre}</h2>
          <p>{persona.descripcion}</p>
        </div>
        <div className="image-container">
          <img
            src={persona.imagenes[0]}
            alt={`Imagen de ${persona.nombre}`}
          />
        </div>
      </div>
    ))}
  </div>
  );
};

export default Main;
