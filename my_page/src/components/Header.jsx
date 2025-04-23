import React from 'react';
import empresarioImg from '../assets/images/empresario_fondo_head.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={empresarioImg} alt="Empresario estilo anime" className="header-image" />
        <h1>Alex Reyes</h1>
        <p>Desarrollador Web & Soporte Técnico</p>
      </div>
    </header>
  );
};

export default Header;