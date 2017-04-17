import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';
import rootReducer from './state/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
	rootReducer,
	{},
	composeEnhancers(
	  applyMiddleware(thunk)
	),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);