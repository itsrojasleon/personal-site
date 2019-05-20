import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
