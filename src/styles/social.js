import styled from 'styled-components'

export const Banner = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 16px;
  justify-items: center;
  align-items: center;
`
export const SocialName = styled.a`
  color: #9da0a4;
  text-decoration: none;
  transition: .2s;
  &:hover {
    color: #000;
  }
`
export const Icon = styled.i`

`
