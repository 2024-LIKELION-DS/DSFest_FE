import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #3177c6 6%, #83beff 46%, #ffffff 94%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Notice = styled.div`
  width: 100vw;
  min-height: calc(100vh - 183px);

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    min-height: calc(100% - 183px);
  }
`;

export const img_wrap = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;
export const img_boat = styled.img`
  width: 37px;
  height: 44px;
  margin-right: 2rem;
`;

export const content_wrap = styled.div`
  /*height:26.5rem;*/ /* 고정 높이 설정, 필요하다면 제거할 수 있음 */
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center; /* 모든 그리드 아이템을 가로축 중앙에 정렬 */
  align-items: center; /* 모든 그리드 아이템을 세로축 중앙에 정렬 */

  margin-bottom: 3rem;
`;

export const content = styled.div`
  text-align: left;
`;

export const box = styled.div`
  display: flex; /* flexbox를 사용하여 내부 아이템을 정렬 */
  flex-direction: column; /* 아이템을 세로로 정렬 */
  justify-content: center; /* 좌측 정렬 */
  align-items: center; /* 아이템들을 시작점에서 정렬 */

  overflow-x: hidden;
  overflow-y: hidden;
  width: 156px;
  height: 156px;
  padding: 0px;
`;

export const img_exImg = styled.img`
  border: 4px solid white; /* 테두리 설정 */
  border-radius: 12px; /* 테두리 둥근 설정 */
  box-sizing: border-box; /* border 및 padding을 width 및 height 계산에 포함 */

  width: 156px;
  height: 156px;
`;

/* 제목 & 카테고리*/
export const title = styled.div`
  fontsize: 15px;
  font-family: "AppleSDGothicNeo";
  font-weight: 800;
  color: white;
  margin-top: 1rem;
`;

export const category = styled.div`
  fontsize: 12px;
  font-family: "AppleSDGothicNeo";
  font-weight: 400;
  color: white;
  opacity: 0.8;
`;

/*페이지네이션*/
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  ul.pagination {
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: small;

      &:first-child {
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }

      a {
        text-decoration: none;
        color: white;
        font-size: 1rem;

        &:hover,
        &.active {
          color: #986d9e;
        }
      }

      &.active a {
        color: #986d9e !important;
      }

      &.active {
        background-color: none !important;
      }
    }
  }
`;

export const PageSelection = styled.div`
  width: 48px;
  height: 30px;
  color: #986d9e;
`;
