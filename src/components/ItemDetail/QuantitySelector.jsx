import { Button } from "react-bootstrap"


const QuantitySelector = ({cantidad, stock, setCantidad}) => {
    const handleSumar = () => {
        cantidad < stock && setCantidad (cantidad + 1)
    }
    const handleRestar = () => {
        cantidad < 1 && setCantidad (cantidad - 1)
    }
    
    return(
       <div>
        <Button onClick={handleRestar}>-</Button>
        <span>{cantidad}</span>
        <Button onClick={handleSumar}>+</Button>
       </div>
  
    )
  
  }
  
  
  export default QuantitySelector;