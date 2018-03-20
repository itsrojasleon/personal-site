import React, { Component } from 'react'

import Social from '../components/social'
import Name from '../components/name'

import { Container, I } from '../styles/header'

export default class Header extends Component {
  state = { menu: false }

  handleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    return (
      <Container>
        <Name />
        {!this.state.menu ? <I onClick={this.handleMenu} className="fas fa-bars"></I>
        : <I onClick={this.handleMenu} className="fas fa-times"></I>}
        <Social hide={this.state.menu} />
      </Container>
    )
  }
}
