import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from './logo.png'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header className="header shadow-sm">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={ logo } width="60" height="40" alt="A logo for our application"/>
          </Link>
        </div>
        <div className="page-title-box pull-left">
          <h3>Gesimmo</h3>
        </div>
        <HashLink className="mobile_btn_left" id="mobile_btn" to="#sidebar">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </HashLink>
      </header>
    )
  }
}

export default Header;
