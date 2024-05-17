import React, { useState, useEffect } from "react";
import * as A from "../styles/AdminStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";
import Back from "../img/back_30x30.png";

const API_KEY = process.env.REACT_APP_API; // 환경변수에 저장된 API 키 불러오기

function Admin() {
    const navigate = useNavigate();
    const { postId } = useParams();

    const handlePado = () => {
        navigate("/");
    };

    const handleBackClick = () => {
        navigate("/pado/admin");
    };
    // 초기 상태값을 빈 문자열로 설정
    const [formData, setFormData] = useState({
        categoryName: "",
        title: "",
        content: "",
        images: [],
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.categoryName) {
            alert("카테고리를 선택해주세요.");
            return;
        }

        if (!formData.title.trim()) {
            alert("제목을 입력해주세요.");
            return;
        }

        if (!formData.content.trim()) {
            alert("내용을 입력해주세요.");
            return;
        }

        try {
            const responseData = await createWriting(formData); // createWriting 함수를 사용합니다.
            console.log("Response from createWriting:", responseData);
            // TODO: 서버 응답에 대한 처리 추가

            navigate("/pado/admin");
        } catch (error) {
            console.error("Error:", error);
        }
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

    useEffect(() => {
        // 예를 들어, postId를 사용하여 해당 포스트 정보를 가져오고
        // 해당 포스트에 대한 정보를 formData로 설정할 수 있습니다.
        const fetchPostData = async () => {
            try {
                const response = await axios.get(`${API_KEY}/posts/${postId}`);
                const postData = response.data;
                setFormData({
                    categoryName: postData.categoryName,
                    title: postData.title,
                    content: postData.content,
                    images: postData.images,
                });
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        fetchPostData();
    }, [postId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                                    {/* 분류 */}
                                    <A.LabelBox style={{ marginBottom: "3px" }}>
                                        <A.LabelTag>분류</A.LabelTag>
                                        <A.BlankDiv>
                                            <A.Selection
                                                name="categoryName"
                                                value={formData.categoryName}
                                                onChange={handleInputChange}
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
                                                    name="event"
                                                >
                                                    Event
                                                </A.Opt>
                                            </A.Selection>
                                        </A.BlankDiv>
                                    </A.LabelBox>

                                    {/* 제목 */}
                                    <A.LabelBox>
                                        <A.LabelTag>제목</A.LabelTag>
                                        <A.InputTitle
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="제목을 입력하세요"
                                        ></A.InputTitle>
                                    </A.LabelBox>

                                    {/* 내용 */}
                                    <A.LabelBox>
                                        <A.LabelTag>내용</A.LabelTag>
                                        <A.InputDetail
                                            name="content"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                            placeholder="내용을 입력하세요"
                                        ></A.InputDetail>
                                    </A.LabelBox>

                                    {/* 이미지 첨부 */}
                                    <A.LabelBox>
                                        <A.LabelTag>첨부</A.LabelTag>
                                        <br />
                                        <A.BlankDiv>
                                            <input
                                                id="fileInput"
                                                type="file"
                                                multiple
                                                onChange={(event) =>
                                                    handleFileChange(event)
                                                }
                                            />
                                            {/* 이미지 미리보기 */}
                                        </A.BlankDiv>
                                        {formData.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.imageUrl}
                                                alt={`preview-${index}`}
                                                style={{
                                                    width: "80px",
                                                    height: "80px",

                                                    objectFit: "cover",
                                                }}
                                            />
                                        ))}
                                    </A.LabelBox>

                                    {/* 완료 버튼 */}
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
