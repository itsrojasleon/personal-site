import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 100px auto 200px auto;
  @media (max-width: 769px) {
    margin-top: 0;
    margin-bottom: 180px;
  }
`;
export const Char = styled.span`
  color: rgb(50, 158, 255);
`;
export const Description = styled.span`
  color: rgb(100, 100, 100);
`;
