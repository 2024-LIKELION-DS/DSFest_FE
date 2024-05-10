import React from "react";
import * as P from "../styles/PhotoBoxStyle";

import PhotoCam from "../img/photo_cam_32x32.png";

function PhotoBox({ index, setImagePreview, imagePreview }) {
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(index, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <P.PhotoBox>
      <P.UploadLabel htmlFor={`file${index}`}>
        {!imagePreview && <img src={PhotoCam} alt="이미지 업로드" />}
      </P.UploadLabel>
      <P.File
        type="file"
        name={`file${index}`}
        id={`file${index}`}
        accept="image/*"
        onChange={handleProfileImageChange}
      />
      <P.FilePreview>{imagePreview && <img src={imagePreview} alt="Preview" />}</P.FilePreview>
    </P.PhotoBox>
  );
}

export default PhotoBox;
