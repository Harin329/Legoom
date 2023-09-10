// src\screens\Collection\Collection.js
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Collection.css'

function Collection() {

  const [collections, setCollections] = useState([]);

  useEffect(() => {
     // Fetch data from the backend 
    const fetchDataFromBackend = async () => {
      try {
        // API call
        const response = await fetch('backend-api-url');
        const data = await response.json();
        setCollections(data); // Assuming data is an array of objects
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        setCollections([]);
      }
    };
    fetchDataFromBackend();
  }, []);

  return (
      <Layout>
      <div className="Collection">
        <div className="title-collection">Your collections</div>

      <div class="wrapper">
        <div className="flex-container-collection">

          {/* If there is no data, display a default set of boxes */}
          {collections.length === 0 && (
            <>
              <div className="collection-box">
                <img src="default-image-url-1" className='img-recommend' alt="Default Image 1" />
                <div className='text-recommend'>Default collection 1</div>
              </div>
              <div className="collection-box">
                <img src="default-image-url-2" className='img-recommend' alt="Default Image 2" />
                <div className='text-recommend'>Default collection 2</div>
              </div>
              <div className="collection-box">
                <img src="default-image-url-3" className='img-recommend' alt="Default Image 3" />
                <div className='text-recommend'>Default collection 3</div>
              </div>
              <div className="collection-box">
                <img src="default-image-url-4" className='img-recommend' alt="Default Image 4" />
                <div className='text-recommend'>Default collection 4</div>
              </div>
              <div className="collection-box">
                <img src="default-image-url-5" className='img-recommend' alt="Default Image 5" />
                <div className='text-recommend'>Default collection 5</div>
              </div>
              <div className="collection-box">
                <img src="default-image-url-6" className='img-recommend' alt="Default Image 6" />
                <div className='text-recommend'>Default collection 6</div>
              </div>
            </> 
          )}
        </div>
        </div>
      </div>

         </Layout>




    
  );
}

export default Collection;