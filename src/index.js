import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './store/userReducer';
import switchReducer from './store/switchReducer';

const store = createStore(combineReducers({ user :userReducer, switchReducer }));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
