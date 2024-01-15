import React from 'react';
import './Loader.css';
import logo from '/img/logo.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="loader" />
    </div>
  );
}

export default Loader;