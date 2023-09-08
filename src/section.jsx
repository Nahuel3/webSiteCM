import React from 'react';
import './sections.scss';
import Main from './main';

const MarketingComponent = () => {


  return (
    <div>
      <div className="marketing-container">
        <h2>Marketing Digital para Empresas y Emprendedores</h2>
        <h3>WE ARE A FULL SERVICE</h3>
        <p>¡ANIMATE A LLEVAR TU NEGOCIO LEJOS!</p>
        <a href="https://wa.me/5491135206645?text=¡Hola! Quisiera hacerte una pregunta." target="_blank" rel="noreferrer">
        <button>Contacto</button>
        </a>
      </div>

      <div className="welcome-container ">
        <h2 className="slide-from-top">¡Bienvenido!</h2>
        <h3 className="slide-from-top">¿En qué puedo ayudarte?</h3>
        <div className="blue-rectanglesPadre">
          <div className="blue-rectangle slide-from-right">
            <img src="https://w7.pngwing.com/pngs/386/34/png-transparent-knowledge-learning-education-hat-student-university-cap-education-icon-thumbnail.png" alt="Descripción de la imagen" className="imagen-pequeña" />
            <h4>Servicios de Marketing para empresas</h4>
            <p>
              ¡Somos el equipo de Marketing ideal para tu empresa! Servicios completos para que puedas delegar al 100% la parte digital de tu negocio, y hacerlo crecer cada día más con sólidas estrategias para aumentar tus ventas y tu comunidad!
            </p>
          </div>
          <div className="blue-rectangle slide-from-right">
          <img src="https://w7.pngwing.com/pngs/386/34/png-transparent-knowledge-learning-education-hat-student-university-cap-education-icon-thumbnail.png" alt="Descripción de la imagen" className="imagen-pequeña" />
            <h4>Academia de Cursos Online</h4>
            <p>¡Aprendé Marketing Digital con los mejores cursos online que te permitirán trabajar de lo que amas y llevar tus proyectos al siguiente nivel!¡Estudiá a tu ritmo y con el mejor soporte!
            </p>
          </div>
          <div className="blue-rectangle slide-from-right">
          <img src="https://w7.pngwing.com/pngs/386/34/png-transparent-knowledge-learning-education-hat-student-university-cap-education-icon-thumbnail.png" alt="Descripción de la imagen" className="imagen-pequeña" />
            <h4>Consultorias personalizadas</h4>
            <p>
            Te ayudamos a identificar la situación actual de tu negocio y plantear una estrategia para superar tus objetivos en el corto plazo. Además, te brindamos el soporte que necesitas, para alcanzar el siguiente nivel!
            </p>
          </div>
        </div>
      </div>
      <Main></Main>
    </div>
    
  );
};

export default MarketingComponent;
