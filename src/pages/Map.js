import React from "react";
import * as C from "../styles/CommonStyle";
import * as Mp from "../styles/MapStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";

function Map() {
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
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </Mp.Map>
            </C.Phone>
          </Mp.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Map;
