import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  border-bottom: 1px solid rgb(238, 239, 241);
  width: 100%;
`;
export const Nav = styled.nav`
  width: 100%;
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightSide = styled.div``;
export const A = styled(Link)`
  color: rgb(100, 100, 100);
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  margin-right: 26px;
  transition: 0.2s;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const Img = styled.img`
  width: 50%;
  border-radius: 4px;
`;
