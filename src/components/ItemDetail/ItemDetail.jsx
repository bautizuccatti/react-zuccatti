import React, { useContext, useState } from "react";
import productData from "../../mock/data.json"; 
import './ItemDetail.css';
import Boton from '../Boton/Boton';
import QuantitySelector from "./QuantitySelector";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item, onAddToCart }) => {
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const { cart, setCart } = useContext(CartContext)
  console.log("item detail:",cart)
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAgregar = ( ) => {
    const itemToCart ={
      ...item,
      cantidad,
    }
    console.log(itemToCart)
  } 


  return (
    <article className="itemDetail">
      <img src={item.img} alt={item.name} />
      <h3 className="itemDetailName">{item.name}</h3>
      <p className="itemDetailDescription">{item.description}</p>
      <p className="itemDetailPrice">${item.price}</p>
      <hr />
      <QuantitySelector
        cantidad={cantidad}
        stock={item.stock}
        setCantidad={ setCantidad }
      />
      <Boton onClick={handleAgregar}> 
      Agregar al carrito
      </Boton>
    </article>
  );
};

export default ItemDetail;