
import React from 'react';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  const { img, name, description, price } = item;

  return (
    <div className="card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio: {price}</p>
        <Boton>
          <Link to={`/Item/${item.id}`}>Ver Más</Link>
        </Boton>
      </div>
    </div>
  );
};

export default ItemCard;