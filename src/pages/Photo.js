import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import * as C from "../styles/CommonStyle";
import * as P from "../styles/PhotoStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PhotoBg from "../img/photo_bg_360x579.png";
import PhotoFS from "../img/photo_360x579.png";
import PhotoDown from "../img/photo_download_24x24.png";
import PhotoBox from "../components/PhotoBox";

function Photo() {
  const [imagePreviews, setImagePreviews] = useState([null, null]);

  const setImagePreview = (index, preview) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews[index] = preview;
    setImagePreviews(updatedPreviews);
  };

  function isSafari() {
    return /AppleWebKit/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
  }

  const ref = useRef();

  const onButtonClick = async () => {
    if (ref.current === null) {
      return;
    }

    const captureImage = async () => {
      try {
        const dataUrl = await toPng(ref.current);
        const link = document.createElement("a");
        link.download = "2024 근화제 찬란.png";
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.log(err);
      }
    };

    if (isSafari()) {
      await toPng(ref.current);
      await toPng(ref.current);
      await toPng(ref.current);
      await toPng(ref.current);
      await toPng(ref.current);
      await captureImage();
    } else {
      await captureImage();
    }
  };

  return (
    <>
      <C.Page>
        <C.BlackBg />
        <C.Area>
          <C.Title>
            <PcTitle />
          </C.Title>
          <P.Background>
            <C.Phone>
              <P.Photo>
                <Header />
                <C.PageTitle>PHOTO</C.PageTitle>
                <P.PhotoSpace>
                  <P.TextSpace>
                    <P.Text>
                      <p>* 이미지는 약 5:6 비율을 권장합니다.</p>
                    </P.Text>
                    <P.PhotoDownImg src={PhotoDown} alt="다운로드" onClick={onButtonClick} />
                  </P.TextSpace>
                </P.PhotoSpace>
                <div ref={ref}>
                  <P.FrameBox>
                    <P.Frame src={PhotoBg} alt="프레임" />
                  </P.FrameBox>
                  <P.PhotoFrame>
                    <P.PhotoPosBox>
                      <P.PhotoPos>
                        <P.PhotoPosOne>
                          <PhotoBox index={0} setImagePreview={setImagePreview} imagePreview={imagePreviews[0]} />
                        </P.PhotoPosOne>
                        <P.PhotoPosTwo>
                          <PhotoBox index={1} setImagePreview={setImagePreview} imagePreview={imagePreviews[1]} />
                        </P.PhotoPosTwo>
                        <P.PhotoPosThree>
                          <PhotoBox index={2} setImagePreview={setImagePreview} imagePreview={imagePreviews[2]} />
                        </P.PhotoPosThree>
                        <P.PhotoPosFour>
                          <PhotoBox index={3} setImagePreview={setImagePreview} imagePreview={imagePreviews[3]} />
                        </P.PhotoPosFour>
                      </P.PhotoPos>
                    </P.PhotoPosBox>
                  </P.PhotoFrame>
                  <P.FrameStyle>
                    <P.FrameImg src={PhotoFS} alt="프레임 스타일" />
                  </P.FrameStyle>
                </div>
                <Footer />
              </P.Photo>
            </C.Phone>
          </P.Background>
        </C.Area>
      </C.Page>
    </>
  );
}

export default Photo;
