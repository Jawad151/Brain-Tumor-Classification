// Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a style={{fontSize:'100px'}} className="navbar-brand" >DetectX</a>
    
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" >Home </a>
          <a className="nav-item nav-link" >Features</a>
          <a className="nav-item nav-link" >Pricing</a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
