import React from "react";
import * as C from "../styles/CommonStyle";

import titleTitle from "../img/splash_title_196x16.png";
import titleLogo from "../img/splash_logo_202x220.png";
import titleDate from "../img/splash_date_100x12.png";
import titleText from "../img/splash_text_214x46.png";

function PcTitle() {
  return (
    <>
      <C.TitleTitle>
        <img src={titleTitle} alt="2024 덕성여자대학교 근화제" />
      </C.TitleTitle>
      <C.TitleLogo>
        <img src={titleLogo} alt="찬란" />
      </C.TitleLogo>
      <C.TitleDate>
        <img src={titleDate} alt="05.22 - 05.24" />
      </C.TitleDate>
      <C.TitleText>
        <img src={titleText} alt="반짝이는 덕성, 일렁이는 바다 찬란한 오늘로 물들이다" />
      </C.TitleText>
    </>
  );
}

export default PcTitle;
