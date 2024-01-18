import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList/';
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Boton from "../Boton/Boton";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(9); 
  const { categoryId } = useParams();
  const [loadingMore, setLoadingMore] = useState(false); 

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        const items = categoryId
                      ? data.filter(prod => prod.category === categoryId)
                      : data
        setProductos(items);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  const loadMoreProducts = () => {
    setLoadingMore(true); 
    setTimeout(() => {
      setVisibleProducts(prevVisible => prevVisible + 6);
      setLoadingMore(false); 
    }, 1000); 
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemList productos={productos.slice(0, visibleProducts)} />
          {visibleProducts < productos.length && (
            <>
              {loadingMore ? (
                <Loader />
              ) : (
                <Boton
                  onClick={loadMoreProducts}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '18px',
                  }}
                >
                  Ver más
                </Boton>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
