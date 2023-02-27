import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Logo,
  LogoGif,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <NavContainer>
        <NavLogo onClick={() => navigate("/")}>
          <Logo />
          <LogoGif />
        </NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/careers">Careers</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contactus">Contact us</NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
