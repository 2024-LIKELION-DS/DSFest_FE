import React, { useState, useEffect, useCallback } from "react";
import * as L from "../styles/ListStyle";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";

const API_KEY = process.env.REACT_APP_API;

function List() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    const navigate = useNavigate();
    const handlePado = () => {
        navigate("/");
    };

    //api 불러오기
    const getList = async () => {
        try {
            const url = `${API_KEY}/admin/read`;
            const response = await axios.get(url);
            setItems(response.data.data);
        } catch (error) {
            console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
        }
    };
    useEffect(() => {
        getList();
    }, []);

    //api 삭제
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_KEY}/admin/delete/${id}`);
            const filteredItems = items.filter((item) => item.id !== id);
            setItems(filteredItems);
            alert("삭제되었습니다.");
        } catch (error) {
            console.error("삭제 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <>
            <L.Background>
                <L.AdminList>
                    <L.Logo src={Logo} alt="찬란" onClick={handlePado} />
                    <L.Box>
                        <L.BoxTitle>공지사항 관리자 페이지</L.BoxTitle>
                        <L.BoxLine></L.BoxLine>
                        <L.BoxList>
                            <L.List>
                                {items.map((item) => (
                                    <L.ListItem key={item.id}>
                                        <L.ListCategory>
                                            {item.category.name}
                                        </L.ListCategory>
                                        <L.ListTitle>{item.title}</L.ListTitle>
                                        <L.ButtonWrap>
                                            <L.ListButton>
                                                <Link
                                                    to={`update/${item.id}`}
                                                    key={item.id}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "white",
                                                    }}
                                                >
                                                    수정
                                                </Link>
                                            </L.ListButton>
                                            <L.ListButton
                                                onClick={(e) =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                삭제
                                            </L.ListButton>
                                        </L.ButtonWrap>
                                        <L.BoxLine></L.BoxLine>
                                    </L.ListItem>
                                ))}
                            </L.List>
                        </L.BoxList>
                        <L.BoxButton>글쓰기</L.BoxButton>
                    </L.Box>
                </L.AdminList>
            </L.Background>
        </>
    );
}

export default List;
