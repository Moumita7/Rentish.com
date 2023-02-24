import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import {reducer as AuthReducer } from './AuthReducer/reducer';
// import { AdminReducer, AdminProductReducer } from "./AdminReducer/AdminReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    AuthReducer
//   AuthReducer,

});

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export { store };