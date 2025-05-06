import React from 'react';
import '../../styles/Links1.css';
import { TiUserAddOutline, TiLocationOutline, TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import Branches from './Branches';
import Basket from './Basket';
import AccountComponent from './AccountComponent ';
import Favorites from './Favorites';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Links1 = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/Basket">
                <p>סל קניות</p>
                <TiShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="/AccountComponent">
                <p>כניסה</p>
                <TiUserAddOutline />
                <p></p>
              </Link>
            </li>
            <li>
              <Link to="/Favorites">
              <p>מועדפים</p>
                <TiHeartOutline />              
              </Link>
            </li>
            <li>
              <Link to="/Branches">
              <p>סניפים</p>
                <TiLocationOutline />    
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-left" id='conect'>
          <div className="logo">צור קשר:0747809175</div>
        </div>
      </div>
      <Routes>
        <Route path="/Basket" element={<Basket />} />
        <Route path="/AccountComponent" element={<AccountComponent />} />
        <Route path="/Branches" element={<Branches />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default Links1;