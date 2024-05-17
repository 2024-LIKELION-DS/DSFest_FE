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

export const Admin = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ALogo = styled.img`
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

    @media (hover: hover) and (pointer: fine) {
        height: calc(100vh - 26px - 120px - 27px);
        margin-bottom: 54px;
    }

    @media all and (max-width: 768px) {
        height: auto;
        margin-bottom: 70px; /* Increase margin-bottom for mobile */
    }
`;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const BoxWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    width: 100%;
`;

export const BackIcon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    margin-left: 15px;
    cursor: pointer;
`;

export const BoxTitle = styled.p`
    font-family: "Prompt";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;
export const LabelBox = styled.div`
    display: flex;
    flex-direction: row; /* Change from row to column */

    margin-bottom: 10px;
    font-family: Prompt;
    @media all and (min-width: 1024px) {
        width: 720px;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 600px;
    }

    @media all and (min-width: 620px) and (max-width: 768px) {
        width: 500px;
    }
    @media all and (max-width: 620px) {
        width: 300px;
    }
`;

export const LabelTag = styled.div`
    color: #448bdb;
    width: 40px;
    margin-top: 10px;
    margin-right: 10px;
    font-family: Prompt;
    font-weight: bold;
`;
export const PhotoWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    width: 680px;
`;
export const Selection = styled.select`
    color: #448bdb;
    width: 100px;
    padding: 10px;
    border: 0px;
    font-weight: bold;
    border-radius: 16px;
    font-family: Prompt;
    background-color: rgba(255, 255, 255, 0.5);
    &:focus {
        outline: 1.5px solid #448bdb;
    }
`;

export const Opt = styled.option`
    color: #448bdb;
    font-weight: bold;
    font-family: Prompt;
`;

export const Square = styled.div`
    margin: 15px;
`;

export const BlankDiv = styled.div`
    padding: 10px;
`;

export const InputTitle = styled.input`
    border: 0;
    padding: 10px;
    margin-top: 5px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
    width: calc(100% - 80px);
    font-family: "Prompt";

    &:focus {
        outline: 1.5px solid #448bdb;
    }
    @media (min-width: 1023px) {
        max-width: 720px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 600px;
    }

    @media (min-width: 620px) and (max-width: 768px) {
        max-width: 500px;
    }

    @media all and (max-width: 620px) {
        max-width: 300px;
    }
`;

export const InputDetail = styled.textarea`
    border: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
    width: calc(100% - 80px);
    min-height: 130px;
    font-family: Prompt;
    resize: none;
    font-family: "Prompt";

    &:focus {
        outline: 1.5px solid #448bdb;
    }
    @media (min-width: 1023px) {
        max-width: 720px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 600px;
    }

    @media (min-width: 620px) and (max-width: 768px) {
        max-width: 500px;
    }

    @media all and (max-width: 620px) {
        max-width: 300px;
    }
`;

export const SubmitButton = styled.button`
    width: 90px;
    height: 30px;
    border: 0px;
    background-color: #448bdb;
    border-radius: 16px;
    color: white;
    display: inline-block;
    font-weight: bold;
    font-family: Prompt;
    font-size: 10pt;
`;

export const ButtonDiv = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
