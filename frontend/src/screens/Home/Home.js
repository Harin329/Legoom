// src\screens\Home\Home.js
import React from 'react';
import './Home.css'; // Create this CSS file in the same directory
import {Link} from 'react-router-dom';  
import getStarted from '../../assets/getStarted.png';
import Layout from '../../components/Layout/Layout';
import homepic from '../../assets/homepic.jpg'

function Home() {
  return (
      <Layout>
      {/* Add my webpage content here */}
      <div className="component">
        <ul className="info">
          <div className="title-home"> Nourish to Flourish</div>
          <div className="text-home">
              Eating isn't just about satisfying hunger - it's about feeding our futures. With each bite, we're shaping our health, our moods, and our overall well-being. Dive in with us and discover the joy of eating right, not just for the now, but for all the tomorrows to come.
          </div>

          <div className="get-started">
            <Link to="/Calculate">
              <img src={getStarted} alt="Get Started" />
            </Link>
          </div>
        </ul>

      <div className="home-image" >
      <img src={homepic} alt="homepic" style={{ objectFit: 'cover', width: '100%', height: '100%'  }} />
      </div>  


      </div>
      </Layout>
  );
}

export default Home;