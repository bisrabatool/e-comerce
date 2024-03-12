

import React from 'react';
import ProductItem from './productitem';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'jasmin',
      price: 20.99,
      description: 'just like jasmin in your near',
    },
    {
      id: 2,
      name: 'bella',
      price: 34.99,
      description: 'enhance your room with fragnance of bella .',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
// 


