import React from "react";
import * as C from "../styles/CommonStyle";
import * as N from "../styles/NoticeStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import boatImg from "../img/boat_37x44.png";
import exImg from "../img/exImg.png";

function Notice() {
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
                <N.img_wrap>
                <N.img_boat src={boatImg} alt="Boat" />
                </N.img_wrap>
                <N.content_wrap>
                  <N.box_wrap>
                    <N.List>Notice</N.List>
                    <N.Title>영근터 쓰레기 처리 안내</N.Title>
                    <N.Context>영근터 쓰레기 처리 안내드립니다. 현재 영근터에 쓰레기들이 너무 많다는 제보가 들어왔습니다. 쓰레기는 학교 쓰레기통에 분리수거 후 버리고, 양이 많은 경우 밤에 따로 진행되는 분리수거 시간에 버려주시기 바랍니다.
                      dkdkdkdfsdfsdf
                      sdfsdfsdfsdfs
                      sdfsdfsdfsdfssdfsd
                      sdfsdfsdfsdfssdfsdfsd
                      sdfsdfsdfsdfssdfsdfsd
                      sdfsdf
                      dkdkdkdfsdfsdfsdfsdf
                      sdfsdfsdfsd
                      sdfsdf
                      sdfsdf
                      sdfsdf
                      sdfsdf
                      sdfsdf
                      sdfsdf
                      sdfsdfsdfsdfsdfsdfsdfdfsdfsfsdfsfsf
                    </N.Context>
                    <N.img_wrap2>
                      <N.img_exImg src={exImg} alt="exImg" />
                      <N.img_exImg src={exImg} alt="exImg" />
                      <N.img_exImg src={exImg} alt="exImg" />
                    </N.img_wrap2>
                    
                  </N.box_wrap>
                </N.content_wrap>
                
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
