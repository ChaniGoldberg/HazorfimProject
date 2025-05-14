import React from 'react';
import '../../styles/Navbar2.css';
import Logo from './components/Logo.js';
import NavLinks from './components/NavLinks.js'; 
import Search from './components/Search.js'; 

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo className="logo" />
      </div>
      <div className="navbar-center">
        <NavLinks />
      </div>
      <div className="navbar-right">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar2;
