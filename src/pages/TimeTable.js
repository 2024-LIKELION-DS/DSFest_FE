import React from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TimeTableStyle";

function TimeTable() {
  return (
    <>
      <C.Page>
        <C.Center>
          <T.Background>
            <C.PageSpace>
              <T.TimeTable></T.TimeTable>
            </C.PageSpace>
          </T.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default TimeTable;
