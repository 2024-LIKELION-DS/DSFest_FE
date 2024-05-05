import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #00175b 6%, #1369bf 46%, #516f83 94%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Photo = styled.div`
  width: 100vw;
  height: 100vh;

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    height: 100%;
  }
`;
