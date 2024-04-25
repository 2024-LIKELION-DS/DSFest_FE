import React from "react";
import * as C from "../styles/CommonStyle";
import * as R from "../styles/ReviewStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";

function Review() {
  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <R.Background>
            <C.Phone>
              <R.Review>
                <Header />
                <C.PageTitle>REVIEW</C.PageTitle>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </R.Review>
            </C.Phone>
          </R.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Review;
