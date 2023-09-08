import React from 'react';
import './Service.scss'; // Importa el archivo SASS

const ServicesPage = () => {
    return (
        <div>
            <div className='servicesTitle'>
                <h2>Nuestros Servicios</h2>
                <p>¡Contamos con todo tipo de servicios integrales para ayudarte en todas las áreas digitales de tu negocio!</p>
            </div>

            {/* Rectángulos de servicios */}
            <div className="services-container">
                <div className="service-group">
                    <div className="service">
                        <h3>Community Manager</h3>
                        <p>
                            Desarrollamos contenido creativo y de calidad en todas tus redes sociales y realizamos la mejor atención al cliente para concretar ventas. Nuestro principal enfoque es crear una Comunidad que ame tu marca y la elija por sobre tu competencia! Les llamamos #Brandlovers!
                        </p>
                    </div>

                    <div className="service">
                        <h3>Estrategia Digital</h3>
                        <p>
                            Analizamos tu marca, el mercado, la competencia, tu público y las tendencias actuales, para desarrollar una estrategia digital que refleje tus valores y haga crecer tu marca en poco tiempo con objetivos claros, y acciones para cumplirlos!
                        </p>
                    </div>
                </div>

                <div className="service-group">
                    <div className="service">
                        <h3>Publicidad Digital</h3>
                        <p>
                            Publicidad en todos los medios digitales que necesita tu marca, siguiendo una estrategia clara para aumentar tu interacción, seguidores, consultas, tráfico y ventas! Analizamos diariamente las campañas para obtener la mayor cantidad de resultados al menor precio! Un servicio que será un antes y después en tu negocio!
                        </p>
                    </div>

                    <div className="service">
                        <h3>Diseño Web</h3>
                        <p>
                            Creamos y diseñamos tu Sitio Web Institucional o Tienda Online desde cero y a medida, de forma estratégica pero simple para atraer a tu consumidor y lograr tráfico y conversión! Diseñamos un sitio adaptable a todos los dispositivos, y que refleje identidad de marca.
                        </p>
                    </div>
                </div>

                <div className="service-group">
                    <div className="service">
                        <h3>Email Marketing</h3>
                        <p>
                            Estrategia exclusiva para generar ventas y comunidad a través de Email Marketing! Si crees que el email pasó de moda, te vas a sorprender! Muchas ventas se concretan por este canal si sabemos utilizar una estrategia adecuada y optimizar nuestra base de datos!
                        </p>
                    </div>

                    <div className="service">
                        <h3>Branding y Diseño Gráfico</h3>
                        <p>
                            Creamos una identidad para tu marca y piezas gráficas para generar una conexión en todos tus canales, esto es clave para reflejar tus valores y que tus clientes te reconozcan en donde sea ¡y te diferencien de la competencia!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
