import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  @media(max-width: 769px) {
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #ffddd5;
    margin-bottom: 50px;
  }
`
export const LogoName = styled.a`
  font-size: 48px;
  color: #000000;
  font-weight: bold;
  font-family: 'Dosis', sans-serif;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  &::selection {
    background: black;
    color: white;
  }
  @media(max-width: 769px) {
    margin-left: 20px;
  }
`
export const I = styled.i`
  display: none;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 769px) {
    display: grid;
    justify-self: right;
    margin-right: 20px;
  }
`
