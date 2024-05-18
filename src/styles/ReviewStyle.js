import styled from "styled-components";

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

export const Review = styled.div`
    width: 100vw;
    min-height: calc(100vh - 183px);

    @media (hover: hover) and (pointer: fine) {
        width: 100%;
        min-height: 100%;
    }
`;

export const ReviewWrite = styled.div`
    /*margin-top: 28px;*/
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const CloudLeft = styled.div`
    display: flex;
    width: 74px;
    height: 74px;
    overflow: hidden;
    margin-bottom: -1rem;
    margin-top: -2rem;
    @media (hover: hover) and (pointer: fine) {
        left: 40.6rem;
    }
`;

export const CloudRight = styled.div`
    display: flex;
    width: 131px;
    height: 144px;
    align-self: flex-end;
    margin-top: -6rem;
`;

export const Write = styled.form`
    z-index: 1;
    align-self: center;
`;

export const WriteText = styled.textarea`
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    outline: none;
    display: flex;
    box-sizing: border-box;
    padding: 18px 20px;
    width: 328px;
    border-radius: 16px;
    border: none;
    font-size: 15px;
    min-height: 76px;
    resize: none;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        white-space: pre-wrap;
    }
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);
`;

export const WriteButton = styled.button`
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    display: flex;
    margin: 12px 10px;
    margin-left: auto;
    cursor: pointer;
    border: none;
    font-size: 15px;
    background-color: transparent;
    color: ${(props) =>
        props.$hasText ? "#ffffff;" : "rgba(255, 255, 255, 0.5);"};
    transition: ease-in-out 300ms;
`;

export const ReviewList = styled.div`
    display: flex;
    justify-content: center;
    min-height: 521.5px;
    margin-top: -3rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Parasol = styled.div`
    width: 46px;
    height: 46px;
`;

export const ListItem = styled.li`
    flex-direction: column;
    box-sizing: border-box;
    margin: 0px 0px 16px 0px;
    display: felx;
    min-height: 74px;
    width: 328px;
    border-radius: 16px;
    border: none;
    background-color: #ffffff;
    padding: 16px 16px 12px 16px;
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);
`;

export const ListText = styled.div`
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    color: #7b7b7b;
    font-size: 15px;
    white-space: pre-wrap;
`;

export const ListTime = styled.div`
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    color: #7b7b7b;
    font-size: 12px;
    margin-top: 12px;
`;
