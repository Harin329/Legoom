import React, { useState } from 'react';
import './SearchFood.css'; 
import carrotImage from './carrot.png'; 
import searchImage from './search.png';

export function SearchFood({ searchFood, handleSearchFoodChange, handleSearchClick }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleSearchFoodChange(event);
  };

  const handleInputFocus = () => {
    setInputValue('');
  };

  return (
    <div className="input-container">
      <div className="carrot-container">
        <img src={carrotImage} alt="carrot" className="carrot-image" />
      </div>
      <div className="search-input-container">
        <input
          type="text"
          id="searchfood"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Search Food Item"
          className="search-input" 
        /> 

        <button className="search-button" onClick={handleSearchClick}>
          <img src={searchImage} alt="search" className="search-icon" />
        </button>
      </div>
    </div>
  );
}
