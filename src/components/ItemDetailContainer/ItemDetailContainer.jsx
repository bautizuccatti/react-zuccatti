import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../utils/utils';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const { itemId } = useParams(); 

  useEffect(() => {
    pedirDatos(true)
      .then((data) => {
        setItem(data.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => setLoading(false));
  }, [itemId]); 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        item && <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;