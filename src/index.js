import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Home = () => {
  return <h1>THIS IS THE HOME PAGE</h1>
};

const About = () => {
  return <h1>THIS IS THE ABOUT PAGE</h1>
};

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/">Root Page</Link>
      </li>
      <li>
        <Link to="/home">Home Page</Link>
      </li>
      <li>
        <Link to="/about">About Page</Link>
      </li>
    </ul>
    <Route exact={true} path="/" component={ App } />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
