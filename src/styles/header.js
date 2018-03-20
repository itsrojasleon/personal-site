import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  justify-content: center;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  grid-template-areas: "header header";
  @media(max-width: 769px) {
    padding-top: 0;
    width: 100%;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1fr;
  }
`
export const LogoName = styled.a`
  font-size: 48px;
  color: #000000;
  font-weight: bold;
  font-family: 'Dosis', sans-serif;
  text-decoration: none;
  grid-area: header;
  &:hover {
    cursor: pointer;
  }
  &::selection {
    background: black;
    color: white;
  }
`
export const I = styled.i`
  display: none;
  font-size: 30px;
  grid-area: header;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 769px) {
    display: grid;
    justify-self: right;
    margin-right: 20px;
  }
`
