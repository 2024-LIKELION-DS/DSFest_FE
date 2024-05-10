import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(to bottom, #448bdb 0%, #6aacf3 100%);
    @media (hover: hover) and (pointer: fine) and (min-height: 801px) {
        border-radius: 12px;
    }
`;

export const TimeTable = styled.div`
    width: 100vw;
    height: 100vh;

    @media (hover: hover) and (pointer: fine) {
        width: 100%;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-right: 12px;
    margin-top: -556px;
    margin-bottom: 50px;
`;

export const Booth = styled.div`
    width: 126px;
    padding-right: 10px;
`;

export const Young = styled.div`
    width: 126px;
    padding-left: 10px;
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
    &:hover {
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
    &:hover {
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
    &:hover {
        background-color: #654fe9;
    }
`;

export const DayBooth = styled.div`
    width: 126px;
    height: 150px;
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
    display: inline-block;
    margin-left: 12px;
    margin-right: 5px;
    margin-top: 4px;
    color: white;
    font-size: 9pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
`;
export const Top = styled.span`
    display: block;
    color: white;
    font-size: 9pt;
    margin-top: 8px;
    margin-bottom: 5px;
    margin-left: 3.5px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
`;

export const Time = styled.p`
    margin-left: 12px;
    margin-top: 2px;
    color: white;
    font-size: 8pt;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
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
    display: block;
    color: white;
    font-size: 7pt;
    margin-left: 4px;
    margin-top: 7px;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
`;
export const Movie = styled.div`
    width: 126px;
    height: 105px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const StuPerform = styled.div`
    width: 126px;
    height: 108px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Celeb1 = styled.div`
    width: 126px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 50px;
`;
export const Celeb2Fire = styled.div`
    width: 126px;
    height: 23px;
    display: flex;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const SongFest = styled.div`
    width: 126px;
    height: 82px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Content = styled.div`
    width: 126px;
    height: 42px;
    border-radius: 8px;
    border: 2px solid white;

    background-color: rgba(255, 255, 255, 0.2);
`;
export const Dj = styled.div`
    width: 126px;
    height: 64px;
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const Line = styled.hr`
    width: 100%;
    border-color: rgba(255, 255, 255, 0.4);
    display: inline-block;

    margin-left: 8px;
`;
export const TimeLine = styled.div`
    margin-left: 8px;
    color: white;
    font-size: 8pt;
    display: flex;
    padding: 15px;
    display: tabel-cell;
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
`;
export const BackgroundBox = styled.div`
    position: relative;
`;
