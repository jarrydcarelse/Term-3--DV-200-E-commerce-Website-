import React from 'react';

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <div className="container">
        <div className="top-navbar-content">
          <div className="logo">
            <a href="/">My Logo</a>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
