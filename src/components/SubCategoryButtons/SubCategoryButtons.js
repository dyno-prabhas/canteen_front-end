// SubCategoryButtons.js
import React from 'react';
import './SubCategoryButtons.css';

const SubCategoryButtons = ({ categories, selectedSubCategory, onSubCategoryChange }) => {
  return (
    <div className="subcategory-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`subcategory-button ${selectedSubCategory === category ? 'active' : ''}`}
          onClick={() => onSubCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SubCategoryButtons;
