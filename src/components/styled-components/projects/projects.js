import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  grid-gap: 10px;
  grid-auto-flow: dense;
`;
