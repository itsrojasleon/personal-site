import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  width: 88%;
  margin: auto;
  bottom: 0;
  height: auto;
  @media (max-width: 769px) {
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const By = styled.p`
  font-size: 18px;
  color: rgb(122,123,123);
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

// SocialItem.js Component
// components/SocialItem.js
export const SocialMedia = styled.a`
  font-size: 1.8em;
  color: #000;
  text-decoration: none;
`;
