import styled, { css } from 'styled-components';

export const HomeContainer = styled.div`
  width: 88%;
  margin: auto;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Description = styled.p`
  color: rgb(95, 96, 97);
  font-size: 1.8em;
  line-height: 1.7em;
  text-align: justify;
`;

// Same style to Github and Email link
const sameStyle = css`
  color: rgb(50, 158, 255);
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const Github = styled.a`
  ${sameStyle}
`;
export const Email = styled.a`
  ${sameStyle}
`;
export const ContainerCurrently = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  justify-items: center;
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SingleLine = styled.span`
  height: 1px;
  width: 100%;
  background-color: black;
  @media (max-width: 769px) {
    display: none;
  }
`;
export const Currently = styled.span`
  font-size: 1.4em;
  color: #424242;
  font-weight: lighter;
  text-align: center;
`;
