import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import * as C from "../styles/CommonStyle";
import * as R from "../styles/ReviewStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cloudLeft from "../img/3_cloud_104x75.png";
import cloudRight from "../img/3_cloud_131x144.png";
import parasol from "../img/parasol&tube_76x47.png";

function Review() {
  const [content, setContent] = useState("");
  const [review, setReview] = useState([]);
  const writeRef = useRef();

  const onChange = (event) => {
    const height = event.target.value;
    setContent(height);
  }; //입력창 변화

  useEffect(() => {
    writeRef.current.style.height = "76px";
    const scrollHeight = writeRef.current.scrollHeight;
    writeRef.current.style.height = scrollHeight + "px";
  }, [content]); //작성칸 높이 변경

  const checkTime = (createdAt) => {
    const currentTime = new Date();
    const submitTime = new Date(createdAt);
    const timeDifference = (currentTime - submitTime) / 1000;
    if (timeDifference < 60) {
      return "방금";
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes}분 전`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours}시간 전`;
    } else {
      const options = {
        month: "2-digit",
        day: "2-digit",
      };
      return submitTime.toLocaleString("en-US", options);
    }
  }; //작성 시간 설정

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://15.165.230.224:8080/review");
      setReview(response.data.data);
    } catch (error) {
      console.error("리뷰 데이터를 불러오는 중 오류가 발생했습니다:", error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (content === "") {
      return;
    }
    try {
      const response = await axios.post("http://15.165.230.224:8080/review", {
        content: content,
      });
      const newReview = {
        id: response.data.data.id,
        content: response.data.data.content,
        createdAt: response.data.data.createdAt,
      };
      setReview((currentArray) => [newReview, ...currentArray]);
      setContent("");
      fetchReviews();
    } catch (error) {
      console.error("content를 입력해주세요.", error);
    }
  }; //post api

  useEffect(() => {
    fetchReviews();
  }, []); //get api*/

  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <R.Background>
            <C.Phone>
              <R.Review>
                <Header />
                <C.PageTitle>REVIEW</C.PageTitle>
                <R.ReviewWrite>
                  <R.CloudLeft>
                    <img src={cloudLeft} alt="배경 구름" />
                  </R.CloudLeft>
                  <R.CloudRight>
                    <img src={cloudRight} alt="배경 구름" />
                  </R.CloudRight>
                  <R.Write onSubmit={onSubmit}>
                    <R.WriteText
                      ref={writeRef}
                      onChange={onChange}
                      value={content}
                      type="text"
                      placeholder="2024 근화제 <찬란> 재밌게 즐기셨나요?&#13;&#10;후기를 남겨주세요!"
                    ></R.WriteText>
                    <R.WriteButton $hasText={content} type="submit">
                      등록하기
                    </R.WriteButton>
                  </R.Write>
                </R.ReviewWrite>
                <R.ReviewList>
                  <R.List>
                    {review.length !== 0 && (
                      <R.Parasol>
                        <img src={parasol} alt="" />
                      </R.Parasol>
                    )}
                    {review.map((item) => (
                      <R.ListItem key={item.id}>
                        <R.ListText>{item.content}</R.ListText>
                        <R.ListTime>{checkTime(item.createdAt)}</R.ListTime>
                      </R.ListItem>
                    ))}
                  </R.List>
                </R.ReviewList>
                {<Footer />}
              </R.Review>
            </C.Phone>
          </R.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Review;
