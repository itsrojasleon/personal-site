import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: auto;
`
export const Description = styled.div`
  width: 80%;
  margin: auto;
  @media(max-width: 769px) {
    width: 90%;
    justify-content: center;
  }
`
export const ContainerInfo = styled.div`
  display: grid;
  grid-gap: 10px;
`
export const Greeting = styled.span`
  font-size: 40px;
  &::selection {
    background: black;
    color: white;
  }
`
export const AboutMe = styled.span`
  font-size: 25px;
  color: #9da0a4;
  font-weight: 300;
  &::selection {
    background: black;
    color: white;
  }
`
