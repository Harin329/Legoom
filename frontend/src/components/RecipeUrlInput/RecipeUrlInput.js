import React from 'react';
import './RecipeUrlInput.css';
import linkChainImage from './linkChain.png'; 

export function RecipeUrlInput({ recipeUrl, handleRecipeUrlChange, handleAddClick }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleRecipeUrlChange(event);
  };

  const handleInputFocus = () => {
    setInputValue('');
  };

  return (
    <div className="recipe-input-container">
      <div className="link-chain-container">
        <img src={linkChainImage} alt="Link Chain" className="link-chain-image" />
      </div>
      <div className="search-input-container">
        <input
          type="text"
          id="recipeUrl"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Upload Recipe URL"
          className="search-input" // Add a class for input styling
        />
        <button className="add-button" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
}
