import styled from "styled-components";
import boatImg from "../img/boat_37x44.png";

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
export const img_wrap = styled.div`
  display:flex;
  justify-content:right;
  margin-right:1rem;
 
`;
export const img_boat = styled.img`
width: 37px;
height: 44px;
margin-right:2rem;
`;

export const content_wrap = styled.div`
  display:flex;
  text-align:left;
  justify-content:center;
  /*height:26.5rem;*//* 고정 높이 설정, 필요하다면 제거할 수 있음 */
  padding-right:0.5rem;
  padding-left:0.5rem;
  padding-bottom:1.4rem;
  
  `;
  
  
  export const box_wrap = styled.div`
  display: flex; /* flexbox를 사용하여 내부 아이템을 정렬 */
  flex-direction: column; /* 아이템을 세로로 정렬 */
  justify-content: left; /* 좌측 정렬 */
  align-items: start; /* 아이템들을 시작점에서 정렬 */
  border: 4px solid white; /* 테두리 설정 */
  border-radius: 12px; /* 테두리 둥근 설정 */
  width: 100%; /* 부모 요소의 너비를 따름 */
  max-height: 26.5rem;
  overflow-y: auto; /* 세로 스크롤 활성화 */
  
  padding: 1rem; /* 패딩 설정 */
  box-sizing: border-box; /* border 및 padding을 width 및 height 계산에 포함 */

  `;


export const List = styled.div`
fontSize: 12px;
font-family: "AppleSDGothicNeo";
font-Weight: 400;
color:white;
opacity: 0.8;
`;

export const Title = styled.div`
fontSize: 15px;
font-family: "AppleSDGothicNeo";
font-Weight: 800;
color:white;
margin-top:1rem;
margin-bottom:1rem;
`;

export const Context = styled.div`
fontSize: 15px;
font-family: "AppleSDGothicNeo";
font-Weight: 500;
color:white;
opacity: 0.8;
margin-bottom:1rem;
`;

//이미지


export const img_wrap2 = styled.div`
display: flex;  // flexbox를 사용하여 내부 아이템을 행으로 배열
width: 100%;    // 부모 요소의 너비를 따름


// 내용이 너비를 넘어갈 경우 가로 스크롤을 활성화
box-sizing: border-box; // 패딩을 너비 계산에 포함
max-height: 26.5rem;
`;

export const img_exImg = styled.img`
width: 124px;
height: 124px;
margin-right: 1rem;


`;