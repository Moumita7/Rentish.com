import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import {HomeReducer} from "./HomeReducer/reducer";

import {reducer as AdminReducer } from './AdminReducer/reducer';
import {reducer as AuthReducer } from './AuthReducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    AuthReducer,
    admin:AdminReducer,
    home:HomeReducer,

});

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export { store };