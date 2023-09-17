import React, { useState } from 'react';
import './App.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtener la ubicación actual para resaltar el botón correcto

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <Link
              to="/"
              className={location.pathname === '/' ? 'selected' : ''}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/academia"
              className={location.pathname === '/nosotras' ? 'selected' : ''}
            >
             Nosotras
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className={location.pathname === '/servicios' ? 'selected' : ''}
            >
              Servicios
            </Link>
          </li>

      
         
          <li>
          <Link
              to="/contacto"
              className={location.pathname === '/contacto' ? 'selected' : ''}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
