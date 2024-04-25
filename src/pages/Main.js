import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MainStyle";

import PcTitle from "../components/PcTitle";

function Main() {
  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <M.Background>
            <C.Phone>
              <M.Main>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </M.Main>
            </C.Phone>
          </M.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Main;
