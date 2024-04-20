import React from "react";
import * as C from "../styles/CommonStyle";
import * as Mp from "../styles/MapStyle";

function Map() {
  return (
    <>
      <C.Page>
        <C.Center>
          <Mp.Background>
            <C.PageSpace>
              <Mp.Map></Mp.Map>
            </C.PageSpace>
          </Mp.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Map;
