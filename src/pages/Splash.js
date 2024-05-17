import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SplashStyle";

import PcTitle from "../components/PcTitle";
import FdayBeachImg from "../img/splash_1_sea_360x195.png";
import SdayBeachImg from "../img/splash_2_sea_360x195.png.png";
import TdayBeachImg from "../img/splash_3_sea_360x195.png";
import FdayBackStar from "../img/splash_1_star&bird_320x518.png";
import SdayBackStar from "../img/splash_2_star&bird_320x518.png";
import TdayBackStar from "../img/splash_3_star&bird_320x518.png";
import FdayCloudLeft from "../img/12_cloud_102x74.png";
import FdayCloudRight from "../img/12_cloud_143x144.png";
import TdayCloudLeft from "../img/3_cloud_104x75.png";
import TdayCloudRight from "../img/3_cloud_131x144.png";
import FdaySun1 from "../img/1_pentagon_143x137.png";
import FdaySun2 from "../img/1_bigcircle_67x73.png";
import FdaySun3 from "../img/1_hexagon_69x60.png";
import FdaySun4 from "../img/1_sun_56px.png";
import FdaySun5 from "../img/1_whitecircle_34x33.png";
import Title from "../img/splash_title_196x16.png";
import Logo from "../img/splash_logo_202x220.png";
import DateImg from "../img/splash_date_100x12.png";
import Text from "../img/splash_text_214x46.png";
import FdayBackImg from "../img/splash_1_bg.png";
import SdayBackImg from "../img/splash_2_bg.png";
import TdayBackImg from "../img/splash_3_bg.png";
import SdaySun1 from "../img/2_yellowcircle_74x75.png";
import SdaySun2 from "../img/2_whitecircle_35px.png";
import SdaySun3 from "../img/2_whitecircle_64px.png";
import SdaySun4 from "../img/2_yellowcircle_139x140.png";
import SdaySun from "../img/2_sun_56px.png";
import TdayMoon from "../img/3_moon_40px.png";
import TdayStar1 from "../img/3_star_179x116.png";
import TdayStar2 from "../img/3_star_99x63.png";
import TdayStar3 from "../img/3_star_220x176.png";

function Splash() {
  // 자동으로 Main 넘어가기
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  // 날짜별 테마 바꾸기
  const currentDate = new Date();
  const SecondDate = new Date(2024, 4, 23);
  const LastDate = new Date(2024, 4, 24);

  if (currentDate.toDateString() === LastDate.toDateString()) {
    return (
      <>
        <C.Page>
          <C.BlackBg />
          <C.Area>
            <C.Title>
              <PcTitle />
            </C.Title>
            <S.Background>
              <C.Phone>
                <S.Splash>
                  <S.BackgroundImg backgroundImage={TdayBackImg}>
                    <S.TdayMoon src={TdayMoon} alt="TdayMoon"></S.TdayMoon>
                    <S.TdayStar1 src={TdayStar1} alt="TdayStar1"></S.TdayStar1>
                    <S.TdayStar2 src={TdayStar2} alt="TdayStar2"></S.TdayStar2>
                    <S.TdayStar3 src={TdayStar3} alt="TdayStar3"></S.TdayStar3>
                    <S.LogoBox>
                      <S.Title src={Title} alt="Title"></S.Title>
                      <S.Logo src={Logo} alt="Logo"></S.Logo>
                      <S.Date src={DateImg} alt="Date"></S.Date>
                      <S.Text src={Text} alt="Text"></S.Text>
                    </S.LogoBox>
                    <S.BackStar src={TdayBackStar} alt="TdayBackStar"></S.BackStar>
                    <S.CloudGroup>
                      <S.CloudLeft src={TdayCloudLeft} alt="TdayCloudLeft"></S.CloudLeft>
                      <S.CloudRight src={TdayCloudRight} alt="TdayCloudRight"></S.CloudRight>
                    </S.CloudGroup>
                    <S.Beach src={TdayBeachImg} alt="TdayBeachImg"></S.Beach>
                  </S.BackgroundImg>
                </S.Splash>
              </C.Phone>
            </S.Background>
          </C.Area>
        </C.Page>
      </>
    );
  } else if (currentDate.toDateString() === SecondDate.toDateString()) {
    return (
      <>
        <C.Page>
          <C.BlackBg />
          <C.Area>
            <C.Title>
              <PcTitle />
            </C.Title>
            <S.Background>
              <C.Phone>
                <S.Splash>
                  <S.BackgroundImg backgroundImage={SdayBackImg}>
                    <S.SdaySun1 src={SdaySun1} alt="SdaySun1"></S.SdaySun1>
                    <S.SdaySun2 src={SdaySun2} alt="SdaySun2"></S.SdaySun2>
                    <S.SdaySun3 src={SdaySun3} alt="SdaySun3"></S.SdaySun3>
                    <S.SdaySun4 src={SdaySun4} alt="SdaySun4"></S.SdaySun4>
                    <S.SdaySun src={SdaySun} alt="SdaySun"></S.SdaySun>
                    <S.LogoBox>
                      <S.Title src={Title} alt="Title"></S.Title>
                      <S.Logo src={Logo} alt="Logo"></S.Logo>
                      <S.Date src={DateImg} alt="Date"></S.Date>
                      <S.Text src={Text} alt="Text"></S.Text>
                    </S.LogoBox>
                    <S.BackStar src={SdayBackStar} alt="SdayBackStar"></S.BackStar>
                    <S.CloudGroup>
                      <S.CloudLeft src={FdayCloudLeft} alt="FdayCloudLeft"></S.CloudLeft>
                      <S.CloudRight src={FdayCloudRight} alt="FdayCloudRight"></S.CloudRight>
                    </S.CloudGroup>
                    <S.Beach src={SdayBeachImg} alt="SdayBeachImg"></S.Beach>
                  </S.BackgroundImg>
                </S.Splash>
              </C.Phone>
            </S.Background>
          </C.Area>
        </C.Page>
      </>
    );
  } else {
    return (
      <>
        <C.Page>
          <C.BlackBg />
          <C.Area>
            <C.Title>
              <PcTitle />
            </C.Title>
            <S.Background>
              <C.Phone>
                <S.Splash>
                  <S.BackgroundImg backgroundImage={FdayBackImg}>
                    <S.FdaySun1 src={FdaySun1} alt="FdaySun1"></S.FdaySun1>
                    <S.FdaySun2 src={FdaySun2} alt="FdaySun2"></S.FdaySun2>
                    <S.FdaySun3 src={FdaySun3} alt="FdaySun3"></S.FdaySun3>
                    <S.FdaySun4 src={FdaySun4} alt="FdaySun4"></S.FdaySun4>
                    <S.FdaySun5 src={FdaySun5} alt="FdaySun5"></S.FdaySun5>
                    <S.LogoBox>
                      <S.Title src={Title} alt="Title"></S.Title>
                      <S.Logo src={Logo} alt="Logo"></S.Logo>
                      <S.Date src={DateImg} alt="Date"></S.Date>
                      <S.Text src={Text} alt="Text"></S.Text>
                    </S.LogoBox>
                    <S.BackStar src={FdayBackStar} alt="FdayBackStar"></S.BackStar>
                    <S.CloudGroup>
                      <S.CloudLeft src={FdayCloudLeft} alt="FdayCloudLeft"></S.CloudLeft>
                      <S.CloudRight src={FdayCloudRight} alt="FdayCloudRight"></S.CloudRight>
                    </S.CloudGroup>
                    <S.Beach src={FdayBeachImg} alt="FdayBeachImg"></S.Beach>
                  </S.BackgroundImg>
                </S.Splash>
              </C.Phone>
            </S.Background>
          </C.Area>
        </C.Page>
      </>
    );
  }
}

export default Splash;
