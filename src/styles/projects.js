import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  column-gap: 18px;
  row-gap: 18px;
  & > article {
    /* background-color: white; */
    border-radius: 4px;
    padding: 10px;
  }
  & > div a {
    /* color: black; */
  }
  & > div a > h4 {
    padding: 0;
    margin-bottom: 15px;
  }
  & > div > a > img {
    border-radius: 5px;
  }
  & > article > div {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > div a {
    font-size: 20px;
  }
`;
