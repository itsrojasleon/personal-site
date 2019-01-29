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
          <button
            onClick={toggleMenu}
            className={toggle === true ? 'burger' : 'burger-active'}>
            <span className={`line`} />
          </button>
          <ul className={toggle === true ? 'list' : 'list-active'}>
            <li>
              <NavLink className={`link`} to="/about">
                About
              </NavLink>
              <NavLink className={`link`} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = ({ toggle }) => ({
  toggle
});
export default connect(
  mapStateToProps,
  { toggleMenu }
)(Header);
