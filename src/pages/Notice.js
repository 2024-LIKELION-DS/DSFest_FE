import React from "react";
import * as C from "../styles/CommonStyle";
import * as N from "../styles/NoticeStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";

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
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </N.Notice>
            </C.Phone>
          </N.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Notice;
