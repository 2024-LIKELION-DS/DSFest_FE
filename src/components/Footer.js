import React from "react";
import * as F from "../styles/FooterStyle";

import footerLogo from "../img/footer_logo_67x24.png";

function Footer() {
  return (
    <>
      <F.Footer>
        <F.FooterSpace>
          <F.Title>
            <F.TitleText>
              <p>2024 덕성여자대학교 근화제 &lt;찬란&gt; 웹페이지</p>
            </F.TitleText>
            <F.Logo>
              <img src={footerLogo} alt="파도 x 덕성여대 멋쟁이사자처럼" />
            </F.Logo>
          </F.Title>
          <F.Developers>
            <F.Part>
              <p>
                Plan&Design
                <br />
                Front-end
                <br />
                Back-end
              </p>
            </F.Part>
            <F.Lion>
              <p>
                이성경 강승현
                <br />
                김서윤 김현지 목소연 박소은 윤윤지 이현주 한지원
                <br />
                김은서 박규리 이규민 한진경
              </p>
            </F.Lion>
          </F.Developers>
          <F.CopyRight>© 2024. ds_likelion all rights reserved.</F.CopyRight>
        </F.FooterSpace>
      </F.Footer>
    </>
  );
}

export default Footer;
