import styled from 'styled-components';

export const A = styled.a`
  color: rgb(149, 149, 149);
  font-size: 21px;
  margin-right: 20px;
  transition: 0.2s;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  &:hover {
    color: black;
  }
  @media (max-width: 769px) {
    margin-top: 15px;
  }
`;
export const I = styled.i``;
