import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const Name = styled.span`
  font-weight: 500;
  margin-top: 10px;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  background-color: rgb(240, 240, 240);
  width: auto;
`;
