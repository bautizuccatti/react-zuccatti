import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList/'
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams ()
 
  console.log(categoryId)

  useEffect(() => {
    setLoading(true);
  
    pedirDatos()
      .then((data) => {
        const items = categoryId
                      ? data.filter(prod => prod.category === categoryId)
                      : data
        setProductos( items );
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (

    <>
    {loading ? (
      <h2 className="text-center text-4xl mt-8"> cargando... </h2>

    ) : 
    (
      <ItemList productos={productos} />
    )
  }
    </>
  )

};

export default ItemListContainer;