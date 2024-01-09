// Footer.js

import React from 'react';
import './Footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer>
        <img src="/img/logoII.webp" alt="" />     
      <div className="redes-sociales">
        <a href="https://www.facebook.com/HonkyTonk1971/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhonkytonk1971" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com/honkytonk1971/?hl=es" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>

      
      <p>© 2024 Honky Tonk. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
