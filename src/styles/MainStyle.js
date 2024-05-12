import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #3177c6 6%, #83beff 46%, #ffffff 94%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    height: 100%;
  }
`;