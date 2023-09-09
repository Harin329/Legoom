// src/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './legoom.png';
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Your Logo" />
          </Link>

        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Calculate">Calculate</Link>
            </li>
            <li>
              <Link to="/Collection">Collection</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      {children}
    </div>
  );
}

export default Layout;