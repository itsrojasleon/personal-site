import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  justify-content: center;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;
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
`
