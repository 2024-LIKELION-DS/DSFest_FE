import styled from "styled-components";

export const Background = styled.div`
  background: black;

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Modal = styled.div`
  position: relative;
  top:0px;
  display:flex;
  justify-content:center;
  width: 50vw;
  height: 50vh;

  @media (hover: hover) and (pointer: fine) {
    position: relative;
    top:0px;
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
position: absolute;
top: 3rem; // 모달의 상단 오른쪽에 위치
right: 1rem; // 왼쪽에서 오른쪽으로 변경
background: transparent;
border: none;
font-size: 24px;
cursor: pointer;
color: white;
`;

export const text = styled.div`
position: absolute;
top: 3rem; // 모달의 상단 오른쪽에 위치
background: transparent;
border: none;
font-size: 24px;
cursor: pointer;
color: white;
`;



