import React, { useContext } from 'react';
import '../../styles/Nav1.css';
import { TiUserAddOutline, TiLocationOutline, TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import ThemeContext from '../globalComponants/ThemeContext';

const Nav1 = () => {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
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
      </div>
      <div className="navbar-left" id='conect'>
        <div className="logo">צור קשר:0747809175</div>
        
        <button onClick={toggleTheme}>
          {theme === "dark" ? "  Light  " : "  Dark  "}
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Nav1;
