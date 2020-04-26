import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './helpers/store';
import  ApplicationRoute  from "./routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ApplicationRoute />
    </Router>
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
