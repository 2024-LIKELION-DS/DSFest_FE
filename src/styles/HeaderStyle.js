import styled, { keyframes } from "styled-components";

const menuBarAnimation = keyframes`
  0% {
    transform: translateY(8px) rotate(45deg);
  }
  50% {
    transform: translateY(8px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const menuBarAnimation2 = keyframes`
  0% {
    transform: translateY(-8px) rotate(-45deg);
  }
  50% {
    transform: translateY(-8px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const activeMenuBarAnimation1 = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(8px) rotate(0);
  }
  100% {
    transform: translateY(8px) rotate(45deg);
  }
`;

const activeMenuBarAnimation2 = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-8px) rotate(0);
  }
  100% {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px 24px 7px 24px;
  height: 48px;
`;

export const HeaderLogo = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const HeaderLogoBack = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  width: 30px;
  height: 30px;
  padding: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.$isVisible ? "rgba(255, 255, 255, 0.8)" : "none")};
  border-radius: 12px;
  box-shadow: ${(props) => (props.$isVisible ? "0 4px 4px rgba(47, 123, 209, 0.25)" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`;

export const MenuTrigger = styled.a`
  position: relative;
  width: 25px;
  height: 19px;
  display: inline-block;
  transition: all 0.5s;
  box-sizing: border-box;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2.5px;
    background-color: ${(props) => (props.$isVisible ? "#448BDB;" : "#fff;")};
    transition: all 0.5s;
  }

  span:nth-of-type(1) {
    top: 0;
    animation: ${menuBarAnimation} 1s forwards;
  }

  span:nth-of-type(2) {
    top: 8px;
  }

  span:nth-of-type(3) {
    bottom: 0;
    animation: ${menuBarAnimation2} 1s forwards;
  }

  &.active-7 span:nth-of-type(1) {
    animation: ${activeMenuBarAnimation1} 1s forwards;
  }

  &.active-7 span:nth-of-type(2) {
    opacity: 0;
  }

  &.active-7 span:nth-of-type(3) {
    animation: ${activeMenuBarAnimation2} 1s forwards;
  }
`;

export const DropdownContainer = styled.div`
  z-index: 2500;
  position: absolute;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  width: 147px;
  top: 103px;
  right: 24px;
  padding: 12px 0;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.div`
  width: calc(100% - 48px);
  height: 38px;
  padding: 0 24px;
  color: #448bdb;
  font-family: "Prompt";
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 400ms;
  &:hover {
    color: #1b66bb;
    background-color: rgba(47, 123, 209, 0.2);
    transition: ease-in-out 400ms;
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: none;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
