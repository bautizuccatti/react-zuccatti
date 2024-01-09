

import { children } from "react"
import './Boton.css';
    


const Boton = ({ children, onClick }) => {
  return(
    <button onClick={onClick}>
      {children}

    </button>

  )

}


export default Boton;

