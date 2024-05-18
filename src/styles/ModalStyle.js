import styled from "styled-components";

export const Modal = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100% + 10rem);
  overflow: hidden;

  @media (hover: hover) and (pointer: fine) {
    width: 360px;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1rem;
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

  @media (hover: hover) and (pointer: fine) {
    margin-bottom: 0;
  }
`;

export const text = styled.div`
  position: absolute;
  top: 3rem;
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: white;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ArrowImg = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 0 0.1rem;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;
