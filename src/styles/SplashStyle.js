import styled from "styled-components";
import { keyframes } from "styled-components";

export const Background = styled.div`
    background: linear-gradient(
        to bottom,
        #3177c6 6%,
        #83beff 46%,
        #ffffff 94%
    );

    @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
        border-radius: 12px;
    }
`;

export const BackgroundImg = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const Splash = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

// 1일차 햇빛
const moveAndSpin = (y, x, r, translateY, translateX, rotateDeg) => keyframes`
    from {
        transform: translateY(${y}px) translateX(${x}px) rotate(${r}deg);
    }
    to {
        transform: translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg);
    }
`;

const moveAndSpin1 = (y, x, r, translateY, translateX, rotateDeg) => keyframes`
    from {
        transform: translateY(${y}px) translateX(${x}px) rotate(${r}deg);
        opacity: 0;
    }
    to {
        transform: translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg);
        opacity: 1;
    }
`;

export const FdaySun1 = styled.img`
    width: 143px;
    height: 137px;
    position: absolute;
    z-index: 4;
    right: -52px;
    top: -50px;
    transform: rotate(20deg);
    animation: ${moveAndSpin1(-50, 52, 20, 450, -180, 215)} 2s ease-out forwards;
`;

export const FdaySun2 = styled.img`
    width: 67px;
    height: 73px;
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
`;

export const FdaySun3 = styled.img`
    width: 69px;
    height: 60px;
    position: absolute;
    z-index: 6;
    right: -20px;
    top: -8px;
    transform: rotate(18deg);
    animation: ${moveAndSpin1(-8, 20, 18, 110, -70, 120)} 2s ease-out forwards;
`;

export const FdaySun4 = styled.img`
    width: 56px;
    height: 56px;
    position: absolute;
    z-index: 7;
    right: -15px;
    top: -10px;
    animation: ${moveAndSpin(-10, 15, 0, 80, -50, 0)} 2s ease-out forwards;
`;

export const FdaySun5 = styled.img`
    width: 34px;
    height: 33px;
    position: absolute;
    z-index: 8;
    right: 0;
    top: 0;
    animation: ${moveAndSpin(0, 0, 0, 145, -85, 0)} 2s ease-out forwards;
`;

// 2일차 햇빛

export const SdaySun1 = styled.img`
    width: 74px;
    height: 75px;
    position: absolute;
    z-index: 4;
    right: 155px;
    top: 575px;
    animation: ${moveAndSpin(0, 0, 0, 55, -20, 0)} 2s ease-out forwards;
`;

export const SdaySun2 = styled.img`
    width: 35px;
    height: 35px;
    position: absolute;
    z-index: 5;
    right: 165px;
    top: 565px;
    animation: ${moveAndSpin(0, 0, 0, 170, -70, 0)} 2s ease-out forwards;
`;

export const SdaySun3 = styled.img`
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 6;
    right: 135px;
    top: 515px;
    animation: ${moveAndSpin(0, 0, 0, -410, 80, 0)} 2s ease-out forwards;
`;

export const SdaySun4 = styled.img`
    width: 139px;
    height: 140px;
    position: absolute;
    z-index: 7;
    right: 90px;
    top: 500px;
    animation: ${moveAndSpin(0, 0, 0, -360, 95, 0)} 2s ease-out forwards;
`;

const moveSun = (y) => keyframes`
    from {
        transform: translateY(0px);
        opacity: 0.2;
    }
    to {
        transform: translateY(${y}px);
        opacity: 1;
    }
`;

export const SdaySun = styled.img`
    width: 56px;
    height: 56px;
    position: absolute;
    z-index: 8;
    right: 42%;
    top: 83%;
    opacity: 0.2;
    animation: ${moveSun(-55)} 2s ease-out forwards;

    @media (min-width: 768px) and (min-height: 1024px) {
        right: 340px;
        top: 750px;
        animation: ${moveSun(-70)} 2s ease-out forwards;
    }

    @media (min-width: 820px) and (min-height: 1180px) {
        right: 360px;
        top: 860px;
        animation: ${moveSun(-70)} 2s ease-out forwards;
    }

    @media (min-width: 1024px) and (min-height: 1366px) {
        right: 450px;
        top: 1050px;
        animation: ${moveSun(-130)} 2s ease-out forwards;
    }

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        right: 150px;
        top: 670px;
        animation: ${moveSun(-55)} 2s ease-out forwards;
    }
`;

// 3일차 달, 별

export const TdayMoon = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 8;
    right: 77%;
    top: 37%;
    animation: ${moveSun(-30)} 2s ease-out forwards;

    @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
        right: 280px;
        top: 295px;
        animation: ${moveSun(-30)} 2s ease-out forwards;
    }
`;

const moveStar = (y, x) => keyframes`
    from {
        transform: translateY(0px) translateX(0px);
    }
    to {
        transform: translateY(${y}px) translateX(${x}px);
        visibility: hidden;
    }
`;

export const TdayStar1 = styled.img`
    width: 179px;
    height: 116px;
    position: absolute;
    z-index: 5;
    right: -180px;
    top: 100px;
    animation: ${moveStar(450, -600)} 1s ease-out forwards;
`;

export const TdayStar2 = styled.img`
    width: 99px;
    height: 63px;
    position: absolute;
    z-index: 6;
    right: -100px;
    top: 180px;
    animation: ${moveStar(450, -600)} 1s ease-out forwards;
    animation-delay: 0.5s;
`;

export const TdayStar3 = styled.img`
    width: 220px;
    height: 176px;
    position: absolute;
    z-index: 7;
    right: -220px;
    top: 160px;
    animation: ${moveStar(450, -600)} 1s ease-out forwards;
    animation-delay: 0.3s;
`;

// 공통 (배경 별, 로고 박스, 해변 이미지, 구름)

// 배경 별 & 새
export const BackStar = styled.img`
    width: 86%;
    margin: 20% 7% 0 7%;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 1;

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        width: 320px;
        height: 518px;
        margin: 0px 20px;
        position: relative;
        z-index: 2;
        top: -300px;
        left: 0;
    }
`;

// 해변
export const Beach = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 2;
        left: 0;
        top: -440px;
    }

    @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
        border-radius: 12px;
    }
`;

// 글자
export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    top: 14%;
    left: 20%;
    width: 60%;
    height: auto;
    padding: 0;

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
        top: 130px;
        left: 73px;
        width: 214px;
        height: auto;
        padding: 0;
    }
`;

export const Title = styled.img`
    width: 196px;
    height: 16px;
    margin-bottom: 40px;
`;

export const Logo = styled.img`
    width: 202px;
    height: 200px;
    margin-bottom: 40px;
`;

export const Date = styled.img`
    width: 100px;
    height: 12px;
    margin-bottom: 20px;
`;

export const Text = styled.img`
    width: 214px;
    height: 46px;
`;

// 구름
export const cloudAnimationL = keyframes`
    from {
        transform: translateX(-50%);
    }
    to {
        transform: translateX(-27%) translateY(10%);
    }
`;

export const cloudAnimationR = keyframes`
    from {
        transform: translateX(50%);
    }
    to {
        transform: translateX(15%) translateY(10%);
    }
`;

export const CloudLeft = styled.img`
    width: 102px;
    height: 74px;
    animation: ${cloudAnimationL} 2s ease-out forwards;
    overflow: hidden;
`;

export const CloudRight = styled.img`
    width: 143px;
    height: 144px;
    margin-top: 10px;
    animation: ${cloudAnimationR} 2s ease-out forwards;
    overflow: hidden;
`;

export const CloudGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 3;
    top: 55%;

    @media (hover: hover) and (pointer: fine) and (min-width: 1157px) {
        width: 360px;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 2;
        top: -450px;
    }
`;
