import React from 'react';
import './Service.scss'; // Importa el archivo SASS
import { Link as ScrollLink, Element } from 'react-scroll'; // Importa ScrollLink y Element desde react-scroll

const ServicesPage = () => {
  return (
    <div className='services-container'>
      <h1>SERVICIOS DE MARKETING DIGITAL</h1>
      
      {/* Sección de iconos y nombres */}
      <div className='services-icons'>
        <ScrollLink
          to='redes-sociales'
          smooth={true}
          duration={500}
        >
          <div className='service-icon-container'>
            <img src='/logo.jpg' alt='Icono Redes Sociales' className='service-icon' />
            <p>Redes Sociales</p>
          </div>
        </ScrollLink>

        <ScrollLink
          to='identidad-marca'
          smooth={true}
          duration={500}
        >
          <div className='service-icon-container'>
            <img src='/logo.jpg' alt='Icono Identidad de Marca' className='service-icon' />
            <p>Identidad de Marca</p>
          </div>
        </ScrollLink>

        <ScrollLink
          to='publicidad'
          smooth={true}
          duration={500}
        >
          <div className='service-icon-container'>
            <img src='/logo.jpg' alt='Icono Publicidad' className='service-icon' />
            <p>Publicidad</p>
          </div>
        </ScrollLink>

        <ScrollLink
          to='diseño-web'
          smooth={true}
          duration={500}
        >
          <div className='service-icon-container'>
            <img src='/logo.jpg' alt='Icono Diseño Web' className='service-icon' />
            <p>Diseño Web</p>
          </div>
        </ScrollLink>

        <ScrollLink
          to='e-marketing'
          smooth={true}
          duration={500}
        >
          <div className='service-icon-container'>
            <img src='/logo.jpg' alt='Icono E-Marketing' className='service-icon' />
            <p>E-Marketing</p>
          </div>
        </ScrollLink>
      </div>

      {/* Sección de definiciones */}
      <div className='service-definitions'>
        <Element name='redes-sociales'>
          <h2>Redes Sociales</h2>
          <p>
            Ofrecemos gestión y estrategia de redes sociales personalizada para tu negocio. Impulsamos tu presencia en plataformas creando contenido atractivo, interactuando con tu audiencia y aumentando la visibilidad de tu marca.
          </p>
        </Element>

        <Element name='identidad-marca'>
          <h2>Identidad de Marca</h2>
          <p>
            Ayudamos a definir y desarrollar la identidad única de tu marca. Desde la creación de logotipos y paletas de colores hasta el desarrollo de mensajes clave y voz de la marca, trabajamos para garantizar una imagen de marca memorable.
          </p>
        </Element>

        <Element name='publicidad'>
          <h2>Publicidad</h2>
          <p>
            Publicidad en todos los medios digitales que necesita tu marca, siguiendo una estrategia clara para aumentar tu interacción, seguidores, consultas, tráfico y ventas. Analizamos diariamente las campañas para obtener la mayor cantidad de resultados al menor precio.
          </p>
        </Element>

        <Element name='diseño-web'>
          <h2>Diseño Web</h2>
          <p>
            Creamos sitios web personalizados que destacan y atraen a tu audiencia. Nuestros diseños web no solo son hermosos, sino también funcionales y optimizados para SEO, lo que garantiza una experiencia de usuario excepcional y una mayor visibilidad en línea.
          </p>
        </Element>

        <Element name='e-marketing'>
          <h2>E-Marketing</h2>
          <p>
            Desarrollamos estrategias de email marketing personalizadas para fomentar la lealtad de tus clientes y aumentar la retención. Desde mails informativos hasta campañas automatizadas de seguimiento, te ayudamos a mantener una comunicación efectiva con tu audiencia a través del correo electrónico.
          </p>
        </Element>
      </div>
    </div>
  );
};

export default ServicesPage;
