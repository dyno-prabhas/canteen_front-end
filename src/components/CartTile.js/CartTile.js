import React, { useContext } from 'react'
import './CartTile.css'
import { CanteenContext } from '../../context/CanteenContext';

function CartTile({ item }) {

    const { incrementItem, decrementItem, removeItemFromCart } = useContext(CanteenContext);



  return (
    <div>

<div class="cart-item-container">
    <div class="cart-item">
        <div class="cart-item-image">
            <img src={item.image} alt={item.title} class="image" />
        </div>
        <div class="cart-item-details">
            <h3 class="item-title">{ item.title }</h3>
            <p class="item-quantity">Quantity: { item.quantity }</p>
            <button onClick={() => removeItemFromCart(item.id)} class="remove-button">REMOVE</button>
        </div>
    </div>
    <div class="cart-item-price">
        <h3 class="price">${ item.price }</h3>
        <div class="quantity-controls">
            <button onClick={() => decrementItem(item.id)} class="quantity-button">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementItem(item.id)} class="quantity-button">+</button>
        </div>
    </div>
</div>
    <div class="divider"></div>

</div>

  )
}

export default CartTile