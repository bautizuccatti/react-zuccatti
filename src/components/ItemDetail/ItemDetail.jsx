import React from "react";
import productData from "../../mock/data.json"; // Renamed import

const ItemDetail = ({ item }) => {
  if (!item) {
    // You can handle the case when item is not defined
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