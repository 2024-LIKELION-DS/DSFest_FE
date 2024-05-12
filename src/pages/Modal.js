import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/ModalStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Modal() {
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
              <M.Modal>
                <Header />
                <C.PageTitle>REVIEW</C.PageTitle>
                여기 부분 작업!
                <br />
                기존 코드 절대 수정하면 안 됩니다
                {/* <Footer /> */}
              </M.Modal>
            </C.Phone>
          </M.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Modal;
