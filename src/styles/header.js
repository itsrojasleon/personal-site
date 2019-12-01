import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);
  width: 100%;
`;
export const Nav = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightSide = styled.div``;
export const A = styled(Link)`
  color: rgb(60, 60, 60);
  text-decoration: none;
  font-size: 18px;
  font-weight: lighter;
  margin-right: 20px;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 50%;
  border-radius: 4px;
`;
