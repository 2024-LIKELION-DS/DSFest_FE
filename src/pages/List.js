import React, { useState, useEffect } from "react";
import * as L from "../styles/ListStyle";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";
import DeleteModal from "../components/DeleteModal";

const API_KEY = process.env.REACT_APP_API;

function List() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const navigate = useNavigate();
  const handlePado = () => {
    navigate("/");
  };

  const handleWrite = () => {
    navigate("/pado/admin/post");
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
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_KEY}/admin/delete/${itemToDelete}`);
      const filteredItems = items.filter((item) => item.id !== itemToDelete);
      setItems(filteredItems);
      alert("삭제되었습니다.");
      closeModal();
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다:", error);
    }
  };

  const openModal = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <>
      <L.Background>
        <L.AdminList>
          <L.Logo src={Logo} alt="찬란" onClick={handlePado} />
          <L.Box>
            <L.BoxDiv>
              <L.BoxTitle>공지사항 관리자 페이지</L.BoxTitle>
              <L.TopBoxLine></L.TopBoxLine>
              <L.BoxList>
                <L.List>
                  {items.map((item) => (
                    <L.ListItem key={item.id}>
                      <L.ListCategory>{item.category.name}</L.ListCategory>
                      <L.ListTitle>
                        <p>{item.title}</p>
                      </L.ListTitle>
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
                        <L.ListButton onClick={() => openModal(item.id)}>삭제</L.ListButton>
                      </L.ButtonWrap>
                      <L.BoxLine></L.BoxLine>
                    </L.ListItem>
                  ))}
                </L.List>
              </L.BoxList>
            </L.BoxDiv>

            <L.BoxButton onClick={handleWrite}>글쓰기</L.BoxButton>
          </L.Box>
        </L.AdminList>
        <Footer />
      </L.Background>
      {isModalOpen && <DeleteModal onClose={closeModal} onDelete={handleDelete} />}
    </>
  );
}

export default List;
