// CanteenMenu.js
import React, { useContext, useState } from 'react';
import { CanteenContext } from '../../context/CanteenContext';
import SubCategoryButtons from '../SubCategoryButtons/SubCategoryButtons';

import ProductCard from '../ProductCard/ProductCard';

import './CanteenMenu.css';

const CanteenMenu = () => {
  const { addItemToCart } = useContext(CanteenContext);
  const [isCanteenSelected, setIsCanteenSelected] = useState(true);
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const canteenProducts = [
    { id: 1, title: 'Thums Up', price: 19.99, category: 'Beverages', img: 'https://images.moneycontrol.com/static-mcnews/2017/11/thums-up-770x433.jpg?impolicy=website&width=770&height=431' },
    { id: 2, title: 'Veg Sandwich', price: 39.99, category: 'Snacks', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Coca Cola', price: 29.99, category: 'Beverages', img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Chicken Wrap', price: 49.99, category: 'Snacks', img: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Chicken Wrap', price: 49.99, category: 'Snacks', img: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Chicken Wrap', price: 49.99, category: 'Snacks', img: 'https://via.placeholder.com/150' },
  ];

  const stationeryProducts = [
    { id: 7, title: 'Notebook', price: 5.99, category: 'Books', img: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Pen', price: 1.99, category: 'Supplies', img: 'https://via.placeholder.com/150' },
  ];

  const handleToggle = () => {
    setIsCanteenSelected(!isCanteenSelected);
    setSelectedSubCategory('All');
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const currentProducts = (isCanteenSelected ? canteenProducts : stationeryProducts).filter(
    (product) => selectedSubCategory === 'All' || product.category === selectedSubCategory
  );

  return (
    <div className="canteen-menu">
      <div className="heading">
        <p className="menu-title">{isCanteenSelected ? 'Canteen' : 'Stationery'} Products</p>
        <div className="toggle-container">
          <button onClick={handleToggle}>
            {isCanteenSelected ? 'Stationery' : 'Canteen'}
          </button>
        </div>
      </div>

      <SubCategoryButtons 
        categories={isCanteenSelected ? ['All', 'Beverages', 'Snacks'] : ['All', 'Books', 'Supplies']}
        selectedSubCategory={selectedSubCategory}
        onSubCategoryChange={handleSubCategoryChange}
      />

      <div className="container">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} addItemToCart={addItemToCart} />
        ))}
      </div>
    </div>
  );
};

export default CanteenMenu;
