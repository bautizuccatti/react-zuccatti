import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cardWidget/cardWidget.jsx';
import './navBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">Catalogo</Link>
        <Link to="/women">Women</Link>
        <Link to="/sale">Sale</Link>
        <Link to="/nosotros">Nosotros</Link>
      </div>
      <CartWidget />
    </div>
  );
}

export default Navbar;