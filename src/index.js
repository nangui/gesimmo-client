import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Import your main (page components like Login, Register, ...) component here
import Header from './components/Header'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Bailleur from './components/Bailleur'
import Bien from './components/Bien'

// css and scss files
import 'bootstrap/dist/css/bootstrap.css'; // Put all of your css or scss files below this line

// Service worker file it is very help full if you would to build an spa with offline capability 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div className="main-wrapper">
      <Header />
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
