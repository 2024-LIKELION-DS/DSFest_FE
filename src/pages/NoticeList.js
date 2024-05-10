import React from "react";
import * as C from "../styles/CommonStyle";
import * as NL from "../styles/NoticeListStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import boatImg from "../img/boat_37x44.png";
import exImg from "../img/exImg.png";

function NoticeList() {
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
                <NL.img_wrap>
                <NL.img_boat src={boatImg} alt="Boat" />
                </NL.img_wrap>
                <NL.content_wrap>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  <NL.content>
                    <NL.box>
                      <NL.img_exImg src={exImg} alt="exImg" /> 
                    </NL.box>
                    <NL.title>
                      영근터 쓰레기 처리 안내
                    </NL.title>
                    <NL.category>
                      Notice
                    </NL.category>
                  </NL.content>
                  
                </NL.content_wrap>
                
                <Footer />
              </NL.Notice>
            </C.Phone>
          </NL.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default NoticeList;
