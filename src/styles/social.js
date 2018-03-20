import styled from 'styled-components'

export const Banner = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 16px;
  justify-items: center;
  align-items: center;
  @media(max-width: 769px) {
    display: ${ props => props.hide === false ? 'none' : 'flex'};
    background: red;
    flex-direction: column;
    width: 100%;
  }
`
export const SocialName = styled.a`
  color: #9da0a4;
  text-decoration: none;
  transition: .2s;
  padding-bottom: 2px;
  &:hover {
    color: #000;
  }
  &::selection {
    background: black;
    color: white;
  }
`
export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: flex-end;
  @media(max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 10px;
  }
`
export const Icon = styled.i`
  font-size: 30px;
  color: #000000;
`
export const Container = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  @media(max-width:769px) {
    width: 90%;
  }

  /*Here is*/
  height: 45vh;
  /*End here*/
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
