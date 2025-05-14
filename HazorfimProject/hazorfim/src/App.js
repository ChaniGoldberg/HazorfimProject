import logo from './logo.svg';
import './App.css';
import Nav1 from './components/nav1/Nav1';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js'
import { ThemeProvider } from './components/globalComponants/ThemeContext'; // Import the ThemeProvider
import ScrollToTopButton from './components/globalComponants/ScrollToTopButton'; // Import the ScrollToTopButton
import Navbar2 from './components/nav2/Navbar2.js';
import LoginPopup from './components/loginPopup/LoginPopup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './components/routers/AppRouters.js';
import DisplayCategory from './components/categoryPage/components/CategoryDisplay.js';
import CategoryDisplay from './components/categoryPage/components/CategoryDisplay.js';
import NavLinks from './components/nav2/components/NavLinks.js';
import AdBanner from './components/AdBanner/AdBanner.js';
function App() {
  
  return (
    <div>
      <Provider store={store}>
        <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ThemeProvider>
          <Nav1 />
          <Router>
        <AdBanner></AdBanner>
        <Navbar2></Navbar2>
        <AppRoutes /> {/* כל הניתובים שלך כאן */}
      </Router>
          {/* Other components */}
        </ThemeProvider>
      </Provider>
    </div>


  );
}

export default App;
