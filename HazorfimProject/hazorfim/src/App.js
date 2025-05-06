import logo from './logo.svg';
import './App.css';
import Links from './components/nav1/Links1';
import Branches from './components/nav1/Branches';
import Basket from './components/nav1/Basket';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import {createStore,combineReducers} from 'redux';
import rootReducer from './redux/Store';
import PayWithGoogle from './components/nav1/PayWithGoogle';
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {
  return (
    <div>
      <Provider store={Store}>
        <Links></Links>
        {/* <Branches></Branches>
        <Basket></Basket> */}
       {/* <PayWithGoogle></PayWithGoogle> */}
        <ScrollToTopButton></ScrollToTopButton>
        </Provider>
    </div>
  );
}

export default App;
