import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../icon-rojas.svg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <Link to="/">
            <img width="30%" src={logo} alt="Rojas León" />
          </Link>
          <div className="links">
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'rgb(222,0,62)' }} className="link-header" to="/about">About</NavLink>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'rgb(222,0,62)' }} className="link-header" to="/portfolio">Portfolio</NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
