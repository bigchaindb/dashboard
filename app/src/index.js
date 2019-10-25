import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/index';
import setupSocket from './services/sockets';

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

setupSocket(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
