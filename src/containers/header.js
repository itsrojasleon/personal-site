import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';
import logo from '../icon-rojas.svg';
import './index.css';

class Header extends Component {
  render() {
    // toggleMenu is the function
    // toggle is the value
    const { toggleMenu, toggle } = this.props;
    return (
      <header className="header">
        <nav className="nav">
          <Link className="logo" to="/">
            <img className="image-logo" src={logo} alt="Rojas León" />
          </Link>
          <i onClick={toggleMenu} className={toggle ? 'fa fa-bars' : 'fa fa-times'}></i>
          <div className={`links ${toggle}`}>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'rgb(222,0,62)' }} className="link-header" to="/about">About</NavLink>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'rgb(222,0,62)' }} className="link-header" to="/portfolio">Portfolio</NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ toggle }) => ({
  toggle,
});
export default connect(mapStateToProps, { toggleMenu })(Header);
