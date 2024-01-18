import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider, { CartContext } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import AppRouter from './Router/AppRouter';



function App() {

  return (
    
    <UserProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </UserProvider>

  );
}

export default App;




















