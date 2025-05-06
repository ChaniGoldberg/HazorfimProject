import { applyMiddleware } from 'redux';
import validatorMidlleware from './midllewares/validatorMidlleware';
import {BasketReducer} from './Reducers/BasketReducer';
import {FavoritesReducer} from './Reducers/FavoritesReducer';
// import { createStore, applyMiddleware } from 'redux';
import {createStore,combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import Favorites from '../components/nav1/Favorites';


const rootReducer=combineReducers({
    basket:BasketReducer,
    favorites:FavoritesReducer
})
// export const Store=createStore(rootReducer,applyMiddleware(validatorMidlleware));
export const Store = createStore(rootReducer, applyMiddleware(thunk));
export default rootReducer;





