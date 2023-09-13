import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './nav';
import Section from './section';
import Footer from './footer';
import ServicesPage from './servicespage'; // Importa el componente de la página de servicios
import Form from "./contactForm/form"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<Form />} />
          {/* Ruta comodín para redirigir a la página principal */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
