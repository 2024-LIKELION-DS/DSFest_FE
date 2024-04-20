import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MainStyle";

function Main() {
  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.Main></M.Main>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Main;
