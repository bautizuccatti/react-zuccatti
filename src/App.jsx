import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navBar/navBar';
import CategoryList from './components/categoryList/CategoryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';






function App() {
  
  return(

    <>

    <Navbar />

    <CategoryList /> 
    
    <ItemListContainer greeting="¡Ofertas Para Ti!" />
    
    </>
    
  )



}

export default App;





