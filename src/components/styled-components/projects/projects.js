import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 140px;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  grid-gap: 0 10px;
  grid-auto-flow: dense;
  grid-auto-rows: 10px;
`;
