import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  background: rgb(249, 249, 249);
  height: 100vh;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
