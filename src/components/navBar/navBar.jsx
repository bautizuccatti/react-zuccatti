import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0); // Inicializa con el valor inicial deseado

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
        <Link to="/"><img src="/img/logo.png" alt="Logo" /></Link>
      </div>
      <div className="links">
        <Link to="/productos/buzo">BUZOS</Link>
        <Link to="/productos/remera">REMERAS</Link>
        <Link to="/productos/bermuda">BERMUDAS</Link>
        <Link to="/productos/camisa">CAMISAS</Link>
        <Link to="/productos/calzado">CALZADO</Link>
        <Link to="/productos/women">WOMEN</Link>
      </div>
      <CardWidget isScrolled={isScrolled} itemsInCart={itemsInCart} />
    </div>
  );
}

export default Navbar;
