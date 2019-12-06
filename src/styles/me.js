import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  & > div {
    font-size: 27px;
    font-weight: 300;
    line-height: 40px;
  }
  & > div p > strong {
    font-weight: 500;
    color: rgb(231, 67, 125);
  }
  @media (max-width: 769px) {
    margin: 50px auto;
  }
`;
