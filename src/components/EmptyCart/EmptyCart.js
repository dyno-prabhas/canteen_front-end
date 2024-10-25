import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="cart-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" 
          alt="Empty Cart" 
          className="empty-cart-image"
        />
        <h2>Your Cart is Empty!</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="shop-button">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
