import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  & > div > * {
    font-size: 40px;
    font-weight: 600;
  }
  & > div > p:first-child {
    font-weight: normal;
    margin-bottom: 50px;
  }
  & > div > p:first-child::after {
    content: '!';
    color: rgb(231, 67, 125);
  }
  & > span {
    font-size: 27px;
    font-weight: 300;
  }
  & > span > p:first-child::before {
    content: '- ';
    color: rgb(231, 67, 125);
  }
  & > span > p:last-child,
  & > span > p:first-child {
    line-height: 40px;
    font-weight: 300;
  }
  & > span > p > a {
    color: rgb(231, 67, 125);
    font-weight: bolder;
  }
  & > span > p > strong {
    font-weight: 500;
  }
  @media (max-width: 769px) {
    margin: 50px auto;
  }
`;
