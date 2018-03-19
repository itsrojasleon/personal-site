import React, { Component } from 'react'

import Social from '../components/social'
import Name from '../components/name'

import { Container } from '../styles/header'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Name />
        <Social />
      </Container>
    )
  }
}
