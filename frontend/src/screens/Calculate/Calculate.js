// src/screens/Calculate/Calculate.js
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Calculate.css';
import { RecipeUrlInput } from '../../components/RecipeUrlInput/RecipeUrlInput';
import { SearchFood } from '../../components/SearchFood/SearchFood';
import { MenuTags } from '../../components/MenuTags';
import { StagingBoard } from '../../components/StagingBoard';

function Calculate() {
  // State to store the input value
  const [recipeUrl, setRecipeUrl] = useState('');
  const [searchFood, setSearchFood] = useState('');
  const [addTummy, setAddTummy] = useState(false);

  // Function to handle changes in the input
  const handleRecipeUrlChange = (event) => {
    setRecipeUrl(event.target.value);
  };

  const handleSearchFoodChange = (event) => {
    setSearchFood(event.target.value);
  };

  return (
    <div>
      <Layout />
      <div className="calculate">
        <div className="text-calculate">
          <div className="title-calculate">
            Translate into Goodness
          </div>

          <div className="inputs">
            <RecipeUrlInput recipeUrl={recipeUrl} handleRecipeUrlChange={handleRecipeUrlChange} />
            <SearchFood searchFood={searchFood} handleSearchFoodChange={handleSearchFoodChange} />
            <MenuTags />
          </div>

        </div>
        <div className="nutrients">
          <StagingBoard addToTummy={addTummy} />
        </div>
      </div>
    </div>
  );
}

export default Calculate;
