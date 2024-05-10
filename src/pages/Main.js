import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MainStyle";

import PcTitle from "../components/PcTitle";
import Footer from "../components/Footer";
import Shortcut from '../components/Shortcut';

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
                <Shortcut/>
                <Footer/>
              </M.Main>
            </C.Phone>
          </M.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Main;
