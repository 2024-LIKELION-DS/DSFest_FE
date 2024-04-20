import React from "react";
import * as C from "../styles/CommonStyle";
import * as DE from "../styles/DSEventStyle";

function DSEvent() {
  return (
    <>
      <C.Page>
        <C.Center>
          <DE.Background>
            <C.PageSpace>
              <DE.DSEvent></DE.DSEvent>
            </C.PageSpace>
          </DE.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default DSEvent;
