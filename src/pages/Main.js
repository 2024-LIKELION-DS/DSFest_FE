import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MainStyle";

import PcTitle from "../components/PcTitle";
import Footer from "../components/Footer";
import Shortcut from '../components/Shortcut';

import bg from "../img/bg_360x440.png";

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
                <div className='bg-box'><img className='bg' src={bg} alt='bg'/></div>
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
