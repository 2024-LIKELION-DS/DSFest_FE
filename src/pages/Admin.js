import React from "react";
import * as A from "../styles/AdminStyle";
import { useNavigate } from "react-router-dom";

import Logo from "../img/header_logo_48px.png";
import Footer from "../components/Footer";

function Admin() {
  const navigate = useNavigate();

  const handlePado = () => {
    navigate("/");
  };

  return (
    <>
      <A.Background>
        <A.Admin>
          <A.ALogo src={Logo} alt="찬란" onClick={handlePado} />
          <A.Box>
            여기 부분 작업!
            <br />
            기존 코드 절대 수정하면 안 됩니다
          </A.Box>
        </A.Admin>
        <Footer />
      </A.Background>
    </>
  );
}

export default Admin;
