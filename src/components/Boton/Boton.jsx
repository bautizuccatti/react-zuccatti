

// const Button = () => {
//     return (
//         <button
//         variant="primary"
//         className="product-buy-button"
//         onClick={() => handleBuyClick(product)}
//       >
//         Comprar
//       </button>

import { children } from "react"

    
//     );
//   };
  
//   export default Button;

const Boton = ({ children, onClick }) => {
  return(
    <button onClick={onClick}>
      {children}

    </button>

  )

}


export default Boton;

