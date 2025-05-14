import logo from './logo.svg';
import './App.css';
import Nav1 from './components/nav1/Nav1';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import { ThemeProvider } from './components/globalComponants/ThemeContext'; // Import the ThemeProvider
import ScrollToTopButton from './components/globalComponants/ScrollToTopButton'; // Import the ScrollToTopButton
function App() {
  
  return (
    <div>
      <Provider store={Store}>
        <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ThemeProvider>
          <Nav1 />
          {/* Other components */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
