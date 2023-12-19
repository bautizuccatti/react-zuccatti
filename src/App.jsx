import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCatalog from './components/productCatalog/productCatalog';
import Navbar from './components/navBar/navBar';
import CategoryList from './components/categoryList/CategoryList';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Women from './components/women/women';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
  
        <Route path="/Women" element={ <Women/>}/>
      </Routes>
    </Router>
  );
}

export default App;























// function App() {
//   return (
//     <>
//       <Navbar />
//       <CategoryList />
//       <ItemListContainer greeting="Man: New Arrivals" />
//       <ProductCatalog />
//     </>
//   );
// }

// export default App;
