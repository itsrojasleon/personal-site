import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
`;
export const Text = styled.span`
  font-size: 27px;
  font-weight: 200;
  color: rgb(100, 100, 100);
  line-height: 40px;
`;
export const Social = styled.strong`
  color: rgb(50, 158, 255);
  font-weight: 500;
  &::after {
    content: ' ';
  }
  &::before {
    content: ' ';
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
