// src/screens/About/About.js
import React from 'react';
import Layout from '../../components/Layout/Layout'; // Import the Layout component

function About() {
  return (
    <Layout>
      {/* Add About page content here */}
      <div className="about-page">
        <h1>About Us</h1>
        <p>Some information about your company or project...</p>
      </div>
    </Layout>
  );
}

export default About;