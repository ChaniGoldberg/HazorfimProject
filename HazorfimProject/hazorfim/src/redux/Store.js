import { applyMiddleware } from 'redux';
import validatorMidlleware from './midllewares/validatorMidlleware';
import {BasketReducer} from './Reducers/BasketReducer';
// import { createStore, applyMiddleware } from 'redux';
import {createStore,combineReducers} from 'redux';
import {thunk} from 'redux-thunk';


const rootReducer=combineReducers({
    basket:BasketReducer
})
// export const Store=createStore(rootReducer,applyMiddleware(validatorMidlleware));
export const Store = createStore(rootReducer, applyMiddleware(thunk));
export default rootReducer;





