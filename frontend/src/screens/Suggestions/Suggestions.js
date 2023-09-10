// src/screens/Suggestions/Suggestions.js
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Suggestions.css';
import viewboard from '../../assets/viewboard.png';
import {Link} from 'react-router-dom';  


function Suggestions() {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
     // Fetch data from the backend 
    const fetchDataFromBackend = async () => {
      try {
        // API call
        const response = await fetch('backend-api-url');
        const data = await response.json();
        setSuggestions(data); // Assuming data is an array of objects
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        setSuggestions([]);
      }
    };
    fetchDataFromBackend();
  }, []);

  return (
    <Layout>
      <div className="Suggestions">
        {/* Add your webpage content here */}
        <div className="title-suggestions">Chef Recommends</div>

        {/* Flexbox container for the boxes */}
        <div class="wrapper">
        <div className="flex-container-suggestion">
          {suggestions.map((suggestion, index) => (
              <div className="suggestion-box" key={index}>
                <img src={suggestion.imageUrl} alt={suggestion.title} />
                <p>{suggestion.title}</p>
              </div>
            ))}
          {/* If there is no data, display a default set of boxes */}
          {suggestions.length === 0 && (
            <>
              <div className="suggestion-box">
                <img src="default-image-url-1" className='img-recommend' alt="Default Image 1" />
                <div className='text-recommend'>Default Suggestion 1</div>
              </div>
              <div className="suggestion-box">
                <img src="default-image-url-2" className='img-recommend' alt="Default Image 2" />
                <div className='text-recommend'>Default Suggestion 2</div>
              </div>
              <div className="suggestion-box">
                <img src="default-image-url-3" className='img-recommend' alt="Default Image 3" />
                <div className='text-recommend'>Default Suggestion 3</div>
              </div>
              <div className="suggestion-box">
                <img src="default-image-url-4" className='img-recommend' alt="Default Image 4" />
                <div className='text-recommend'>Default Suggestion 4</div>
              </div>
              <div className="suggestion-box">
                <img src="default-image-url-5" className='img-recommend' alt="Default Image 5" />
                <div className='text-recommend'>Default Suggestion 5</div>
              </div>
              <div className="suggestion-box">
                <img src="default-image-url-6" className='img-recommend' alt="Default Image 6" />
                <div className='text-recommend'>Default Suggestion 6</div>
              </div>
            </>
          )}
        </div>
        </div>
      </div>

      <div className="viewboard-image">
            <Link to="/Collection">
              <img src={viewboard} alt="View Board" />
            </Link>
          </div>
    </Layout>
  );
}

export default Suggestions;
