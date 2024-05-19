import React from "react";
import * as DM from "../styles/DeleteModalStyle";

function DeleteModal({ onClose, onDelete }) {
  return (
    <>
      <DM.Background onClick={onClose} />
      <DM.DeleteModal>
        <DM.ModalWrap>
          <DM.ModalCloseSpace>
            <DM.ModalClose onClick={onClose}>X</DM.ModalClose>
          </DM.ModalCloseSpace>
          <DM.ModalContent>
            <DM.ModalWarn>!</DM.ModalWarn>
            <DM.ModalTitle>해당 게시물을 삭제하시겠습니까?</DM.ModalTitle>
            <DM.ModalText>삭제 시, 복원이 어렵습니다.</DM.ModalText>
            <DM.CardDeleteBtn onClick={onDelete}>삭제</DM.CardDeleteBtn>
            <DM.CardDeleteBtnNone onClick={onClose}>취소</DM.CardDeleteBtnNone>
          </DM.ModalContent>
        </DM.ModalWrap>
      </DM.DeleteModal>
    </>
  );
}

export default DeleteModal;
