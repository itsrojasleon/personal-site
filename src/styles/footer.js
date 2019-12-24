import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
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
  /* color: rgb(90, 91, 103); */
  font-weight: normal;
  @media (max-width: 769px) {
    margin-bottom: 5px;
  }
`;
export const Email = styled.a`
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 769px) {
    margin-bottom: 5px;
  }
`;

export const A = styled.a`
  font-size: 21px;
  margin-right: 20px;
  transition: 0.2s;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  @media (max-width: 769px) {
    margin-top: 15px;
  }
`;
