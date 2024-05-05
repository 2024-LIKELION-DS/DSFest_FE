import React from "react";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SplashStyle";

import PcTitle from "../components/PcTitle";

function Splash() {
  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <S.Background>
            <C.Phone>
              <S.Splash>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
              </S.Splash>
            </C.Phone>
          </S.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Splash;
