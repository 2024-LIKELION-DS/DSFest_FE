import React, { useState, useEffect } from "react";
import * as U from "../styles/UpdateStyle";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";

const API_KEY = process.env.REACT_APP_API;

function Update() {
    const [formData, setFormData] = useState([]);
    const [title, setTitle] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const handlePado = () => {
        navigate("/");
    };

    //파일 첨부
    const handleFileChange = (event) => {
        const newImages = event.target.files;
        if (newImages && newImages.length > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                images: Array.from(newImages),
            }));
        }
    };

    //텍스트 작성
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //카테고리 선택
    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //api 불러오기
    const getFromData = async () => {
        try {
            const url = `${API_KEY}/admin/read/${id}`;
            const response = await axios.get(url);
            setFormData(response.data.data);
        } catch (error) {
            console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
        }
    };
    useEffect(() => {
        getFromData();
    }, [id]);

    //api 수정
    const handleUpdate = async (id) => {
        try {
            const url = `${API_KEY}/admin/update/${id}`;
            const response = await axios.put(url);

            alert("수정되었습니다.");
        } catch (error) {
            console.error("수정 중 오류가 발생했습니다:", error);
        }
    };
    return (
        <>
            <U.Background>
                <U.Update>
                    <U.Logo src={Logo} alt="Your Logo" onClick={handlePado} />
                    <U.Box>
                        <U.BoxTitle>공지사항 관리자 페이지</U.BoxTitle>
                        <U.Form onSubmit={handleUpdate}>
                            {formData.map((item) => (
                                <U.FormBox key={item.id}>
                                    <U.FromCategory>
                                        <U.FormTag>분류</U.FormTag>
                                        <U.Category>
                                            <U.Option
                                                value={item.category.name}
                                                name="category"
                                                hidden
                                            >
                                                {item.category.name}
                                            </U.Option>
                                            <U.Option
                                                value="notice"
                                                name="notice"
                                            >
                                                Notice
                                            </U.Option>
                                            <U.Option
                                                value="program"
                                                name="program"
                                            >
                                                Program
                                            </U.Option>
                                            <U.Option
                                                value="event"
                                                name="event"
                                            >
                                                Event
                                            </U.Option>
                                        </U.Category>
                                    </U.FromCategory>
                                    <U.FromContainer>
                                        <U.FormTag>제목</U.FormTag>
                                        <U.Title
                                            name="title"
                                            placeholder="Enter title"
                                            value={item.title}
                                            onChange={handleInputChange}
                                        />
                                    </U.FromContainer>
                                    <U.FromContainer>
                                        <U.FormTag>내용</U.FormTag>
                                        <U.Content
                                            name="content"
                                            placeholder="Enter content"
                                            value={item.content}
                                            onChange={handleInputChange}
                                        />
                                    </U.FromContainer>
                                    <U.FromContainer>
                                        <U.FormTag>첨부</U.FormTag>
                                        <U.FormImg>
                                            <input
                                                id="fileInput"
                                                type="file"
                                                multiple
                                                onChange={handleFileChange}
                                            />
                                        </U.FormImg>
                                    </U.FromContainer>
                                    <U.FormButton>
                                        <U.Button type="submit">
                                            수정완료
                                        </U.Button>
                                    </U.FormButton>
                                </U.FormBox>
                            ))}
                        </U.Form>
                    </U.Box>
                </U.Update>
                <Footer />
            </U.Background>
        </>
    );
}

export default Update;
