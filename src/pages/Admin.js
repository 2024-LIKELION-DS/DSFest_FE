import React, { useState } from "react";
import * as A from "../styles/AdminStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";
import Back from "../img/back_30x30.png";

const API_KEY = process.env.REACT_APP_API; // 환경변수에 저장된 API 키 불러오기

function Admin() {
    const navigate = useNavigate();

    const handlePado = () => {
        navigate("/");
    };

    const handleBackClick = () => {
        navigate("/pado/admin");
    };
    // 초기 상태값을 빈 문자열로 설정
    const [formData, setFormData] = useState([]);

    const handleFileChange = (event) => {
        const images = event.target.files; // 이미지 파일 가져오기
        if (images && images.length > 0) {
            const imageArrays = Array.from(images).map((image) => ({
                imageUrl: URL.createObjectURL(image),
                file: image, // 파일 객체 추가
            }));
            setFormData({
                ...formData,
                images: imageArrays,
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.categoryName) {
            alert("카테고리를 선택해주세요.");
            return; // 카테고리가 선택되지 않았을 경우 제출 중지
        }

        try {
            const responseData = await createWriting(formData);
            console.log("Response from createWriting:", responseData);
            // TODO: 서버 응답에 대한 처리 추가

            navigate("/pado/admin");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function createWriting(formData) {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("categoryName", formData.categoryName);
            formDataToSend.append("title", formData.title);
            formDataToSend.append("content", formData.content);

            // FormData에 필드들을 직접 추가
            formDataToSend.append(
                "noticeDTO",
                JSON.stringify({
                    title: formData.title,
                    content: formData.content,
                    categoryName: formData.categoryName,
                })
            );

            // multipartFiles 필드 추가
            if (formData.images && formData.images.length > 0) {
                for (const image of formData.images) {
                    formDataToSend.append("multipartFiles", image.file);
                }
            }

            const url = `${API_KEY}/admin`; // URL 조립 방식 변경
            const response = await axios.post(url, formDataToSend, {
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
                        <A.BackIcon
                            style={{ cursor: "pointer" }}
                            onClick={handleBackClick}
                            src={Back}
                            alt="back"
                        />
                        <form onSubmit={handleSubmit}>
                            <A.FormTitle>공지사항 관리자 페이지</A.FormTitle>

                            <A.FormBox>
                                <A.Square>
                                    <A.LabelBox style={{ marginBottom: "3px" }}>
                                        <A.LabelTag>분류</A.LabelTag>
                                        <A.BlankDiv>
                                            <A.Selection
                                                name="categoryName"
                                                value={formData.categoryName}
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
                                                <A.Opt
                                                    value="notice"
                                                    name="notice"
                                                >
                                                    Notice
                                                </A.Opt>
                                                <A.Opt
                                                    value="program"
                                                    name="program"
                                                >
                                                    Program
                                                </A.Opt>
                                                <A.Opt
                                                    value="event"
                                                    name="program"
                                                >
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
                                            name="content"
                                            value={formData.content}
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
                                                onChange={(event) =>
                                                    handleFileChange(event)
                                                }
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
