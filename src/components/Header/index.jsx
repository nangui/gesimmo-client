import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      </header>
    )
  }
}

export default Header;
