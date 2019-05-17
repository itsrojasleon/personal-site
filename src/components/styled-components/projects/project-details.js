import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 10px;
  transition: 0.2s;
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  padding: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 11px 15px 0 rgba(18, 17, 13, 0.1);
  border: 1px solid rgb(240, 240, 240);
`;
export const Content = styled.div`
  display: flex;
  background-color: white;
  cursor: pointer;
  padding: 20px 10px 20px 10px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  padding: 6px 12px;
  background: black;
  border-radius: 6px;
  text-align: center;
  width: 100%;
  opacity: 0.7;
  transition: 0.3s;
  text-decoration: none;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
export const Url = styled.div`
  background-color: black;
  padding: 6px 12px;
  border-radius: 13px;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
export const Icon = styled.i`
  color: white;
  margin-right: 5px;
`;
export const A = styled.a`
  color: white;
  font-weight: bolder;
  text-decoration: none;
`;
