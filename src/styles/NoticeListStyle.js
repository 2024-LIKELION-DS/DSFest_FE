import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(180deg, #448BDB 0%, #6AACF3 100%);

  @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
    border-radius: 12px;
  }
`;

export const Notice = styled.div`
  width: 100vw;
  min-height: calc(100vh - 183px);
  position: relative;
  top:2px;

  @media (hover: hover) and (pointer: fine) {
    width: 100%;
    min-height: calc(100% - 183px);
  }
`;

export const img_wrap = styled.div`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  justify-content: right;
  margin-right: 1rem;
`;

export const img_boat = styled.img`
  width: 37px;
  height: 44px;
  margin-right: 2rem;
`;

export const content_wrap = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const content_wrap2 = styled.div`
  text-align: ${(props) => (props.itemsCount === 1 ? 'left' : 'center')};
  display: grid;
  justify-content: ${(props) => (props.itemsCount === 1 ? 'flex-start' : 'space-around')};
  grid-template-columns: ${(props) => (props.itemsCount === 1 ? '1fr' : 'auto auto')};
  grid-template-rows: auto auto auto;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-left: ${(props) => (props.itemsCount === 1 ? '0.8rem' : '6rem')};
  margin-right: 6rem;
  margin-top: ${(props) => (props.itemsCount === 1 ? '3rem' : '-0.1rem')};
  align-items: center;
  padding: 0;
`;

export const content = styled.div`
  text-align: left;
`;

export const box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 156px;
  height: 156px;
  padding: 0px;
`;

export const img_exImg = styled.img`
  border: 4px solid white;
  border-radius: 12px;
  box-sizing: border-box;
  width: 156px;
  height: 156px;
`;

export const title = styled.div`
  font-size: 15px;
  font-family: "AppleSDGothicNeo";
  font-weight: 800;
  color: white;
  margin-top: 1rem;
  margin-left:0.3rem;
`;

export const category = styled.div`
  font-size: 12px;
  font-family: "AppleSDGothicNeo";
  font-weight: 400;
  color: white;
  opacity: 0.8;
  margin-left:0.3rem;
`;

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
