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

export const PhotoSpace = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextSpace = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-family: "AppleSDGothicNeo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 20px;
`;

export const PhotoDownImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

export const FrameBox = styled.div`
  text-align: center;
  height: 579px;
`;

export const Frame = styled.img`
  width: 360px;
  height: 579px;
`;

export const PhotoFrame = styled.div`
  display: flex;
  justify-content: center;
  height: 0;
`;

export const PhotoPosBox = styled.div`
  width: 360px;
`;

export const PhotoPos = styled.div`
  position: relative;
  bottom: 579px;
`;

export const PhotoPosOne = styled.div`
  position: relative;
  width: 152px;
  top: 132px;
  left: 20px;
`;

export const PhotoPosTwo = styled.div`
  position: relative;
  width: 152px;
  top: calc(328px - 184px);
  left: 20px;
`;

export const PhotoPosThree = styled.div`
  position: relative;
  width: 152px;
  top: calc(40px - 184px - 184px);
  left: 188px;
`;

export const PhotoPosFour = styled.div`
  position: relative;
  width: 152px;
  top: calc(236px - 184px - 184px - 184px);
  left: 188px;
`;

export const FrameStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 0;
`;

export const FrameImg = styled.img`
  position: relative;
  top: -579px;
  width: 360px;
  height: 579px;
  z-index: 10;
`;
