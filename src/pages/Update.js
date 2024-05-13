import React, { useState } from "react";
import * as U from "../styles/UpdateStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";

const API_KEY = process.env.REACT_APP_API;

function Update() {
    const navigate = useNavigate();

    const handlePado = () => {
        navigate("/");
    };

    return (
        <>
            <U.Background>
                <U.Update>
                    <U.Logo src={Logo} alt="찬란" onClick={handlePado} />
                    <U.Box>
                        <U.BoxTitle>공지사항 관리자 페이지</U.BoxTitle>
                        <U.Form>
                            <U.FormBox>
                                <U.FromCategory>
                                    <U.FormTag>분류</U.FormTag>
                                    <U.Category>
                                        <U.Option
                                            value=""
                                            disabled
                                            selected
                                            hidden
                                        >
                                            선택
                                        </U.Option>
                                        <U.Option value="notice" name="notice">
                                            Notice
                                        </U.Option>
                                        <U.Option
                                            value="program"
                                            name="program"
                                        >
                                            Program
                                        </U.Option>
                                        <U.Option value="event" name="event">
                                            Event
                                        </U.Option>
                                    </U.Category>
                                </U.FromCategory>
                                <U.FromContainer>
                                    <U.FormTag>제목</U.FormTag>
                                    <U.Title
                                        name="title"
                                        placeholder="내용을 입력해주세요"
                                    ></U.Title>
                                </U.FromContainer>
                                <U.FromContainer>
                                    <U.FormTag>내용</U.FormTag>
                                    <U.Content
                                        name="content"
                                        placeholder="내용을 입력해주세요"
                                    ></U.Content>
                                </U.FromContainer>
                                <U.FormButton>
                                    <U.Button>수정완료</U.Button>
                                </U.FormButton>
                            </U.FormBox>
                        </U.Form>
                    </U.Box>
                </U.Update>
                <Footer />
            </U.Background>
        </>
    );
}
export default Update;
