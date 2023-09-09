// RecipeUrlInput.js

import React, {handleAddClick} from 'react';
import './RecipeUrlInput.css';
import linkChainImage from './linkChain.png'; // Import the image

export function RecipeUrlInput({ recipeUrl, handleRecipeUrlChange, handleAddClick  }) {
  return (
    <div className="recipe-input-container">
        <img src={linkChainImage} alt="Link Chain" className="link-chain-image" />
      <input
        type="text"
        id="recipeUrl"
        value={recipeUrl}
        onChange={handleRecipeUrlChange}
        placeholder="Upload Recipe URL"
        className="search-input" // Add a class for input styling
      />
      <button className="add-button" onClick={handleAddClick}>Add</button>
    </div>

  );
}

