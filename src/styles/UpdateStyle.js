import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(
            to bottom,
            rgba(0, 23, 91, 0.7) 6%,
            rgba(19, 105, 191, 0.7) 46%,
            rgba(81, 111, 131, 0.7) 94%
        ),
        rgba(0, 0, 0, 0.4);
    background-color: #404040;

    @media (hover: hover) and (pointer: fine) {
        background: linear-gradient(
                to bottom,
                rgba(0, 23, 91, 0.7) 6%,
                rgba(19, 105, 191, 0.7) 46%,
                rgba(81, 111, 131, 0.7) 94%
            ),
            rgba(0, 0, 0, 0.4);
        background-color: none;
    }
`;

export const Update = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 26px;
    cursor: pointer;
`;

export const Box = styled.div`
    margin-top: 27px;
    width: 90vw;
    min-height: calc(100vh - 26px - 120px - 32px);
    margin-bottom: 25px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);
    display: flex;
    flex-direction: column;

    @media (hover: hover) and (pointer: fine) {
        min-height: calc(100vh - 26px - 120px - 27px);
        margin-bottom: 54px;
    }
`;

export const BoxWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    width: 100%;
`;

export const BoxBack = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    margin-left: 15px;
    padding-top: 45px;
    cursor: pointer;
`;

export const BoxTitle = styled.div`
    font-family: "Prompt";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    @media (hover: hover) and (pointer: fine) {
        font-size: 1.55vw;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormBox = styled.div``;

export const FormTag = styled.div`
    color: #448bdb;
    width: 50px;
    margin-top: 8px;
    height: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    @media (hover: hover) and (pointer: fine) {
        font-size: 1.4vw;
    }
`;

export const FromCategory = styled.div`
    display: flex;
    margin-bottom: 20px;
    margin-top: 10px;
    @media screen and (max-height: 700px) {
        margin-bottom: 7px;
    }
`;

export const Category = styled.select`
    color: #448bdb;
    width: 100px;
    padding: 10px;
    border: 0px;
    font-weight: bold;
    border-radius: 16px;

    background-color: rgba(255, 255, 255, 0.5);
    &:focus {
        outline: 1.5px solid #448bdb;
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 0.9vw;
        width: 9.3vw;
        height: 2.55vw;
        padding: 0vw 0.7vw;
    }
`;

export const Option = styled.option`
    color: #448bdb;
    font-weight: bold;
`;

export const FromContainer = styled.div`
    margin-top: -5px;
    padding: 10px;
    padding-left: 2px;
    display: flex;
    flex-direction: row;

    @media (hover: hover) and (pointer: fine) {
        width: 72vw;
    }
`;

export const Title = styled.input`
    border: 0;
    padding: 10px;
    margin-top: 5px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
    font-family: "Prompt";

    &:focus {
        outline: 1.5px solid #448bdb;
    }

    @media (hover: hover) and (pointer: fine) {
        width: 70vw;
        font-size: 1vw;
    }
`;

export const Content = styled.textarea`
    border: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
    width: 100%;
    min-height: 200px;
    box-sizing: border-box;
    resize: none;
    font-family: "Prompt";

    &:focus {
        outline: 1.5px solid #448bdb;
    }
    @media (hover: hover) and (pointer: fine) {
        width: 70vw;
        font-size: 1vw;
    }
`;

export const FormImg = styled.div`
    margin-top: -5px;
    padding: 10px;
    padding-left: 2px;
    width: 200px;
`;

export const FormButton = styled.div`
    text-align: center;
    margin-bottom: 10px;
    @media screen and (min-height: 830px) {
        margin: 30px;
    }
    @media screen and (min-height: 830px) {
        margin: 50px;
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 0px;
    background-color: #448bdb;
    border-radius: 16px;
    color: white;
    display: inline-block;
    font-weight: bold;
    margin-top: 30px;
    @media (hover: hover) and (pointer: fine) {
        width: 10.3vw;
        height: 3.7vw;
        font-size: 1.4vw;
    }
`;
