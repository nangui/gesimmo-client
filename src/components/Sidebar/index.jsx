import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">Main</li>
            <li className="active">
              <Link to="/">
              <i className="fas fa-tachometer-alt"></i> Dashboard
              </Link>
            </li>
            <li className="">
              <Link to="/bailleurs">
              <i className="fas fa-users"></i> Bailleurs
              </Link>
            </li>
            <li className="">
              <Link to="/biens">
              <i className="fas fa-funnel-dollar"></i> Biens
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
