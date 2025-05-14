import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/nav2/Navbar2.js';
import LoginPopup from './components/loginPopup/LoginPopup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './components/routers/AppRouters.js';
import DisplayCategory from './components/categoryPage/components/CategoryDisplay.js';
import CategoryDisplay from './components/categoryPage/components/CategoryDisplay.js';
import NavLinks from './components/nav2/components/NavLinks.js';
import AdBanner from './components/AdBanner/AdBanner.js';
import store from './redux/store.js';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
    <Provider store={store}>
       
     
      <Router>
        <AdBanner></AdBanner>
        <Navbar2></Navbar2>
        <AppRoutes /> {/* כל הניתובים שלך כאן */}
      </Router>
       </Provider>
    </>
  );
}

export default App;
