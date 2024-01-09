import React, { useState } from 'react';

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        min="1"
        value={quantity}
        readOnly
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantitySelector;