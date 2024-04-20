import React from "react";
import * as C from "../styles/CommonStyle";
import * as R from "../styles/ReviewStyle";

function Review() {
  return (
    <>
      <C.Page>
        <C.Center>
          <R.Background>
            <C.PageSpace>
              <R.Review></R.Review>
            </C.PageSpace>
          </R.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Review;
