import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 23, 91, 0.7) 6%,
      rgba(19, 105, 191, 0.7) 46%,
      rgba(81, 111, 131, 0.7) 94%
    ),
    rgba(0, 0, 0, 0.4);
  background-color: #404040;

  @media (hover: hover) and (pointer: fine) {
    background: linear-gradient(
        to bottom,
        rgba(0, 23, 91, 0.7) 6%,
        rgba(19, 105, 191, 0.7) 46%,
        rgba(81, 111, 131, 0.7) 94%
      ),
      rgba(0, 0, 0, 0.4);
    background-color: none;
  }
`;

export const Admin = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ALogo = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 26px;
  cursor: pointer;
`;

export const Box = styled.div`
  margin-top: 27px;
  width: 90vw;
  height: calc(100vh - 26px - 120px - 32px);
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);

  @media (hover: hover) and (pointer: fine) {
    height: calc(100vh - 26px - 120px - 27px);
    margin-bottom: 54px;
  }
`;
