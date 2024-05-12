import React, { useEffect, useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from "../styles/CommonStyle";
import * as N from "../styles/NoticeStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import boatImg from "../img/boat_37x44.png";
import exImg from "../img/exImg.png";
import leftArrowImg from"../img/leftArrowImg.png";
import rightArrowImg from"../img/rightArrowImg.png";

function Notice() {
  const [notice, setNotice] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();  // URL 파라미터에서 공지사항 ID를 추출
  
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const url = `${process.env.REACT_APP_API}/admin/read/${id}`;
        const response = await axios.get(url);
        setNotice(response.data.data);
        } catch (error) {
        console.error("공지사항 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchNotice();
  }, [id]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % notice.imageNum);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + notice.imageNum) % notice.imageNum);
  };

    
const containerRef = useRef(null);

    
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
                <Header />
                <C.PageTitle>NOTICE</C.PageTitle>
                <N.wrap>
                <N.img_wrap>
                <N.img_boat src={boatImg} alt="Boat" />
                </N.img_wrap>
                <N.content_wrap>
                {notice.map((item) => (
                  <N.box_wrap key={item.id}>
                    <N.List>{item.category.name}</N.List>
                    <N.Title>{item.title}</N.Title>
                    <N.Context>{item.content}
                    </N.Context>
                    
                  </N.box_wrap>
                ))}
                </N.content_wrap>
                </N.wrap>
                
                {notice.map((item) => (
                  <N.img_wrap2 key={item.id}>
                        <N.img_exImg src={item.images[0].imageUrl} alt="exImg" />
                        <N.button>
                        <N.leftArrowImg src={leftArrowImg} alt="leftarrowImg" />
                        <N.rightArrowImg src={rightArrowImg} alt="rightarrowImg" />
                        </N.button>
                  </N.img_wrap2>
                  ))}
                <Footer />
              </N.Notice>
            </C.Phone>
          </N.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Notice;
