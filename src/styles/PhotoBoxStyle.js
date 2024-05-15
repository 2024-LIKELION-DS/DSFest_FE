import styled from "styled-components";

export const PhotoBox = styled.div`
  width: 152px;
  height: 184px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const UploadLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const File = styled.input``;

export const FilePreview = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  ${({ $horizontal }) =>
    $horizontal
      ? `
    img {
      height: 100%;
      width: auto;
    }
  `
      : `
    img {
      height: auto;
      width: 100%;
    }
  `}
`;
