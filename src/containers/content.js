import React, { Component } from 'react'

import Info from '../components/info'

import {
  Container,
  Description
} from '../styles/content'

class Content extends Component {
  render() {
    return (
      <Container>
        <Description>
          <Info />
        </Description>
      </Container>
    )
  }
}
export default Content
