import { useContext } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import ItemListContainer from "../components/itemListContainer/itemListContainer"
import CartView from "../components/CartView/CartView"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import  Navbar  from "../components/NavBar/NavBar"
import LoginScreen from "../components/LoginScreen/LoginScreen"
import Footer from "../components/footer/Footer"
import Checkout from "../components/Checkout/Checkout"




const AppRouter = () => {
    const { user } = useContext(UserContext)
    return ( 
    
        <BrowserRouter> 
          <Navbar />
            {user.logged ? (
         
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartView />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Navigate to={"/"} />} />
               
            </Routes>
            
            ) : (
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<Navigate to = "/login" />} />
                </Routes> 
                        )}
          
                <Footer /> 
      </BrowserRouter> 
    )

}



export default AppRouter