import React, { useState } from 'react';
import './App.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('HOME'); // Botón "HOME" seleccionado por defecto

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <header>
      <div className={`navbar-container ${menuOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="https://swann.marketing/wp-content/uploads/2022/03/PNG-WEB-SWANN-32.png" alt="Logo" />
        </div>
        {/* Botón de hamburguesa solo visible en pantallas más pequeñas */}
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>
        {/* Lista de navegación */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="https://www.instagram.com/?hl=es"
              className={selectedButton === 'HOME' ? 'selected' : ''}
              onClick={() => handleButtonClick('HOME')}
              target="_blank" rel="noreferrer"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/?hl=es"
              className={selectedButton === 'ACADEMIA' ? 'selected' : ''}
              onClick={() => handleButtonClick('ACADEMIA')}
              target="_blank" rel="noreferrer"
            >
              ACADEMIA
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/?hl=es"
              className={selectedButton === 'SERVICIOS' ? 'selected' : ''}
              onClick={() => handleButtonClick('SERVICIOS')}
              target="_blank" rel="noreferrer"
            >
              SERVICIOS
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/?hl=es"
              className={selectedButton === 'CONSULTORIAS' ? 'selected' : ''}
              onClick={() => handleButtonClick('CONSULTORIAS')}
              target="_blank" rel="noreferrer"
            >
              CONSULTORIAS 1a1
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/?hl=es"
              className={selectedButton === 'ALUMNOS' ? 'selected' : ''}
              onClick={() => handleButtonClick('ALUMNOS')}
              target="_blank" rel="noreferrer"
            >
              ALUMNOS
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5491135206645?text=¡Hola! Quisiera hacerte una pregunta."
              className={selectedButton === 'CONTACTO' ? 'selected' : ''}
              onClick={() => handleButtonClick('CONTACTO')}
              target="_blank" rel="noreferrer"
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
