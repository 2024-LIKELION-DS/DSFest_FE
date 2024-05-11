//import React from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TimeTableStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

import React, { useState, useEffect } from "react";
import boat_37x44 from "../img/boat_37x44.png";

function TimeTable() {
    const [selectedDay, setSelectedDay] = useState("5/22 Wed");

    const handleDayChange = (day) => {
        setSelectedDay(day);
    };

    const [isWedClicked, setIsWedClicked] = useState(false);
    const [isThuClicked, setIsThuClicked] = useState(false);
    const [isFriClicked, setIsFriClicked] = useState(false);

    function Day1TimeTable() {
        const [isAnimated, setIsAnimated] = useState(false);
        const handleWedButtonClick = () => {
            setIsWedClicked(true);
            setIsThuClicked(false); // 다른 버튼의 클릭 상태를 초기화
            setIsFriClicked(false); // 다른 버튼의 클릭 상태를 초기화
        };

        useEffect(() => {
            setIsAnimated(true);
        }, []);
        return (
            <T.Wrapper>
                <T.Booth>
                    <T.Top>Booth Zone</T.Top>

                    <T.DayBooth>
                        <T.Bold>주간 수익 사업</T.Bold>
                        <T.Time>11:00~14:30</T.Time>
                    </T.DayBooth>
                    <div style={{ height: "68px" }}></div>
                    <T.DayBooth>
                        <T.Bold>야간 수익 사업</T.Bold>
                        <T.Time>16:00~19:30</T.Time>
                    </T.DayBooth>
                </T.Booth>
                <T.Young>
                    <T.Top>영근터</T.Top>
                    <div
                        style={{
                            transition: "all 0.5s ease",
                            opacity: isAnimated ? 1 : 0,
                            transform: isAnimated
                                ? "translateY(0)"
                                : "translateY(50px)",
                        }}
                    >
                        <T.PcDiv>
                            <img
                                src={boat_37x44}
                                alt="Boat"
                                style={{
                                    width: "37px",
                                    height: "44px",
                                }}
                            />
                        </T.PcDiv>

                        <T.Movie>
                            <T.Bold>영화 상영</T.Bold>
                            <T.Time>15:00~17:30</T.Time>
                        </T.Movie>
                        <T.StuPerform>
                            <T.Bold>
                                재학생 및 <br />
                                동아리 공연
                            </T.Bold>
                            <T.Time>17:30~20:00</T.Time>
                        </T.StuPerform>
                        <T.Celeb1>
                            <T.BoldTop5>연예인 공연</T.BoldTop5>
                            <T.Time>20:00~21:00</T.Time>
                        </T.Celeb1>
                    </div>
                </T.Young>
            </T.Wrapper>
        );
    }

    function Day2TimeTable() {
        const [isAnimated, setIsAnimated] = useState(false);
        const handleThuButtonClick = () => {
            setIsWedClicked(false); // 다른 버튼의 클릭 상태를 초기화
            setIsThuClicked(true);
            setIsFriClicked(false); // 다른 버튼의 클릭 상태를 초기화
        };

        useEffect(() => {
            setIsAnimated(true);
        }, []);
        return (
            <T.Wrapper>
                <T.Booth>
                    <T.Top>Booth Zone</T.Top>

                    <T.DayBooth>
                        <T.Bold>주간 수익 사업</T.Bold>
                        <T.Time>11:00~14:30</T.Time>
                    </T.DayBooth>
                    <div style={{ height: "68px" }}></div>
                    <T.DayBooth>
                        <T.Bold>야간 수익 사업</T.Bold>
                        <T.Time>16:00~19:30</T.Time>
                    </T.DayBooth>
                </T.Booth>
                <T.Young>
                    <T.Top>영근터</T.Top>
                    <div
                        style={{
                            transition: "all 0.5s ease",
                            opacity: isAnimated ? 1 : 0,
                            transform: isAnimated
                                ? "translateY(0)"
                                : "translateY(50px)",
                        }}
                    >
                        <T.Day2PcDiv>
                            <img
                                src={boat_37x44}
                                alt="Boat"
                                style={{ width: "37px", height: "44px" }}
                            />
                        </T.Day2PcDiv>
                        <T.SongFest>
                            <T.Bold>운현가요제</T.Bold>
                            <T.Time>18:30~20:30</T.Time>
                        </T.SongFest>
                        <T.Celeb2Fire>
                            <T.InlineBold>연예인 공연</T.InlineBold>
                            <T.InlineTime>20:30~21:00</T.InlineTime>
                        </T.Celeb2Fire>
                        <div style={{ height: "47px" }}></div>
                    </div>
                </T.Young>
            </T.Wrapper>
        );
    }

    function Day3TimeTable() {
        const [isAnimated, setIsAnimated] = useState(false);
        const handleFriButtonClick = () => {
            setIsWedClicked(false); // 다른 버튼의 클릭 상태를 초기화
            setIsThuClicked(false); // 다른 버튼의 클릭 상태를 초기화
            setIsFriClicked(true);
        };
        useEffect(() => {
            setIsAnimated(true);
        }, []);
        return (
            <T.Wrapper>
                <T.Booth>
                    <T.Top>Booth Zone</T.Top>

                    <T.DayBooth>
                        <T.Bold>주간 수익 사업</T.Bold>
                        <T.Time>11:00~14:30</T.Time>
                    </T.DayBooth>
                    <div style={{ height: "68px" }}></div>
                    <T.DayBooth>
                        <T.Bold>야간 수익 사업</T.Bold>
                        <T.Time>16:00~19:30</T.Time>
                    </T.DayBooth>
                </T.Booth>
                <T.Young>
                    <T.Top>영근터</T.Top>
                    <div
                        style={{
                            transition: "all 0.5s ease",
                            opacity: isAnimated ? 1 : 0,
                            transform: isAnimated
                                ? "translateY(0)"
                                : "translateY(50px)",
                        }}
                    >
                        <T.PcDiv>
                            <img
                                src={boat_37x44}
                                alt="Boat"
                                style={{
                                    width: "37px",
                                    height: "44px",
                                }}
                            />
                        </T.PcDiv>

                        <T.Movie>
                            <T.Bold>영화 상영</T.Bold>
                            <T.Time>15:00~17:30</T.Time>
                        </T.Movie>
                        <div style={{ height: "47px" }}></div>
                        <T.Content>
                            <T.BoldTop5>총학생회 콘텐츠</T.BoldTop5>
                            <T.Time>18:30~19:30</T.Time>
                        </T.Content>
                        <T.Dj>
                            <T.BoldTop5>
                                DJ 및 <br /> 연예인 공연
                            </T.BoldTop5>
                            <T.Time>19:30~21:00</T.Time>
                        </T.Dj>
                        <div style={{ height: "16.5px" }}></div>
                        <T.Celeb2Fire>
                            <T.InlineBoldF>불꽃놀이</T.InlineBoldF>
                            <T.InlineTimeF>21:30~22:00</T.InlineTimeF>
                        </T.Celeb2Fire>
                    </div>
                </T.Young>
            </T.Wrapper>
        );
    }

    return (
        <>
            <C.Page>
                <C.BlackBg />
                <C.Area>
                    <C.Title>
                        <PcTitle />
                    </C.Title>
                    <T.Background>
                        <C.Phone>
                            <T.TimeTable>
                                <Header />
                                <C.PageTitle>TIME TABLE</C.PageTitle>
                                <br />
                                <T.DayBox>
                                    <T.WedButton
                                        style={
                                            selectedDay === "5/22 Wed"
                                                ? { backgroundColor: "#ff9900" }
                                                : {}
                                        }
                                        onClick={() =>
                                            handleDayChange("5/22 Wed")
                                        }
                                        onTouchStart={() =>
                                            handleDayChange("5/22 Wed")
                                        }
                                    >
                                        5/22 Wed
                                    </T.WedButton>

                                    <T.ThuButton
                                        style={
                                            selectedDay === "5/23 Thu"
                                                ? { backgroundColor: "#e94f64" }
                                                : {}
                                        }
                                        onClick={() =>
                                            handleDayChange("5/23 Thu")
                                        }
                                        onTouchStart={() =>
                                            handleDayChange("5/2 Thu")
                                        }
                                    >
                                        5/23 Thu
                                    </T.ThuButton>

                                    <T.FriButton
                                        style={
                                            selectedDay === "5/24 Fri"
                                                ? { backgroundColor: "#654fe9" }
                                                : {}
                                        }
                                        onClick={() =>
                                            handleDayChange("5/24 Fri")
                                        }
                                        onTouchStart={() =>
                                            handleDayChange("5/24 Fri")
                                        }
                                    >
                                        5/24 Fri
                                    </T.FriButton>
                                </T.DayBox>

                                {selectedDay === "5/22 Wed" && (
                                    <Day1TimeTable />
                                )}
                                {selectedDay === "5/23 Thu" && (
                                    <Day2TimeTable />
                                )}
                                {selectedDay === "5/24 Fri" && (
                                    <Day3TimeTable />
                                )}
                                <T.BackgroundBox>
                                    <T.TimeLine>
                                        11:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        12:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        13:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        14:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        15:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        16:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        17:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        18:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        19:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        20:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        21:00
                                        <T.Line />
                                    </T.TimeLine>
                                    <T.TimeLine>
                                        22:00
                                        <T.Line />
                                    </T.TimeLine>
                                </T.BackgroundBox>
                                <br />

                                {/*여기 부분 작업!*/}

                                <Footer />
                            </T.TimeTable>
                        </C.Phone>
                    </T.Background>
                </C.Area>
            </C.Page>
        </>
    );
}

export default TimeTable;
