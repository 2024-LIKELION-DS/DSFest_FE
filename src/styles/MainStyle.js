import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #3177c6 6%, #83beff 46%, #ffffff 94%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Main = styled.div`
  width: 100vw;
  min-height: calc(100vh - 183px);
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    min-height: calc(100% - 183px);
  }
`;
