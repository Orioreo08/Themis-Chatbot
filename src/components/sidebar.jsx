import React from 'react';
import './sidebar.css';

export default function Navbar() {
  const handleLogin = () => {
    // Aquí va la lógica de login (redirección, modal, etc.)
    console.log("Login clicado");
  };

  return (
    <nav className="sidebar">
      <div className="navbar-logo">
        <h2>Themis</h2>
      </div>

      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#acerca">Acerca de</a></li>
      </ul>

      <div className="navbar-actions">
        {/* Botón de Login con logo USM */}
        <button className="btn-login"  onClick={handleLogin}>
          <h2>USM</h2>       
        </button>
      </div>
    </nav>
  );
}


/*<img 
            src="/icons/usm-logo.png" 
            alt="Login USM" 
            className="login-logo"
          />
     */     
