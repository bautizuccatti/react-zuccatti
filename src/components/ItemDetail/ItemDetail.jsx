import React, { useContext, useState } from "react";
import './ItemDetail.css';
import Boton from '../Boton/Boton';
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import {CartContext} from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart);
    navigate('/cart'); // Redirige al carrito después de agregar el elemento
  };

  return (
    <article className="itemDetail">
      <img src={item.img} alt={item.name} />
      <h3 className="itemDetailName">{item.name}</h3>
      <p className="itemDetailDescription">{item.description}</p>
      <p className="itemDetailPrice">${item.price}</p>
      <hr />
      {item.stock === 0 ? (
        <p className="no-stock">Sin stock</p>
      ) : (
        
        <>
          <QuantitySelector
            cantidad={cantidad}
            stock={item.stock}
            setCantidad={setCantidad}
          />
          <Boton onClick={handleAgregar} disabled={item.stock === 0}>Agregar al carrito</Boton>
        </>
      )}

    </article>
  );
};

export default ItemDetail;
