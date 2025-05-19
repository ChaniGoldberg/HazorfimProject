import logo from './logo.svg';
import './App.css';
import Nav1 from './components/nav1/Nav1';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js';
import { ThemeProvider } from './components/globalComponants/ThemeContext'; // Import the ThemeProvider
import ScrollToTopButton from './components/globalComponants/ScrollToTopButton'; // Import the ScrollToTopButton
import Navbar2 from './components/nav2/Navbar2.js';
import LoginPopup from './components/loginPopup/LoginPopup.js';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/routers/AppRouters.js';
import AdBanner from './components/AdBanner/AdBanner.js';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}

          <AdBanner />
          <Nav1 />
          <Navbar2 />
          <AppRoutes /> {/* כל הניתובים שלך כאן */}
        </Router>

        {/* Other components */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
