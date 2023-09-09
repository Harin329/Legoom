// src\screens\Calculate\Calculate.js

import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Calculate.css';
import { RecipeUrlInput } from '../../components/RecipeUrlInput/RecipeUrlInput';
import { SearchFood } from '../../components/SearchFood/SearchFood';
import addToTummy from './addToTummy.png';
import { MenuTags } from '../../components/MenuTags';

function Calculate() {

  // State to store the input value
  const [recipeUrl, setRecipeUrl] = useState('');
  const [searchFood, setsearchFood] = useState('');


  // Function to handle changes in the input
  const handleRecipeUrlChange = (event) => {
    setRecipeUrl(event.target.value);
  };

  const handleSearchFoodChange = (event) => {
    setsearchFood(event.target.value);
  };
  return (
    <div>
      <Layout />
      <div className='calculate'>

        <div className='input'>
          <h1>Translate into Goodness</h1>
          {/* Input field for "Upload recipe URL" */}
          <RecipeUrlInput recipeUrl={recipeUrl} handleRecipeUrlChange={handleRecipeUrlChange} />
          {/* Input field for "Search Food" */}
          <SearchFood searchFood={searchFood} handleSearchFoodChange={handleSearchFoodChange} />
          <MenuTags />
        </div>
        <div className='nutrients'>
          Protein
        </div>
      </div>

      <button className="addToTummybutton">
        <img src={addToTummy} alt="addtotummy" className='addToTummy' />
      </button>
    </div>


  );
}

export default Calculate;