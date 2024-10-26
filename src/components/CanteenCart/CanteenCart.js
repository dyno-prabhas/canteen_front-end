import React, { useContext } from 'react';
import { CanteenContext } from '../../context/CanteenContext';
import './CanteenCart.css';
import CartTile from '../CartTile.js/CartTile';
import EmptyCart from '../EmptyCart/EmptyCart';


const CanteenCart = () => {
  const { canteenItems, clearCart } = useContext(CanteenContext);

  const handleCheckout = () => {
    
    alert('Checkout successful!');
    clearCart();
  };

  const calculateTotal = () => {
    return canteenItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div >
      <div className="cart-container">
      {canteenItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-items">
          {canteenItems.map((item) => (
            <div key={item.id}>
              <CartTile item = { item }/>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${calculateTotal()}</h2>
            <button  className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CanteenCart;
