import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={ logo } width="60" height="40" alt="A logo for our application"/>
          </Link>
        </div>
        <div className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <ul className="nav navbar-nav list-inline navbar-left">
              <li className="list-inline-item">
                <button className="button-menu-mobile open-left">
                  <i className="fa fa-hamburger"></i>
                </button>
              </li>
              <li className="list-inline-item">
                <h4 className="page-title">Tableau de bord</h4>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
