import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(to bottom, #448bdb 0%, #6aacf3 100%);
    @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
        border-radius: 12px;
    }
`;

export const TimeTable = styled.div`
    width: 100vw;
    min-height: calc(100vh - 183px);

    @media (hover: hover) and (pointer: fine) {
        width: 100%;
        height: 100%;
    }
`;

export const Booth = styled.div`
    width: 126px;
    padding-right: 10px;
`;

export const Young = styled.div`
    width: 126px;
    padding-left: 10px;
    margin-top: 0;
    min-height: 600px;
`;

export const DayBox = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.3);
    width: 312px;
    height: 28px;
    margin: 0 auto;
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
`;

export const WedButton = styled.button`
    background-color: rgba(255, 255, 255, 0);
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
    border-radius: 14px;
    color: white;
    border: 0px;
    width: 96px;
    height: 28px;
    margin: 0;
    cursor: pointer;
    &:hover,
    &:visited,
    &:active,
    &.clicked {
        background-color: #ff9900;
    }
`;
export const ThuButton = styled.button`
    background-color: rgba(255, 255, 255, 0);
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
    border: 0px;
    border-radius: 14px;
    color: white;
    width: 96px;
    height: 28px;
    margin: 0;
    &:hover,
    &:visited,
    &:active {
        background-color: #e94f64;
    }
`;
export const FriButton = styled.button`
    background-color: rgba(255, 255, 255, 0);
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
    border: 0px;
    border-radius: 14px;
    color: white;
    width: 96px;
    height: 28px;
    margin: 0;
    &:hover,
    &:visited,
    &:active {
        background-color: #654fe9;
    }
`;

export const DayBooth = styled.div`
    width: 126px;

    height: 161.345px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Bold = styled.b`
    display: block;
    margin-left: 12px;
    margin-top: 9px;
    color: white;
    font-size: 11pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
`;
export const BoldTop8 = styled.b`
    display: block;
    margin-left: 12px;
    margin-top: 8px;
    color: white;
    font-size: 11pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
`;
export const BoldTop5 = styled.b`
    display: block;
    margin-left: 12px;
    margin-top: 3px;
    color: white;
    font-size: 10.5pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
`;
export const InlineBold = styled.b`
    display: inline-block;
    margin-left: 7px;
    margin-top: 3px;
    color: white;
    font-size: 9pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
`;
export const InlineBoldF = styled.b`
    margin-left: 12px;
    margin-right: 5px;
    color: white;
    font-size: 9pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
    align-self: center;
`;
export const Top = styled.div`
    display: block;
    color: white;
    font-size: 10pt;
    height: 10px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    margin-left: 25px;
    width: 120px;
    margin-top: 12px;
`;
export const Top2 = styled.div`
    display: block;
    color: white;
    font-size: 10pt;
    height: 10px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    margin-left: 40px;
    width: 120px;
    margin-top: 12px;
`;
export const Time = styled.p`
    margin-left: 12px;
    margin-top: 2px;
    color: white;
    font-size: 8pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    margin-left: 12px;
`;
export const InlineTime = styled.span`
    display: block;
    color: white;
    font-size: 7pt;
    margin-left: 4px;
    margin-top: 6.3px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
`;
export const InlineTimeF = styled.span`
    color: white;
    font-size: 7pt;
    margin-left: 4px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    align-self: center;
`;
export const Movie = styled.div`
    width: 126px;
    height: 70px;
    margin-top: 161px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const StuPerform = styled.div`
    width: 126px;
    height: 114px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
`;
export const Celeb1 = styled.div`
    width: 126px;
    height: 42px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 50px;
`;
export const Celeb2Fire = styled.div`
    width: 126px;
    height: 23px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const SongFest = styled.div`
    width: 126px;
    height: 109.5px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 327px;
`;
export const Content = styled.div`
    width: 126px;
    height: 44px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Dj = styled.div`
    width: 126px;
    height: 67px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Line = styled.div`
    height: 10px;
    width: calc(100% - 8px);
    margin-top: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding: 15px;
    z-index: 999;
    margin-left: 8px;
`;
export const TimeLine = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    color: white;
    font-size: 8pt;
    display: flex;

    font-family: "AppleSDGothicNeo";
    font-weight: 500;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-right: 12px;
    margin-top: -578px;
`;

export const BackgroundBox = styled.div`
    width: 100%;
    height: 585px;
    margin-top: 15px;
`;
export const CloudLeft = styled.div`
    width: 102px;
    height: 74px;
    position: absolute;
    left: -30px;
    margin-top: -240px;
`;

export const CloudRight = styled.div`
    width: 143px;
    height: 144px;
    position: absolute;
    right: -20px;
    margin-top: -260px;
`;
