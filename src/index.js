import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createStore,applyMiddleware,compose, } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
