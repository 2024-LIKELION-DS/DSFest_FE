import React from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TimeTableStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TimeTable() {
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
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
                {/* <Footer /> */}
              </T.TimeTable>
            </C.Phone>
          </T.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default TimeTable;
