import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cardWidget/cardWidget';
import './NavBar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">CATALOGO</Link>
        <Link to="/sale">SALE</Link>
        <Link to="/nosotros">NOSOTROS</Link>
      </div>
      <CartWidget />
    </div>
  );
}

export default Navbar;
