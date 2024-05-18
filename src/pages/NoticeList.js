import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import * as C from "../styles/CommonStyle";
import * as NL from "../styles/NoticeListStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import boatImg from "../img/boat_37x44.png";
import exImg from "../img/exImg.png";

function NoticeList() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [notice, setNotice] = useState([]); // 공지사항 목록을 저장하는 상태
  const [totalNum, setTotalNum] = useState(0); // 전체 공지사항 수를 저장하는 상태
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1); // 현재 페이지 번호를 저장하는 상태
  const [hideBoat, setHideBoat] = useState(false); // 보트 이미지 숨기기 상태

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const url = `${process.env.REACT_APP_API}/user/read?page=${currentPage}&size=6`;
        const response = await axios.get(url);
        setNotice(response.data.data); // 공지사항 데이터를 상태에 저장
        setTotalNum(response.data.totalNum); // 전체 공지사항 수를 상태에 저장
        setHideBoat(response.data.data.length === 1); // 요소가 하나일 때 보트 이미지 숨기기 상태 설정
      } catch (error) {
        console.error("공지사항 데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchNotice();
  }, [currentPage]); // currentPage가 변경될 때마다 API를 호출

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 번호 변경
    navigate(`/noticeList?page=${pageNumber}`); // URL을 업데이트하여 현재 페이지 번호를 반영
  };

  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <NL.Background>
            <C.Phone>
              <NL.Notice>
                <Header />
                <C.PageTitle>NOTICE</C.PageTitle>
                <NL.ImgWrap $hide={hideBoat}>
                  <NL.ImgSpace>
                    <NL.ImgBoat src={boatImg} alt="Boat" />
                  </NL.ImgSpace>
                </NL.ImgWrap>
                <NL.ContentWrap>
                  <NL.ContentWrap2 $itemscount={notice.length}>
                    {notice.map((item) => (
                      <Link to={`/notice/${item.id}`} key={item.id} state={{ fromPage: currentPage }}>
                        <NL.Content>
                          <NL.Box>
                            <NL.ImgExImg
                              src={item.images && item.images.length > 0 ? item.images[0].imageUrl : exImg}
                              alt="exImg"
                            />
                          </NL.Box>
                          <NL.Title>{item.title}</NL.Title>
                          <NL.Category>{item.category.name}</NL.Category>
                        </NL.Content>
                      </Link>
                    ))}
                  </NL.ContentWrap2>
                </NL.ContentWrap>
                <NL.PaginationContainer>
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={6}
                    totalItemsCount={totalNum}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    prevPageText={"<"}
                    nextPageText={">"}
                    firstPageText={""} // 첫 페이지로 이동하는 이중 화살표 삭제
                    lastPageText={""} // 마지막 페이지로 이동하는 이중 화살표 삭제
                  />
                </NL.PaginationContainer>
              </NL.Notice>
              <Footer />
            </C.Phone>
          </NL.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default NoticeList;
