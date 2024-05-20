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
import leftArrowImg from "../img/arrow_L.png";
import rightArrowImg from "../img/arrow_R.png";

function Notice() {
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;

  const [notice, setNotice] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 상태
  const [noticeHeight, setNoticeHeight] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const url = `${process.env.REACT_APP_API}/user/read/${id}`;
        const response = await axios.get(url);
        setNotice(response.data.data || []);
      } catch (error) {
        console.error("공지사항 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchNotice();
  }, [id]);

  useEffect(() => {
    // notice 페이지 높이 계산
    if (containerRef.current) {
      setNoticeHeight(containerRef.current.offsetHeight);
    }
  }, [notice]);

  useEffect(() => {
    // 모달 상태가 변경될 때 푸터의 스타일을 조절합니다.
    const footer = document.querySelector("Footer");
    if (footer) {
      footer.style.display = isModalOpen ? "none" : "block";
    }
  }, [isModalOpen]);

  const handleNext = () => {
    if (notice.length > 0 && notice[0].images) {
      const newIndex = (currentImageIndex + 1) % notice[0].images.length;
      setCurrentImageIndex(newIndex);
      setCurrentImage(notice[0].images[newIndex].imageUrl);
    }
  };

  const handlePrevious = () => {
    if (notice.length > 0 && notice[0].images) {
      const newIndex = (currentImageIndex - 1 + notice[0].images.length) % notice[0].images.length;
      setCurrentImageIndex(newIndex);
      setCurrentImage(notice[0].images[newIndex].imageUrl);
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

  const renderContentWithLinks = (content) => {
    const urlPattern = /https?:\/\/[^\s]+/g;
    const parts = content.split("\n");

    return parts.map((part, index) => {
      const urls = part.match(urlPattern) || [];
      const subParts = part.split(urlPattern);

      return (
        <React.Fragment key={`line-${index}`}>
          {subParts.map((subPart, subIndex) => (
            <React.Fragment key={`subPart-${subIndex}`}>
              <span>{subPart}</span>
              {subIndex < urls.length && (
                <a href={urls[subIndex]} target="_blank" rel="noopener noreferrer">
                  {urls[subIndex]}
                </a>
              )}
            </React.Fragment>
          ))}
          <br />
        </React.Fragment>
      );
    });
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
                  <N.content_wrap $isModalOpen={isModalOpen}>
                    {notice.map((item) => (
                      <N.box_wrap key={item.id}>
                        <N.List>{item.category.name}</N.List>
                        <N.Title>{item.title}</N.Title>
                        <N.Context>{renderContentWithLinks(item.content)}</N.Context>
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
                          $show={notice[0].images.length > 1 && currentImageIndex > 0}
                        />
                        <N.rightArrowImg
                          src={rightArrowImg}
                          alt="rightarrowImg"
                          onClick={handleNext}
                          $show={notice[0].images.length > 1 && currentImageIndex < notice[0].images.length - 1}
                        />
                      </N.button>
                    )}
                  </N.img_wrap2>
                )}
                {isModalOpen && (
                  <Modal
                    onClose={closeModal}
                    imageUrl={currentImage}
                    imageCount={notice[0]?.images.length}
                    currentIndex={currentImageIndex + 1}
                    noticeHeight={noticeHeight}
                    onSwipeLeft={handleNext}
                    onSwipeRight={handlePrevious}
                  />
                )}
              </N.Notice>
              <Footer />
            </C.Phone>
          </N.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Notice;
