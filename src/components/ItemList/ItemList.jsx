
import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css';

const ItemList = ({ productos }) => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-title">productos</h2>
      <div className="row">
        {productos && productos.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemList;