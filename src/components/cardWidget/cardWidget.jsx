import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemsInCart = 4; 

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={20} className="mr-2" />
      {itemsInCart > 0 && (
        <span className="badge badge-danger">
          {itemsInCart}
        </span>
      )}
    </div>
  );
};

export default CartWidget;