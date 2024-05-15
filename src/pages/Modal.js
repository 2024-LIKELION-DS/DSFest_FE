import React from "react";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/ModalStyle";
import PcTitle from "../components/PcTitle";

function Modal({ onClose, imageUrl, imageCount, currentIndex }) {
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
                <M.text>{currentIndex} / {imageCount}</M.text>
                <M.CloseButton onClick={onClose}>X</M.CloseButton>
                <img src={imageUrl} alt="Modal Content" style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', display: 'block', margin: 'auto' }} />
              </M.Modal>
            </C.Phone>
          </M.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Modal;
