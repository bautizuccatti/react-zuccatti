import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false); // Nuevo estado para manejar si el producto no existe
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const docRef = doc(db, 'productos', itemId);

      try {
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const docData = {
            ...docSnapshot.data(),
            id: docSnapshot.id,
          };
          setItem(docData);
        } else {
          setNotFound(true); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : notFound ? (
        <p>Producto no encontrado</p>
      ) : (
        item && <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
