import React from "react";
import * as C from "../styles/CommonStyle";
import * as S from "../styles/SplashStyle";

function Splash() {
  return (
    <>
      <C.Page>
        <C.Center>
          <S.Background>
            <C.PageSpace>
              <S.Splash></S.Splash>
            </C.PageSpace>
          </S.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Splash;
