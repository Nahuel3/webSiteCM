import React from 'react';
import './Footer.scss'; // Asegúrate de tener un archivo CSS para estilizar el pie de página.
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Swann Marketing</h2>
                    <p>¡Nuestra misión es hacerte crecer!</p>
                </div>
                <div className="footer-info">
                    <p>SWANN MARKETING LLC</p>
                    <p>Hollywood, Florida.</p>
                    <p>© 2016. All rights reserved.</p>
                </div>
                <div className="footer-contact">
                    <h3>¡Sigamos en Contacto!</h3>
                    <p>¡Consultorias Personalizadas!</p>
                    <p>¿Necesitas un aliado estratégico para hacer crecer tu marca?</p>
                    <p>¡Nuestras consultorías son para vos!</p>
                </div>
                <div className="footer-social">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="https://wa.me/5491135206645?text=¡Hola! Quisiera hacerte una pregunta." target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-whatsapp fa-2x whatsapp-icon"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram fa-2x instagram-icon"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook fa-2x facebook-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
