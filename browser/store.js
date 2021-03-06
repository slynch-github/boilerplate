import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
