import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';

import * as serviceWorker from './serviceWorker';

const Bien = () => {
  return <h1>Vous êtes sur la page des biens</h1>
};

const Bailleur = () => {
  return <h1>Vous êtes sur la page des Bailleurs</h1>
};

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <Navbar />
      <div>
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/biens" component={Bien} />
        <Route path="/bailleurs" component={Bailleur} />
      </div>
    </div>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
