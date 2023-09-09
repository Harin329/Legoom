// src\screens\Home\Home.js
import React from 'react';
import './Home.css'; // Create this CSS file in the same directory
import {Link} from 'react-router-dom';  
import getStarted from '../../assets/getStarted.png';
import Layout from '../../components/Layout/Layout';


function Home() {
  return (
      <Layout>
      {/* Add my webpage content here */}
      <div className="title">
          <h1>Nourish to Flourish</h1>
        </div>

      <div className="text">
        <p>
          Eating isn't just about satisfying hunger - it's about feeding our futures. With each bite, we're shaping our health, our moods, and our overall well-being. Dive in with us and discover the joy of eating right, not just for the now, but for all the tomorrows to come.
        </p>
      </div>

      <div className="get-started">
          <Link to="/Calculate">
            <img src={getStarted} alt="Get Started" />
          </Link>
        </div>
        </Layout>
  );
}

export default Home;