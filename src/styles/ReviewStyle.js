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
    height: 100vh;

    @media (hover: hover) and (pointer: fine) {
        width: 100%;
        height: 100%;
    }
`;

export const ReviewWrite = styled.div`
    margin-top: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CloudLeft = styled.div`
    width: 102px;
    height: 74px;
    position: absolute;
    top: 6.5rem;
    left: -1rem;
`;

export const CloudRight = styled.div`
    width: 143px;
    height: 144px;
    position: absolute;
    top: 12rem;
    right: -0.7rem;
    z-index: -1;
`;

export const Write = styled.form``;

export const WriteText = styled.textarea`
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
    background-color: rgba(255, 255, 255, 0.5);
    overflow: hidden;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        white-space: pre-wrap;
    }
`;

export const WriteButton = styled.button`
    display: flex;
    margin: 12px 16px;
    margin-left: auto;
    cursor: pointer;
    border: none;
    font-size: 15px;
    background-color: transparent;
    color: ${(props) =>
        props.hasText ? "#ffffff;" : "rgba(255, 255, 255, 0.5);"};
`;

export const ReviewList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Parasol = styled.div`
    width: 46px;
    height: 46px;
    /*display: ${({ isVisible }) => (isVisible ? "block" : "none")};*/
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
`;

export const ListText = styled.div`
    display: felx;
    color: #7b7b7b;
    font-size: 15px;
    white-space: pre-wrap;
`;
export const ListTime = styled.div`
    display: felx;
    color: #7b7b7b;
    font-size: 12px;
    margin-top: 12px;
`;
