import logo from './logo.svg';
import './App.css';
import Links1 from './components/nav1/Links1';
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
          <Links1 />
          {/* Other components */}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
