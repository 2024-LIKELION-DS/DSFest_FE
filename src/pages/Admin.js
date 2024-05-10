import React, { useState } from "react";
import * as A from "../styles/AdminStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";

function Admin() {
    const navigate = useNavigate();

    const handlePado = () => {
        navigate("/");
    };

    const [formData, setFormData] = useState({
        select: "",
        title: "",
        detail: "",
        files: [], // 파일 목록을 저장하는 배열
        category: "",
        userId: "", // 사용자 아이디 필드 추가
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setFormData({
            ...formData,
            files: Array.from(files), // 파일 목록을 배열로 변환하여 저장
        });
    };

    const handleSelectChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            select: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const responseData = await createWriting(formData);
            console.log("Response from createWriting:", responseData);
            // TODO: 서버 응답에 대한 처리 추가
        } catch (error) {
            console.error("Error:", error);
        }
    };

    async function createWriting(formData) {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("category", formData.select);
            formDataToSend.append("title", formData.title);
            formDataToSend.append("userId", formData.userId);
            formDataToSend.append("content", formData.detail);

            // 파일이 선택된 경우에만 FormData에 추가
            if (formData.files.length > 0) {
                for (const file of formData.files) {
                    formDataToSend.append("imageFiles", file);
                }
            }

            const response = await axios.post(`/notice`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Form submitted with data:", formDataToSend);
            console.log("Response:", response.data);

            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    return (
        <>
            <A.Background>
                <A.Admin>
                    <A.ALogo src={Logo} alt="찬란" onClick={handlePado} />
                    <A.Box>
                        <form onSubmit={handleSubmit}>
                            <A.FormTitle>공지사항 관리자 페이지</A.FormTitle>
                            <A.FormBox>
                                <A.Square>
                                    <A.LabelBox style={{ marginBottom: "3px" }}>
                                        <A.LabelTag
                                            style={{ marginTop: "12px" }}
                                        >
                                            분류
                                        </A.LabelTag>
                                        <A.BlankDiv>
                                            <A.Selection
                                                name="select"
                                                value={formData.select}
                                                onChange={handleSelectChange}
                                            >
                                                <A.Opt
                                                    value=""
                                                    disabled
                                                    selected
                                                    hidden
                                                >
                                                    선택
                                                </A.Opt>
                                                <A.Opt value="notice">
                                                    Notice
                                                </A.Opt>
                                                <A.Opt value="program">
                                                    Program
                                                </A.Opt>
                                                <A.Opt value="event">
                                                    Event
                                                </A.Opt>
                                            </A.Selection>
                                        </A.BlankDiv>
                                    </A.LabelBox>

                                    <A.LabelBox>
                                        <A.LabelTag>제목</A.LabelTag>
                                        <A.InputTitle
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="내용을 입력해주세요"
                                        ></A.InputTitle>
                                    </A.LabelBox>

                                    <A.LabelBox>
                                        <A.LabelTag>내용</A.LabelTag>
                                        <A.InputDetail
                                            name="detail"
                                            value={formData.detail}
                                            onChange={handleInputChange}
                                            placeholder="내용을 입력해주세요"
                                        ></A.InputDetail>
                                    </A.LabelBox>

                                    <A.LabelBox>
                                        <A.LabelTag>첨부</A.LabelTag>

                                        <A.BlankDiv>
                                            <input
                                                id="fileInput"
                                                type="file"
                                                multiple
                                                onChange={handleFileChange}
                                            />
                                        </A.BlankDiv>
                                    </A.LabelBox>

                                    <A.ButtonDiv>
                                        <A.SubmitButton type="submit">
                                            작성 완료
                                        </A.SubmitButton>
                                    </A.ButtonDiv>
                                </A.Square>
                            </A.FormBox>
                        </form>
                    </A.Box>
                </A.Admin>
                <Footer />
            </A.Background>
        </>
    );
}

export default Admin;
