import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #2774cc 6%, #499ffc 46%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Map = styled.div`
  width: 100vw;
  min-height: calc(100vh - 183px);

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    height: 100%;
  }
`;

export const Mapimg = styled.img`
  width: 200px;
  height: 300px;
`;

export const Mapimgs = styled.div`
  display: flex;
  justify-content: center;
  object-fit: contain;
  margin-top: 10%;
`;

export const MapTitle = styled.div`
  &:after {
    content: " ";
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(255, 255, 255);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  &:before {
    content: " ";
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(255, 255, 255);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(255, 255, 255);
  font-size: 14px;
  margin: 8px 0px;
  margin-top: 12%;
  font-family: "AppleSDGothicNeo";
  font-style: normal;
  font-weight: 500;
`;

export const Mapline = styled.div`
  width: 90%;
  height: 1px;
  font-size: 14px;
  margin: 8px auto; /* 가운데 정렬 */
  background: rgba(255, 255, 255);
  margin-top: 8px; /* 줄 선 위쪽 여백 조정 */
  margin-bottom: 8px; /* 줄 선 아래쪽 여백 조정 */
`;

export const MapInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-top: 8%;
  flex-direction: column;
`;
