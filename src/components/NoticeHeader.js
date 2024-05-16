import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/HeaderStyle";

import headerBack from "../img/header_back_30px.png";

function MenuTrigger({ onClick, isActive, isVisible }) {
  return (
    <H.MenuTrigger onClick={onClick} className={isActive ? "active-7" : ""} $isVisible={isVisible}>
      <span></span>
      <span></span>
      <span></span>
    </H.MenuTrigger>
  );
}

function NoticeHeader({ fromPage }) {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleMenuClick = () => {
    setDropdownVisible(true);
  };

  const closeMenuClick = () => {
    setDropdownVisible(false);
  };

  const handleBack = () => {
    navigate(`/noticeList?page=${fromPage}`, { state: { fromPage } });
  };

  return (
    <>
      <H.Header>
        <H.HeaderLogoBack onClick={handleBack}>
          <img src={headerBack} alt="뒤로가기" />
        </H.HeaderLogoBack>
        <H.HeaderMenu onClick={handleMenuClick} $isVisible={isDropdownVisible}>
          <MenuTrigger onClick={handleMenuClick} isActive={isDropdownVisible} isVisible={isDropdownVisible} />
        </H.HeaderMenu>

        {isDropdownVisible && (
          <>
            <H.Background onClick={closeMenuClick} />
            <H.DropdownContainer $isVisible={isDropdownVisible}>
              <H.DropdownItem onClick={() => handleNavLinkClick("/noticeList")}>Notice</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/map")}>Map</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/review")}>Review</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/timetable")}>Time Table</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/photo")}>Photo</H.DropdownItem>
            </H.DropdownContainer>
          </>
        )}
      </H.Header>
    </>
  );
}

export default NoticeHeader;
