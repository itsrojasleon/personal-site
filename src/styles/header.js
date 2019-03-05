import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgb(240, 240, 240);
  width: 100%;
  color: rgb(47, 47, 47);
`;
export const Nav = styled.nav`
  width: 75%;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 6px;
  box-sizing: border-box;
  @media (max-width: 769px) {
    grid-template-areas:
      'logo icons'
      'links links';
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 55px;
  border-radius: 4px;
  @media (max-width: 769px) {
    width: 60px;
  }
`;

// Same style for burger
const burgerStyle = css`
  width: 24px;
  height: 30px;
  position: relative;
  background: transparent;
  border: none;
  margin: 0;
  cursor: pointer;
  display: block;
  float: right;
  padding: 0;
  top: -2px;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: none;
  &:focus {
    outline: 0;
  }
`;
const burgerStyleMedia = css`
  display: block;
  justify-self: end;
  grid-area: icons;
`;
export const Burger = styled.button`
  ${burgerStyle}
  &::before {
    content: '';
    opacity: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }
  @media (max-width: 769px) {
    ${burgerStyleMedia}
  }
`;
export const Line = styled.span`
  width: 100%;
  height: 2px;
  background: #000;
  transition: 0.4s;
  display: block;
  position: relative;
  cursor: pointer;
  &::before {
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.4s ease;
    top: -6px;
    content: '';
    position: absolute;
    left: 0;
  }
  &::after {
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.4s ease;
    bottom: -6px;
    content: '';
    position: absolute;
    left: 0;
  }
`;
export const BurgerActive = styled.button`
  ${burgerStyle}
  &::before {
    opacity: 1;
    width: 20px;
    height: 20px;
    content: '';
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }
  > ${Line} {
    background: transparent;
    width: 100%;
    height: 2px;
    transition: all 0.4s ease;
    display: block;
    position: relative;
  }
  > ${Line}::before {
    top: 0;
    transform: rotate(225deg);
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.4s ease;
    content: '';
    position: absolute;
    left: 0;
  }
  > ${Line}::after {
    bottom: 0;
    transform: rotate(-225deg);
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.4s ease;
    content: '';
    position: absolute;
    left: 0;
  }
  @media (max-width: 769px) {
    ${burgerStyleMedia}
  }
`;

// Same style for for List
const listStyle = css`
  list-style: none;
  display: flex;
  justify-self: end;
`;
export const List = styled.ul`
  ${listStyle}
  @media(max-width: 769px) {
    display: none;
  }
`;
export const ListActive = styled.ul`
  ${listStyle}
  @media(max-width: 769px) {
    width: 100%;
    padding: 0;
    margin: 0;
    display: block;
    grid-area: links;
    margin-top: 1.5em;
  }
`;
// Same Style for Link and LinkSettings
const styleLink = css`
  font-size: 1.6em;
  width: 100%;
  display: block;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  box-sizing: border-box;
`;
const styleLinkMedia = css`
  color: black;
  text-decoration: none;
`;
export const Link = styled.li`
  color: black;
  transition: 0.3s;
  margin-right: 1.4em;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 769px) {
    ${styleLink}
    &:hover {
      background-color: rgb(231, 232, 232);
      ${styleLinkMedia}
    }
  }
`;
export const LinkSettings = styled.i`
  font-size: 1.1em;
  transition: 0.3s;
  text-align: center;
  background: none;
  align-self: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 769px) {
    ${styleLink}
    &:hover {
      ${styleLinkMedia}
    }
  }
`;
