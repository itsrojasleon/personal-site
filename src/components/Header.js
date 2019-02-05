import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';
import logo from '../icon-rojas.svg';

import Modal from '../components/Modal';

import {
  HeaderWrapper,
  Nav,
  Image,
  Burger,
  BurgerActive,
  Line,
  List,
  ListActive,
  Link,
  LinkSettings
} from '../styles/header';

class Header extends Component {
  renderList = () => {
    const style = {
      textDecoration: 'none',
      color: 'black',
      fontSize: '21px'
    };
    return (
      <>
        <Link>
          <NavLink style={style} to="/about">
            About
          </NavLink>
        </Link>
        <Link>
          <NavLink style={style} to="/portfolio">
            Portfolio
          </NavLink>
        </Link>
        <LinkSettings className="fas fa-cog" />
      </>
    );
  };
  render() {
    // toggleMenu is the function
    // toggle is the value
    const { toggleMenu, toggle } = this.props;
    return (
      <HeaderWrapper>
        <Nav>
          <NavLink to="/">
            <Image src={logo} alt="Rojas León" />
          </NavLink>
          {toggle === true ? (
            <Burger onClick={toggleMenu}>
              <Line />
            </Burger>
          ) : (
            <BurgerActive onClick={toggleMenu}>
              <Line />
            </BurgerActive>
          )}
          {toggle === true ? (
            <List>{this.renderList()}</List>
          ) : (
            <ListActive>{this.renderList()}</ListActive>
          )}
        </Nav>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = ({ toggle }) => ({ toggle });

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Header);
