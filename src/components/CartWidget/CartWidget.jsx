import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import carrito from '/img/dedos.png'; 

const CartWidget = () => {
  const itemsInCart = 5;

  return (
    <div className="d-flex align-items-center">
   <img src="/img/dedos.png" alt="" className='carrito'/>
      {itemsInCart > 0 && (
        <span className="badge badge-danger">
          {itemsInCart}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
