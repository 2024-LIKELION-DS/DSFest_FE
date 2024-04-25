import styled from "styled-components";
import backImg from "../img/splash_1_sea_360x195.png";

export const Page = styled.div`
  @media (hover: hover) and (pointer: fine) {
    width: 100vw;
    height: 100vh;
    background-image: url(${backImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

export const BlackBg = styled.div`
  @media (hover: hover) and (pointer: fine) {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(0, 23, 91, 0.7) 6%,
        rgba(19, 105, 191, 0.7) 46%,
        rgba(81, 111, 131, 0.7) 94%
      ),
      rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

export const Area = styled.div`
  @media (hover: hover) and (pointer: fine) {
    position: absolute;
    z-index: 2;

    @media (min-width: 1441px) {
      top: 0;
      left: calc(50vw - 505px);
      width: 1010px;
      height: 100vh;
      display: flex;
      justify-content: space-between;

      @media (min-height: 801px) {
        top: calc(50vh - 400px);
        width: 1010px;
        height: 800px;
      }
    }

    @media (max-width: 1440px) and (min-width: 1158px) {
      top: 0;
      left: calc(50vw - 407px);
      width: 814px;
      height: 100vh;
      display: flex;
      justify-content: space-between;

      @media (min-height: 801px) {
        top: calc(50vh - 400px);
        width: 814px;
        height: 800px;
      }
    }

    @media (max-width: 1157px) {
      top: 0;
      left: calc(50vw - 180px);
      width: 360px;
      height: 100vh;
      display: flex;
      justify-content: center;

      @media (min-height: 801px) {
        top: calc(50vh - 400px);
        width: 360px;
        height: 800px;
      }
    }
  }
`;

export const Title = styled.div`
  display: none;

  @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const TitleTitle = styled.div`
  @media (hover: hover) and (pointer: fine) {
    @media (min-width: 1441px) {
      width: 332px;
      height: 27px;
    }

    @media (max-width: 1440px) and (min-width: 1157px) {
      width: 249px;
      height: 20.25px;
    }
  }
`;

export const TitleLogo = styled.div`
  @media (hover: hover) and (pointer: fine) {
    @media (min-width: 1441px) {
      margin-top: 64px;
      width: 342px;
      height: 338px;
    }

    @media (max-width: 1440px) and (min-width: 1157px) {
      margin-top: 48px;
      width: 256.5px;
      height: 253.5px;
    }
  }
`;

export const TitleDate = styled.div`
  @media (hover: hover) and (pointer: fine) {
    @media (min-width: 1441px) {
      margin-top: 60px;
      width: 170px;
      height: 20px;
    }

    @media (max-width: 1440px) and (min-width: 1157px) {
      margin-top: 45.01px;
      width: 127.5px;
      height: 15px;
    }
  }
`;

export const TitleText = styled.div`
  @media (hover: hover) and (pointer: fine) {
    @media (min-width: 1441px) {
      margin-top: 35px;
      width: 362px;
      height: 78px;
    }

    @media (max-width: 1440px) and (min-width: 1157px) {
      margin-top: 26.25px;
      width: 271.5px;
      height: 58.5px;
    }
  }
`;

export const Phone = styled.div`
  @media (hover: hover) and (pointer: fine) {
    width: 360px;
    height: 800px;

    @media (min-height: 801px) {
      border: 12px solid #111111;
      border-radius: 24px;
      margin-top: -12px;
      margin-right: -12px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
    }
  }
`;
