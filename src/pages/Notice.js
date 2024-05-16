import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal"; // 모달 컴포넌트 임포트
import * as C from "../styles/CommonStyle";
import * as N from "../styles/NoticeStyle";

import PcTitle from "../components/PcTitle";
import NoticeHeader from "../components/NoticeHeader";
import Footer from "../components/Footer";

import boatImg from "../img/boat_37x44.png";

import leftArrowImg from "../img/leftArrowImg.png";
import rightArrowImg from "../img/rightArrowImg.png";

function Notice() {
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;

  const [notice, setNotice] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 상태
  const { id } = useParams();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const url = `${process.env.REACT_APP_API}/admin/read/${id}`;
        const response = await axios.get(url);
        setNotice(response.data.data || []);
      } catch (error) {
        console.error("공지사항 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchNotice();
  }, [id]);

  const handleNext = () => {
    if (notice.length > 0 && notice[0].images) {
      setCurrentImageIndex((prev) => (prev + 1) % notice[0].images.length);
    }
  };

  const handlePrevious = () => {
    if (notice.length > 0 && notice[0].images) {
      setCurrentImageIndex((prev) => (prev - 1 + notice[0].images.length) % notice[0].images.length);
    }
  };

  const containerRef = useRef(null);

  const openModal = (imageUrl, index) => {
    setCurrentImage(imageUrl);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <N.Background>
            <C.Phone>
              <N.Notice>
                <NoticeHeader fromPage={fromPage} />
                <C.PageTitle>NOTICE</C.PageTitle>
                <N.wrap>
                  <N.img_wrap>
                    <N.ImgSpace>
                      <N.img_boat src={boatImg} alt="Boat" />
                    </N.ImgSpace>
                  </N.img_wrap>
                  <N.content_wrap>
                    {notice.map((item) => (
                      <N.box_wrap key={item.id}>
                        <N.List>{item.category.name}</N.List>
                        <N.Title>{item.title}</N.Title>
                        <N.Context>{item.content}</N.Context>
                      </N.box_wrap>
                    ))}
                  </N.content_wrap>
                </N.wrap>

                {notice.length > 0 && notice[0].images && notice[0].images.length > 0 && (
                  <N.img_wrap2 key={notice[0].images[currentImageIndex].id}>
                    <N.img_exImg
                      src={notice[0].images[currentImageIndex].imageUrl}
                      onClick={() => openModal(notice[0].images[currentImageIndex].imageUrl, currentImageIndex)}
                      style={{ cursor: "pointer" }}
                      alt="exImg"
                    />
                    {notice.length > 0 && notice[0].images && notice[0].images.length > 1 && (
                      <N.button>
                        <N.leftArrowImg
                          src={leftArrowImg}
                          alt="leftarrowImg"
                          onClick={handlePrevious}
                          show={notice[0].images.length > 1 && currentImageIndex > 0}
                        />
                        <N.rightArrowImg
                          src={rightArrowImg}
                          alt="rightarrowImg"
                          onClick={handleNext}
                          show={notice[0].images.length > 1 && currentImageIndex < notice[0].images.length - 1}
                        />
                      </N.button>
                    )}
                  </N.img_wrap2>
                )}
              </N.Notice>
              <Footer />
            </C.Phone>
          </N.Background>
        </C.Area>
      </C.Page>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          imageUrl={currentImage}
          imageCount={notice[0]?.imageNum}
          currentIndex={currentImageIndex + 1}
        />
      )}
    </>
  );
}

export default Notice;
