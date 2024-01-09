import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCatalog from './components/productCatalog/productCatalog';
import Navbar from './components/NavBar/NavBar';
import CategoryList from './components/categoryList/CategoryList';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import Footer from './components/footer/Footer';



function App() {
  const [cart, setCart] = useState([])
  console.log(cart)
  return (
  <CartContext.Provider value={{
    cart
  }}>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </Router>
  </CartContext.Provider>

  );
}

export default App;


















