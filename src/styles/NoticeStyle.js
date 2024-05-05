import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #448bdb 0%, #6aacf3 100%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Notice = styled.div`
  width: 100vw;
  height: 100vh;

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    height: 100%;
  }
`;
