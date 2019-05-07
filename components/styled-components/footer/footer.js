import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 28px;
  background-color: rgb(249, 249, 249);
  width: 100%;
`;
export const Wrapper = styled.span`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
export const LeftSide = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: lighter;
  color: rgb(120, 120, 120);
`;
export const Name = styled.span`
  margin-bottom: 10px;
`;
export const Email = styled.a`
  color: rgb(50, 50, 50);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
