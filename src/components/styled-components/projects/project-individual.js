import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(245, 245, 245);
  padding: 10px;
  box-shadow: 0 11px 15px 0 rgba(18, 17, 13, 0.1);
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const Img = styled.img`
  width: 50%;
`;
export const Name = styled.span`
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
`;
export const Element = styled.span`
  background-color: rgb(240, 240, 240);
  color: rgb(120, 120, 120);
  font-weight: lighter;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
