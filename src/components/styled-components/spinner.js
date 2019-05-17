import styled from 'styled-components';

export const Loader = styled.span`
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner 0.6s linear infinite;
  color: #ccc;
  top: 40%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
