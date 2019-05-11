import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  padding: 10px;
  transition: 0.2s;
  grid-row-end: ${props => props.spans && `span ${props.spans}`};
  &:hover {
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  padding: 0;
  grid-row-end: 2;
  border-radius: 10px;
`;
export const Content = styled.div`
  padding: 10px;
`;
