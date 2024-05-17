import React from "react";
import { useSwipeable } from "react-swipeable";
import * as M from "../styles/ModalStyle";

function Modal({ onClose, imageUrl, imageCount, currentIndex, noticeHeight, onSwipeLeft, onSwipeRight }) {
  const handlers = useSwipeable({
    onSwipedLeft: onSwipeLeft,
    onSwipedRight: onSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <>
      <M.Modal {...handlers} noticeHeight={noticeHeight}>
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
