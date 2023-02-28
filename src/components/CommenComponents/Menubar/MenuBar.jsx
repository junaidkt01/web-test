import React from "react";

import home_svg from "../../../assets/img/home.svg";
import about_svg from "../../../assets/img/about.svg";
import wis_head_svg from "../../../assets/img/wis_head.svg";
import service_svg from "../../../assets/img/service.svg";
import mail_svg from "../../../assets/img/mail.svg";

import {
  BottomBorder,
  HeadsDiv,
  Menu,
  MenuHead,
  MenuIcon,
  RoboIcon,
  TopBorder,
} from "./MenuBarElements";

const MenuBar = () => {
  const handleToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <Menu>
        <HeadsDiv onClick={handleToTop} to="/">
          <MenuIcon alt="..." src={home_svg} />
          <MenuHead>Home</MenuHead>
        </HeadsDiv>
        <HeadsDiv onClick={handleToTop} to="/about">
          <MenuIcon alt="..." src={about_svg} />
          <MenuHead>About</MenuHead>
        </HeadsDiv>
        <HeadsDiv onClick={handleToTop} to="/">
          <RoboIcon alt="..." src={wis_head_svg} />
        </HeadsDiv>
        <HeadsDiv onClick={handleToTop} to="/services">
          <MenuIcon alt="..." src={service_svg} />
          <MenuHead>Service</MenuHead>
        </HeadsDiv>
        <HeadsDiv onClick={handleToTop} to="/contactus">
          <MenuIcon alt="..." src={mail_svg} />
          <MenuHead>Contact</MenuHead>
        </HeadsDiv>
      </Menu>
      <TopBorder />
      <BottomBorder />
    </>
  );
};

export default MenuBar;
