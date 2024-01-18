import './QuantitySelector.css';

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 0 && setCantidad(cantidad - 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleRestar}
        className={`${
          cantidad === 0 ? 'bg-red-300' : 'bg-blue-600'
        } rounded py-2 px-4 text-white font-semibold mr-2`}
        disabled={cantidad === 0}
      >
        -
      </button>
      <div className="quantity-container">
        <span className={`quantity-text ${cantidad === 0 ? 'fade-out' : 'fade-in'}`}>
          {cantidad}
        </span>
      </div>
      <button
        onClick={handleSumar}
        className={`${
          cantidad === stock ? 'bg-red-300' : 'bg-blue-600'
        } rounded py-2 px-4 text-white font-semibold ml-2`}
        disabled={cantidad === stock}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
