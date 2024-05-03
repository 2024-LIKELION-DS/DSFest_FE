import React from "react";
import { useState, useEffect, useRef } from "react";
import * as C from "../styles/CommonStyle";
import * as R from "../styles/ReviewStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";
import cloudLeft from "../img/3_cloud_104x75.png";
import cloudRight from "../img/3_cloud_131x144.png";
import parasol from "../img/parasol&tube_76x47.png";

function Review() {
    const [text, setText] = useState("");
    const [review, setReview] = useState([]);
    const writeRef = useRef();
    const onChange = (event) => {
        const height = event.target.value;
        setText(height);
    };
    const checkTime = (time) => {
        const currentTime = new Date();
        const submitTime = new Date(time);
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
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === "") {
            return;
        }
        const currentTime = new Date();
        setReview((currentArray) => [
            { text, time: currentTime },
            ...currentArray,
        ]);
        setText("");
    };
    useEffect(() => {
        writeRef.current.style.height = "76px";
        const scrollHeight = writeRef.current.scrollHeight;
        writeRef.current.style.height = scrollHeight + "px";
    }, [text]);

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
                                        <img src={cloudLeft} alt="" />
                                    </R.CloudLeft>
                                    <R.CloudRight>
                                        <img src={cloudRight} alt="" />
                                    </R.CloudRight>
                                    <R.Write onSubmit={onSubmit}>
                                        <R.WriteText
                                            ref={writeRef}
                                            onChange={onChange}
                                            value={text}
                                            type="text"
                                            placeholder="2024 근화제 <찬란> 재밌게 즐기셨나요?
                                            후기를 남겨주세요!"
                                        ></R.WriteText>
                                        <R.WriteButton hasText={text}>
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
                                        {review.map((item, index) => (
                                            <R.ListItem key={index}>
                                                <R.ListText>
                                                    {item.text}
                                                </R.ListText>
                                                <R.ListTime>
                                                    {checkTime(item.time)}
                                                </R.ListTime>
                                            </R.ListItem>
                                        ))}
                                    </R.List>
                                </R.ReviewList>
                                {/* <Footer /> */}
                            </R.Review>
                        </C.Phone>
                    </R.Background>
                </C.Area>
            </C.Page>
        </>
    );
}

export default Review;
