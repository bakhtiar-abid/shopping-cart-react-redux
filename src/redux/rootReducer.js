import { combineReducers } from "redux";


import shoppingReducer from './shoppingCart/shoppingReducer';

const rootReducer = combineReducers({
   shoppingCart: shoppingReducer,
//    dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
