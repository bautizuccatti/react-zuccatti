import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CardWidget.css';

const CartWidget = ({ isScrolled, itemsInCart }) => {
  return (
    <div className={`d-flex align-items-center ${isScrolled ? 'scrolled' : ''}`}>
      <FaShoppingCart size={20} className="mr-2" />
      {itemsInCart > 0 && (
        <span className={`badge badge-danger ${isScrolled ? 'scrolled' : ''}`}>
          {itemsInCart}
        </span>
      )}
    </div>
  );
};

export default CartWidget;