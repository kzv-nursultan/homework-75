import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, 
  applyMiddleware, 
  compose, 
  combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { reducer } from './store/reducers/reducer';

const rootReducer = combineReducers({
   someReducer:reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhacer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer,enhacer);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render( app ,document.getElementById('root'));