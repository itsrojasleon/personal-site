import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  & > div > p > span strong {
    font-weight: 500;
  }
  & > div > p > span strong::after {
    content: '! ';
    color: rgb(44, 148, 255);
  }
  & > div {
    font-size: 27px;
    font-weight: 300;
    line-height: 40px;
  }
  & > div p > strong {
    font-weight: 500;
    color: rgb(44, 148, 255);
    font-style: italic;
  }
  @media (max-width: 769px) {
    margin: 50px auto;
  }
`;
