import React, { useContext } from 'react';
import '../../styles/Nav1.css';
import { TiUserAddOutline, TiLocationOutline, TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import Branches from './Branches';
import Basket from './Basket';
import AccountComponent from './AccountComponent ';
import Favorites from './Favorites';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeContext from '../globalComponants/ThemeContext';

const Nav1 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router className={theme}> {/* Apply the theme class here */}
      <div className={`navbar ${theme}`}>
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
          {/* Toggle Theme Button */}


        </div>
        <div className="navbar-left" id='conect'>
          <div className="logo">צור קשר:0747809175</div>
          
          <button onClick={toggleTheme}>
            {theme === "dark" ? "  Light  " : "  Dark  "}
          </button>
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
export default Nav1;
