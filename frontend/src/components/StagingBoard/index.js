import React, { useEffect, useState } from 'react';
import './index.css';
import addTummy from './addToTummy.png';
import {Link} from 'react-router-dom';  

export function StagingBoard() {
  const [calculationResult, setCalculationResult] = useState(null);
  useEffect(() => {
    // Fetch the calculation result 
    const fetchDataFromDatabase = async () => {
      try {
        const response = await fetch('your-backend-api-url');
        const data = await response.json();
        setCalculationResult(data.result); // Assuming 'result' is the property containing the calculation result
      } catch (error) {
        console.error('Error fetching data from the database:', error);
        setCalculationResult(null);
      }
    };
    fetchDataFromDatabase();
  }, []);
  
  
  return (
    <div className="staging-board">
      <div className="container">

        <div className="section">
          <div className="display">Protein</div>
        </div>

        {calculationResult !== null && (
          <div className="section">
            <div className="display">{calculationResult}</div>
          </div>
        )}

        <div className="section">
          <div className="display">Fat</div>
        </div>

        {calculationResult !== null && (
          <div className="section">
            <div className="display">{calculationResult}</div>
          </div>
        )}

        <div className="section">
          <div className="display">Carbohydrate</div>
        </div>

        {calculationResult !== null && (
          <div className="section">
            <div className="display">{calculationResult}</div>
          </div>
        )}
        
      </div>

      <div className="add-Tummy">
          <Link to="/Suggestions">
            <img src={addTummy} alt="addTummy" />
          </Link>
      </div>
    </div>
  );
}
