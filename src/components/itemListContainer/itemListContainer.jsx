import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'; 
import ProductCatalog from '../productCatalog/productCatalog';

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula una llamada a una API (reemplaza esto con tu lógica de carga real)
        const response = await fetch('https://api.ejemplo.com/items');
        const data = await response.json();

        setItems(data);
        setLoading(false);  // Marca la carga como completa
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false);  // Marca la carga como completa incluso si hay un error
      }
    };

    // Simulación de demora de 2 segundos
    const delay = setTimeout(() => {
      fetchData();
    }, 2000);

    // Limpia el temporizador en el desmontaje del componente
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container"> 
      <h2 className="greeting">{greeting || "Man: New Arrivals"}</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ProductCatalog items={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;