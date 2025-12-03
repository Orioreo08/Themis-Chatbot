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
        <h2>USM</h2>
      </div>

      {/*      
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#acerca">Acerca de</a></li>
      </ul> */}

      <div className="navbar-actions">
        {/* Botón de Login con logo USM */}
         <img
          src="/background/Facultad de derecho(sin fondo).png"
          alt="Logo Facultad de derecho"
          className="logo-usm"
          style={{ height: '60px', marginRight: '8px' }}
    />
    
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
