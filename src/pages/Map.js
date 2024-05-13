import React from "react";
import * as C from "../styles/CommonStyle";
import * as Mp from "../styles/MapStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapTitle from "../img/splash_1_sea_360x195.png";
import MapImg from "../img/map_312x380.png";

import MapImgA from "../img/boothA.png";
import MapImgB from "../img/boothB.png";
import MapImgC from "../img/boothC.png";
import MapImgD from "../img/boothD.png";
import MapImgE from "../img/boothE.png";

import { useState, useEffect } from "react";

function ExpandableContent({
    showMoreText,
    showLessText,
    a,
    b,
    c,
    d,
    e,
    setImage,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // 활성화된 버튼의 인덱스를 추적하는 상태

    const [btnColor, setbtnColor] = useState("#FF9900");
    // 버튼 색상 설정
    useEffect(() => {
        if (showLessText === "2일차") {
            setbtnColor("#E94F64");
        } else if (showLessText === "3일차") {
            setbtnColor("#654FE9");
        } else {
            setbtnColor("#FF9900");
        }
    }, [showLessText]);

    // 이미지 경로 배열
    const imagePaths = [MapImgA, MapImgB, MapImgC, MapImgD, MapImgE];
    const handleButtonClick = (index) => {
        // 이미 활성화된 버튼을 다시 클릭하는 경우 첫 번째 이미지로 돌아갑니다.
        if (index === activeIndex) {
            setImage(imagePaths[0]);
            setActiveIndex(null); // 활성화된 인덱스를 초기화
        } else {
            setImage(imagePaths[index]);
            setActiveIndex(index); // 새로운 활성화된 인덱스를 설정
        }
    };

    const btnStyle = {
        marginBottom: "10px",
        background: "rgba(255, 255, 255, 0.2)", // 배경을 투명하게 설정
        border: "none",
        borderRadius: "6px",
        color: "#ffffff", // 텍스트 색상을 흰색으로 설정
        padding: "5px 10px",
        cursor: "pointer",
        textAlign: "left",
        margin: "1%",
        boxShadow: "0 4px 4px rgba(47, 123, 209, 0.25)", // 네 개의 값으로 그림자 추가
        lineHeight: "136%",
        fontFamily: "AppleSDGothicNeo",
        fontStyle: "normal",
        fontWeight: "500",
    };
    const textInBtnStyle = {
        color: "rgba(255, 255, 255, 0.8)", // 흰색의 80% 투명도
        marginBottom: "2%",
        fontFamily: "AppleSDGothicNeo",
        fontStyle: "normal",
        fontWeight: "400",
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "4%",

                marginBottom: "10px",
                background: "transparent", // 배경을 투명하게 설정
                border: "4px solid #ffffff",
                borderRadius: "13px",
                color: "#ffffff", // 텍스트 색상을 흰색으로 설정
                padding: "5px 10px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 4px 4px rgba(47, 123, 209, 0.25)",
                backgroundColor: "rgba(106, 172, 243, 0.5)",
            }}
        >
            {/* 버튼을 컨텐츠 상단에 배치 */}
            <button
                style={{
                    margin: "1%",
                    background: "transparent", // 배경을 투명하게 설정
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-around",
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div
                    style={{
                        background: btnColor,
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "13px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "10px",
                            display: "flex",
                            justifyContent: "center",
                            margin: "4px",
                            fontFamily: "AppleSDGothicNeo",
                            fontStyle: "normal",
                            fontWeight: "500",
                        }}
                    >
                        {showLessText}
                    </div>
                </div>
                <div
                    style={{
                        color: "#FFFFFF",
                        fontFamily: "AppleSDGothicNeo",
                        fontStyle: "normal",
                        fontWeight: "800",
                    }}
                >
                    {showMoreText}
                </div>
            </button>

            {/* 확장되는 컨텐츠 부분 */}
            <div
                style={{
                    maxHeight: isExpanded ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <button style={btnStyle} onClick={() => handleButtonClick(0)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}>BOOTH-A </div>

                        {a}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(1)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-B</div>

                        {b}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(2)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}>BOOTH-C</div>

                        {c}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(3)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-D</div>

                        {d}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(4)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-E </div>

                        {e}
                    </div>
                </button>
            </div>
        </div>
    );
}

function Map() {
    // 이미지 경로 배열
    const imagePaths = [MapImg, MapImgA, MapImgB, MapImgC, MapImgD, MapImgE];
    // 현재 이미지 상태
    const [mapImg, setMapImg] = useState(imagePaths[0]);
    return (
        <>
            <C.Page>
                <C.BlackBg />
                <C.Area>
                    <C.Title>
                        <PcTitle />
                    </C.Title>
                    <Mp.Background>
                        <C.Phone>
                            <Mp.Map>
                                <Header />
                                <C.PageTitle>MAP</C.PageTitle>
                                <Mp.MapTitle>[근화제 부스 지도]</Mp.MapTitle>
                                <Mp.Mapimgs>
                                    <Mp.Mapimg src={mapImg}></Mp.Mapimg>
                                </Mp.Mapimgs>
                                <Mp.Mapline></Mp.Mapline>
                                <Mp.MapInfo>
                                    <Mp.Infobox>
                                        <ExpandableContent
                                            showMoreText="5월 22일 수요일 - 낮 부스"
                                            showLessText="1일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="국제처, 건강증진센터, 총학생회, 운현방송국"
                                            c="ISSUE, 서울베스트내과의원, 시원스쿨, 운지문학회, 덕우 * Duck in 우이천, 돌멩돌맹, 여운 Afterglow, 물꼬, 햅피프로젝트"
                                            d="정치외교학, P.I.C.E., 덕성여대 영자신문사 VISTA, 빛내미, Atractivo"
                                            e="문화기획국, 국어국문학, 덕성 검도부, IT미디어공학, 화학, 바이오공학, 덕불, 필름소피, 사학, 유아교육과, 식품영양학, 생활체육학"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 22일 수요일 - 밤 부스"
                                            showLessText="1일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="국제처, 총학생회, 운현방송국"
                                            c="ISSUE, 서울베스트내과의원, 시원스쿨, 슈퍼(market)이끌림, 덕우 * Duck in 우이천, 덕칠이네 야채가게, 또아오락실, 어떻게나에게그대란행운이온걸까"
                                            d="빛내미, 디지털소프트웨어공학부, 정치외교학, 톤잘알, 폭닥폭닥"
                                            e="F.O.R.K, 과학기술대학, 약학대학, 덕냥당, 운현극예술연구회, 한빛, 천기누설, 몽글몽글, 사회복지학, 심리학, 언더덕씨, 열음"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 23일 목요일 - 낮 부스"
                                            showLessText="2일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="국제처, 총학생회, 운현방송국"
                                            c="기후환경과문화전공, 서울베스트내과의원, EF코리아, 여운 Afterglow, chaekbang(책방), 덕새 털-업, 물꼬, 락스타 호소인"
                                            d="생활체육학, 사이버보안, 사학, 도담도담, 드리즐스튜디오"
                                            e="문화기획국, 덕칠이네 야채가게, 이오, 유아교육과, 수학, 식품영양학, P.I.C.E., 바이오공학, 국어국문학, 아동가족학, F.O.R.K, 덕성 검도부"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 23일 목요일 - 밤 부스"
                                            showLessText="2일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="국제처, 총학생회"
                                            c="서울베스트내과의원, EF코리아, 열음, 나의 마음을 담아, Atractivo, 한빛, 덕냥당"
                                            d="컴퓨터공학, 화학, 사회복지학, 도담도담, 언더덕씨"
                                            e="운지문학회, 약학대학, 과학기술대학, 디지털소프트웨어공학부, 수학, 심리학, 운현극예술연구회, 일어일문학, 국어국문학, 아동가족학, 필름소피, 덕성 검도부"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 24일 금요일 - 낮 부스"
                                            showLessText="3일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="기후환경과문화전공, 총학생회, 운현방송국"
                                            c="원데이 클래스, 서울베스트내과의원, 시원스쿨, 오밀조밀, Dearest, 여운 Afterglow, 찰나, 모루팔이 덕우, 물꼬"
                                            d="덕성여대 영자신문사 VISTA, 과학기술대학, 식품영양학, 자세히생각하라XRADIUS, 햅피프로젝트"
                                            e="문화기획국, 바이오공학, 운지문학회, 디지털소프트웨어공학부, 일어일문학, LBC, 필름소피, 덕불, KimKim, 두들링, 덕냥당, 돌멩돌맹"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 24일 금요일 - 밤 부스"
                                            showLessText="3일차"
                                            a="진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                            b="총학생회, 운현방송국"
                                            c="원데이 클래스, 서울베스트내과의원, 시원스쿨, 귀요미 잡화점, Dearest, Atractivo, 덕새 털-업, 폭닥폭닥"
                                            d="빛내미, 과학기술대학, 운현극예술연구회, 자세히생각하라XRADIUS, 한빛"
                                            e="수학, 도담도담, 화학, 이오, 열음, LBC, 행운 하나 들고가세요~!, KimKim, 오묘한 상점, 꽃신을 신고, 뜨개뜨개"
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                        />
                                    </Mp.Infobox>
                                </Mp.MapInfo>
                            </Mp.Map>
                            <Footer />
                        </C.Phone>
                    </Mp.Background>
                </C.Area>
            </C.Page>
        </>
    );
}

export default Map;
