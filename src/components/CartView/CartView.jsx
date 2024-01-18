import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmtpyCart";
import Boton from "../Boton/Boton";
import { Navigate } from "react-router-dom";

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
  const { user } = useContext(UserContext);

  if (!user.email) return <h2>No hay usuario registrado</h2>;
  if (cart.length === 0) return <EmtpyCart />;

  return (
    <section className="container m-auto mt-8">
      {/* <p>Bienvenido: {user.email}</p> */}
      <h2 className="text-4xl font-semibold">Tu Compra</h2>
      <hr />

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex gap-3 border-b my-4">
            <img src={item.img} alt="Cart img" className="w-32" width={400} />
            <div>
              <h3 className="text-2xl">{item.name}</h3>
              <p className="text-2xl font-bold">
                $ {item.price * item.cantidad}
              </p>
              <p>Cantidad: {item.cantidad}</p>

              <Boton onClick={() => removeItem(item.id)}>eliminar</Boton>
            </div>
          </li>
        ))}
      </ul>

      <h4 className="text-4xl font-semibold">TOTAL: ${totalCart && totalCart()}</h4>

      <Boton>
        <Link to="/">Seguir comprando</Link>
      </Boton>
      <hr />
      <Boton>
        <Link to="/checkout">Terminar mi compra</Link>
      </Boton>
      <hr />  
      <Boton onClick={clearCart}>Vaciar carrito</Boton>
      <hr />
      
      
      
    </section>
  );
};

export default CartView;
