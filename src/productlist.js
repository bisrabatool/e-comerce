

import React from 'react';
import ProductItem from './productitem';
import './productlist.css';
import jasminImage from './assest/49af004845366a4d649dedece6a2b583.jpg'; // Importing the image
import bellaImage from './assest/R.jpeg';
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'jasmin',
      price: 20.99,
      description: 'just like jasmin in your near',
      imageUrl: jasminImage, // Use the imported image
    },
    {
      id: 2,
      name: 'bella',
      price: 34.99,
      description: 'enhance your room with fragnance of bella.',
      imageUrl: bellaImage, // Use a placeholder or another imported image
    },
    {
      id: 3,
      name: 'tulip',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
    {
      id: 3,
      name: 'tulip',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
    {
      id: 5,
      name: 'mongra',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
    {
      id: 6,
      name: 'agar',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
    {
      id:7,
      name: 'lilly',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
    {
      id: 8,
      name: 'daisy',
      price: 38.99,
      description: 'feels like in the feild of tulip.',
      imageUrl: bellaImage,
    },
  ];

  return (
    <div className="product-list" id='productilist'>
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
