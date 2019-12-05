import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isWhite ? 'rgb(240,241,243)' : 'white')};
  border-top: 1px solid rgb(238, 239, 241);
  @media (max-width: 769px) {
    padding: 5px;
    flex-direction: column;
    align-items: center;
  }
`;
export const LeftSide = styled.span`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  margin-bottom: 10px;
  color: rgb(90, 91, 103);
  font-weight: normal;
  @media (max-width: 769px) {
    margin-bottom: 5px;
  }
`;
export const Email = styled.a`
  color: rgb(90, 91, 103);
  &:hover {
    text-decoration: underline;
    color: black;
  }
  @media (max-width: 769px) {
    margin-bottom: 5px;
  }
`;

export const A = styled.a`
  font-size: 21px;
  margin-right: 20px;
  transition: 0.2s;
  color: rgb(90, 91, 103);
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
