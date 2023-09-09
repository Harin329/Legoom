import React from 'react';
import './SearchFood.css'; // Import the CSS file for styling
import carrotImage from './carrot.png'; // Import the image
import searchImage from './search.png';

export function SearchFood({ recipeUrl, handleRecipeUrlChange, handleSearchClick }) {
  return (
    <div className="input-container">
      <img src={carrotImage} alt="carrot" className="carrot-image" />
      <input
        type="text"
        id="recipeUrl"
        value={recipeUrl}
        onChange={handleRecipeUrlChange}
        placeholder="Search Food Item"
        className="search-input" // Add a class for input styling
      />
      <button className="search-button" onClick={handleSearchClick}>
        <img src={searchImage} alt="search" className="search-icon" />
      </button>
    
    </div>

  );
}
