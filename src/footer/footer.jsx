import React from 'react';
import './Footer.scss'; // Asegúrate de tener un archivo CSS para estilizar el pie de página.
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>GlowNet</h2>
                    <p>¡Nuestra misión es hacerte crecer!</p>
                </div>
                <div className="footer-info">
                    <p>GlowNet</p>
                    <p>Argentina</p>
                    <p>© 2023. All rights reserved.</p>
                </div>
                <div className="footer-contact">
                    <h3>Servicios</h3>
                    <p>¡Manejo Redes Sociales!</p>
                    <p>!Publicidad!</p>
                    <p>¡Diseño Web!</p>
                    <p>¡Email Marketing!</p>
                    <p>¡Identidad De Marca!</p>
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
