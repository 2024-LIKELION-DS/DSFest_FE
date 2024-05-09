import React from "react";
import * as C from "../styles/CommonStyle";
import * as P from "../styles/PhotoStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";

function Photo() {
  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <P.Background>
            <C.Phone>
              <P.Photo>
                <Header />
                <C.PageTitle>PHOTO</C.PageTitle>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </P.Photo>
            </C.Phone>
          </P.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Photo;
