import { children } from "react"
import './Boton.css';
    


const Boton = ({ children, onClick }) => {
  return(
    <button className="my-button" onClick={onClick}>
      {children}

    </button>

  )

}


export default Boton;

