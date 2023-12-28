import React from "react";
import productData from "../../mock/data.json"; 

const ItemDetail = ({ item }) => {
  if (!item) {
    
    return <div>No item data</div>;
  }

  console.log(item.img);

  return (
    <article className="itemDetail">
      <img src={item.img} alt={item.name} />
      <h3 className="itemDetailName">{item.name}</h3>
      <p className="itemDetailDescription">{item.description}</p>
      <p className="itemDetailPrice">{item.price}</p>
    </article>
  );
};

export default ItemDetail;