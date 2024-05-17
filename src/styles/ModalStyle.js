import styled from "styled-components";

export const Modal = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100% + 183px);

  @media (hover: hover) and (pointer: fine) {
    width: 360px;
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

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  display: block;
  margin-bottom: 183px;
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
