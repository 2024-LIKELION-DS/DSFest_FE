import React from "react";
import * as C from "../styles/CommonStyle";
import * as DE from "../styles/DSEventStyle";

import PcTitle from "../components/PcTitle";

function DSEvent() {
  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <DE.Background>
            <C.Phone>
              <DE.DSEvent>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </DE.DSEvent>
            </C.Phone>
          </DE.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default DSEvent;
