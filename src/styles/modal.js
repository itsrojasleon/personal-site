import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  border-radius: 5px;
  width: 60%;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const Theme = styled.div`
  color: black;
  background-color: rgb(242, 243, 243);
  padding: 10px;
  text-align: center;
  font-size: 18px;
`;
export const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
