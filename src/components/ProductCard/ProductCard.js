// ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addItemToCart }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <button
          className="add-to-cart"
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
