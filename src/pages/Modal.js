import React from "react";
import * as M from "../styles/ModalStyle";

function Modal({ onClose, imageUrl, imageCount, currentIndex,noticeHeight }) {
  return (
    <>
      <M.Modal noticeHeight={noticeHeight}>
        <M.text>
          {currentIndex} / {imageCount}
        </M.text>
        <M.CloseButton onClick={onClose}>X</M.CloseButton>
        <M.ModalImg src={imageUrl} alt="Modal Content" />
      </M.Modal>
    </>
  );
}

export default Modal;
