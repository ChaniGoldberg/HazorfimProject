import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/nav2/Navbar2.js';
import LoginPopup from './components/loginPopup/LoginPopup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './components/routers/routers.js';
import DisplayCategory from './components/categoryPage/components/CategoryDisplay.js';
import CategoryDisplay from './components/categoryPage/components/CategoryDisplay.js';
function App() {
  return (
<>
  <AppRoutes></AppRoutes>
<Navbar2></Navbar2>
{/* <CategoryDisplay categoryName="קידוש ויין" />
<CategoryDisplay categoryName="שולחן שבת" /> */}
{/* <LoginPopup></LoginPopup> */}
</>
  );
}

export default App;
