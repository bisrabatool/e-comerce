

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
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = ({ products }) => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id.toString() === id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-detail">
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetail;
