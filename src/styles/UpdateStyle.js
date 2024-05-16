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
    height: 100vh;
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
    height: calc(100vh - 26px - 120px - 32px);
    margin-bottom: 25px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);

    @media (hover: hover) and (pointer: fine) {
        height: calc(100vh - 26px - 120px - 27px);
        margin-bottom: 54px;
    }
`;

export const BoxWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
`;

export const BoxBack = styled.img`
    display: flex;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
`;

export const BoxTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-right: 4.4rem;
    @media (hover: hover) and (pointer: fine) {
        font-size: 40px;
        margin-right: 31.1rem;
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

    @media all and (max-width: 480px) {
        width: 235px;
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

    @media all and (max-width: 480px) {
        max-width: 235px;
    }
`;

export const Content = styled.textarea`
    border: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 16px;
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;

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

    @media all and (max-width: 480px) {
        max-width: 235px;
    }
`;

export const FormImg = styled.div`
    margin-top: -5px;
    padding: 10px;
    padding-left: 2px;
    width: 200px;

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

    @media all and (max-width: 480px) {
        width: 190px;
    }
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
`;
