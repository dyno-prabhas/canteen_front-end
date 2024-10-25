import React, { useContext, useState } from 'react';
import { CanteenContext } from '../../context/CanteenContext';

import './CanteenMenu.css'


const CanteenMenu = () => {
  const { addItemToCart } = useContext(CanteenContext);
  const [isCanteenSelected, setIsCanteenSelected] = useState(true);

  const canteenProducts = [
    { id: 1, title: 'Product Title 1', price: 19.99, quatity: 1, img: 'https://images.moneycontrol.com/static-mcnews/2017/11/thums-up-770x433.jpg?impolicy=website&width=770&height=431' },
    { id: 2, title: 'Product Title 2', price: 29.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product Title 3', price: 39.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product Title 4', price: 49.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product Title 5', price: 49.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product Title 6', price: 49.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Product Title 7', price: 49.99, quatity: 1, img: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Product Title 8', price: 49.99, quatity: 1, img: 'https://via.placeholder.com/150' },
  ];

  const stationeryProducts = [
    { id: 9, title: 'Notebook', price: 5.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Pen', price: 1.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 12, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 14, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 15, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
    { id: 16, title: 'Pencil', price: 0.99, quantity: 1, img: 'https://via.placeholder.com/150' },
  ];

  const handleToggle = () => {
    setIsCanteenSelected(!isCanteenSelected);
  };


  const currentProducts = isCanteenSelected ? canteenProducts : stationeryProducts;

  return (
    <div>

        <div className='heading'>

          <p className='menu-title'>{isCanteenSelected ? 'Canteen' : 'Stationary'} Products</p>

          <div className="toggle-container">
          <button onClick={handleToggle}>
            {isCanteenSelected ? 'Stationery' : 'Canteen'}
          </button>
          </div>
        </div>
       
      <div className="container">

        {currentProducts.map((product) => (
          <div className="card" key={product.id}>
            <div className="image-container">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="price">${product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => addItemToCart(product)} 
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanteenMenu;
