import styled from "styled-components";
import { Link } from "react-router-dom";

import logo_white from "../../../assets/img/logo-white.png";
// import wis_gif from "../../../assets/img/wis.gif";
import wis_gif from "../../../assets/img/wis.webp";

export const Nav = styled.div`
  margin: 0 4rem 0 4rem;
  color: white;
  text-transform: uppercase;
  border-bottom: 3px solid white;

  @media screen and (max-width: 700px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  display: flex;
  height: 113px;
  cursor: pointer;
`;

export const Logo = styled.div`
  background-image: url(${logo_white});
  margin-top: 3rem;
  width: 180px;

  background-repeat: no-repeat;
`;

export const LogoGif = styled.div`
  background: url(${wis_gif});
  width: 180px;
  background-repeat: no-repeat;

  @media screen and (max-width: 650px) {
   width:100px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  margin-right: 2rem;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: large;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border-bottom: solid 2px orange;
    font-weight: 750;
  }
`;
