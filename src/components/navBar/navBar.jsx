import './navBar.css'
import CartWidget from '../cardWidget/cardWidget.jsx';

const Navbar = () => {
    return (
     
      <div className="navbar">
        <div className="logo">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Sale</a>
          <a href="#">Nosotros</a>
        </div>
        <CartWidget/>
      </div>
     
      
    );
  }
  
  export default Navbar;