

import React from 'react';
import "./productiteam.css"

const ProductItem = ({ id, name, price, description }) => {
  return (
    <div className="product-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductItem;

