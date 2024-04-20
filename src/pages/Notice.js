import React from "react";
import * as C from "../styles/CommonStyle";
import * as N from "../styles/NoticeStyle";

function Notice() {
  return (
    <>
      <C.Page>
        <C.Center>
          <N.Background>
            <C.PageSpace>
              <N.Notice></N.Notice>
            </C.PageSpace>
          </N.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Notice;
