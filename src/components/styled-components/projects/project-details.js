import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 10px;
  transition: 0.2s;
  border: 1px solid rgb(245, 245, 245);
  margin: 10px 0px 0px 0px;
  &:hover {
    box-shadow: 0 11px 15px 0 rgba(18, 17, 13, 0.1);
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  padding: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const Name = styled.span`
  font-size: 17px;
  font-weight: 600;
`;
export const StyledLink = styled(Link)`
  width: auto;
  color: black;
  text-decoration: none;
`;
export const StyledLinkExternal = styled.a`
  width: auto;
  background: black;
  border-radius: 50%;
  padding: 7px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.08);
  }
`;
export const Icon = styled.i`
  color: white;
  font-size: 15px;
`;
