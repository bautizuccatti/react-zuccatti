import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar/navBar';
import ProductCatalog from './components/productCatalog/productCatalog'; 
import CategoryList from './components/categoryList/CategoryList';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <CategoryList />
      <ItemListContainer greeting="New Arraivals " />
      <ProductCatalog />  
    </>
  );
}

export default App;










