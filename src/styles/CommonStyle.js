import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageSpace = styled.div`
  width: 100vw;
  min-height: 100dvh;

  @media (hover: hover) and (pointer: fine) {
    width: 375px;
  }
`;
