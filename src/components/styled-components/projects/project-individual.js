import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 20px auto 150px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(245, 245, 245);
  padding: 10px;
  box-shadow: 0 11px 15px 0 rgba(18, 17, 13, 0.1);
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const Img = styled.img`
  width: 80%;
  border-radius: 10px;
  padding: 5px;
  margin: auto;
  @media (max-width: 769px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
export const Name = styled.span`
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
`;
export const Icon = styled.div`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 50%;
  padding: 10px;
`;
export const Go = styled.a`
  text-decoration: none;
  color: black;
  font-size: 19px;
  transition: 0.2s;
  &:hover {
    color: rgb(50, 158, 255);
  }
`;
export const List = styled.div`
  display: flex;
  align-items: center;
`;
export const Element = styled.span`
  color: #1890ff;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  font-weight: lighter;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
