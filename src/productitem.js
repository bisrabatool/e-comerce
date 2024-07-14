
import React from 'react';

const ProductItem = ({ name, price, description, imageUrl }) => {
  return (
    <div className="product-item">
      {imageUrl && <img src={imageUrl} alt={name} className="product-image" />}
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price !== undefined ? price.toFixed(2) : 'N/A'}</div>
    </div>
  );
};

export default ProductItem;


