import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  & > div {
    background-color: white;
    border-radius: 4px;
    padding: 10px;
  }
  & > div a {
    color: black;
  }
  & > div a > h4 {
    padding: 0;
    margin-bottom: 10px;
  }
`;
