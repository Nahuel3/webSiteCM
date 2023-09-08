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
        'Belén es una Community Manager apasionada y creativa con un profundo conocimiento de las redes sociales y la gestión de comunidades en línea. Con un enfoque en la construcción de relaciones sólidas con los seguidores, Belén se destaca en la creación de contenido atractivo y en la gestión de la presencia en línea de una marca. Su habilidad para comprender las tendencias actuales y adaptarse a los cambios en el mundo digital la convierte en una experta en conectar marcas con su audiencia de manera efectiva.',
      imagenes: [
        'https://pps.whatsapp.net/v/t61.24694-24/345015822_539374261736764_3512846946091240652_n.jpg?ccb=11-4&oh=01_AdQlTffLQookynMnlYJ4G9UdtkHv3P3HbZKU-H42_xwedQ&oe=64FE0F14&_nc_cat=102',
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
      <Carousel
        showArrows={false} // Desactiva las flechas del carrusel
        showThumbs={false}
        swipeable={false} // Desactiva el desplazamiento táctil
        selectedItem={selectedPersona} // Establece la persona seleccionada
        onChange={(index) => setSelectedPersona(index)} // Maneja el cambio de persona seleccionada
       
        
      >
        {personas.map((persona, index) => (
          <div
            key={index}
            className={`carousel-item ${index !== selectedPersona ? 'hidden' : ''}`} // Agrega la clase 'hidden' a las personas que no están seleccionadas
          >
            <div className="carousel-content">
              <div className="text-container">
                <h2>{persona.nombre}</h2>
                <p>{persona.descripcion}</p>
              </div>
              <div className="image-container">
                <div className="image-border" onClick={handleChangeImage}>
                  <img
                    src={persona.imagenes[selectedImageIndex]}
                    alt={`Imagen de ${persona.nombre}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Main;
