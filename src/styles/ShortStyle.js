import styled from "styled-components";

export const All = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 72px;
`;

export const BgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const BgBoxImg = styled.div`
  &::before {
    content: "";
    display: block;
    padding-top: calc(100% * (11 / 9)); /* 11/9 비율을 유지 */
    max-height: 100%;
  }

  & img {
    position: absolute; /* 이미지를 박스 안에 절대적으로 배치 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: pulse 5s;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 72px;
  margin-bottom: 27px;
  position: relative;
  & div {
    width: 150px;
    height: 150px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ShortcutArea = styled.div`
  width: 100%;
`;

export const Notice = styled.div`
  width: 21.125em;
  height: 102px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(47, 123, 209, 0.25);
  position: relative;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    animation: pulse;
    animation-duration: 2s;
  }
  & .rock {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 94px;
    height: 140px;
  }
  & div {
    font-family: Prompt;
    font-size: 20px;
    font-weight: 600;
    color: #448bdb;
    transition: color 0.3s ease;
  }
  &:hover div {
    color: rgba(68, 139, 219, 0.6);
  }
`;

export const QuadArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 11px;
`;

export const TimeTable = styled.div`
  width: 94px;
  height: 328px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #654fe9;
  border: 4px solid #ffffff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(47, 123, 209, 0.25);
  position: relative;
  transition: border 0.3s ease, background 0.3s ease;
  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), #654fe9;
    animation: pulse;
    animation-duration: 2s;
  }
  & .beachball {
    position: absolute;
    top: 36px;
    left: -12px;
    width: 41px;
    height: 41px;
  }
  & .boat {
    position: absolute;
    bottom: 36px;
    right: 0;
    width: 40px;
    height: 60px;
  }
  & .star {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & div {
    width: 52px;
    word-break: normal;
    text-align: center;
    font-family: Prompt;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    transition: color 0.3s ease;
  }
  &:hover div {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const TrioArea = styled.div`
  margin-left: 8px;
`;

export const DuoArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 11px;
`;

export const Map = styled.div`
  width: 94px;
  height: 102px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 4px solid #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(47, 123, 209, 0.25);
  transition: border 0.3s ease, background 0.3s ease;
  position: relative;
  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    animation: pulse;
    animation-duration: 2s;
  }
  & div {
    font-family: Prompt;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    transition: color 0.3s ease;
  }
  &:hover div {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Review = styled.div`
  width: 94px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 4px solid #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(47, 123, 209, 0.25);
  transition: border 0.3s ease, background 0.3s ease;
  position: relative;
  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    animation: pulse;
    animation-duration: 2s;
  }
  & div {
    font-family: Prompt;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    transition: color 0.3s ease;
  }
  &:hover div {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Photo = styled.div`
  width: 215px;
  height: 215px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(47, 123, 209, 0.25);
  position: relative;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
    animation: pulse;
    animation-duration: 2s;
  }
  & .parasol {
    position: absolute;
    top: -46px;
    right: 0;
    width: 58px;
    height: 46px;
  }
  & .parasol:hover {
    opacity: 1;
  }
  & .beach {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & .beach:hover {
    opacity: 0.6;
  }
  & div {
    margin-top: 67px;
    font-family: Prompt;
    font-size: 20px;
    font-weight: 600;
    color: #448bdb;
    transition: color 0.3s ease;
  }
  &:hover div {
    color: rgba(68, 139, 219, 0.6);
  }
`;
