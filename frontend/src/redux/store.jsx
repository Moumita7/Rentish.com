import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import {HomeReducer} from "./HomeReducer/reducer";
// import { reducer as AuthReducer } from './AuthReducer';
// import { AdminReducer, AdminProductReducer } from "./AdminReducer/AdminReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    home:HomeReducer
    // AuthReducer
//   AuthReducer,

});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))