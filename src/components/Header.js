import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/HeaderStyle";

import headerLogo from "../img/header_logo_48px.png";
import headerMenu from "../img/header_icon_menu_30px.png";
import headerClickMenu from "../img/header_icon_menu_click_30px.png";

function Header() {
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

  return (
    <>
      <H.Header>
        <H.HeaderLogo onClick={() => handleNavLinkClick("/main")}>
          <img src={headerLogo} alt="찬란" />
        </H.HeaderLogo>
        <H.HeaderMenu onClick={handleMenuClick} isVisible={isDropdownVisible}>
          <img src={isDropdownVisible ? headerClickMenu : headerMenu} alt="메뉴" />
        </H.HeaderMenu>
        {isDropdownVisible && (
          <>
            <H.Background onClick={closeMenuClick} />
            <H.DropdownContainer isVisible={isDropdownVisible}>
              <H.DropdownItem onClick={() => handleNavLinkClick("/notice")}>Notice</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/map")}>Map</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/review")}>Review</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/timetable")}>Time Table</H.DropdownItem>
              <H.DropdownItem onClick={() => handleNavLinkClick("/event")}>Event</H.DropdownItem>
            </H.DropdownContainer>
          </>
        )}
      </H.Header>
    </>
  );
}

export default Header;
