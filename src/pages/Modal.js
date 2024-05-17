import React from "react";
import { useSwipeable } from "react-swipeable";
import leftArrowImg from "../img/arrow_L.png";
import rightArrowImg from "../img/arrow_R.png";
import * as M from "../styles/ModalStyle";

function Modal({ onClose, imageUrl, imageCount, currentIndex, noticeHeight, onSwipeLeft, onSwipeRight }) {
  const handlers = useSwipeable({
    onSwipedLeft: onSwipeLeft,
    onSwipedRight: onSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <M.Modal {...handlers} noticeHeight={noticeHeight}>
        <M.text>
          {currentIndex} / {imageCount}
        </M.text>
        <M.CloseButton onClick={onClose}>X</M.CloseButton>
        <M.ModalImg src={imageUrl} alt="Modal Content" />
        {imageCount > 1 && (
          <M.ArrowWrapper>
            <M.ArrowImg src={leftArrowImg} alt="leftarrowImg" onClick={onSwipeRight} show={currentIndex > 1} />
            <M.ArrowImg src={rightArrowImg} alt="rightarrowImg" onClick={onSwipeLeft} show={currentIndex < imageCount} />
          </M.ArrowWrapper>
        )}
      </M.Modal>
    </>
  );
}

export default Modal;
