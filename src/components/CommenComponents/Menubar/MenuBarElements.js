import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 0.9559174011401436) 0%,
      rgba(247, 147, 30, 1) 0%,
      rgba(18, 11, 2, 1) 4%
    );
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    position: fixed;
    bottom: 0;
  }
`;
export const HeadsDiv = styled(Link)`
  margin: 0.5rem;
  margin-bottom: -9px;
  color: #fff;
  text-decoration: none;
`;
export const MenuHead = styled.p`
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #f7931e;
  }
`;
export const MenuIcon = styled.img`
  width: 40px;
  height: auto;
  margin-bottom: -14px;
  margin-left: 3px;
`;
export const RoboIcon = styled.img`
  width: 40px;
`;
export const BottomBorder = styled.div`
  height: 30px;
  background-color: #f7931e;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1001;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const TopBorder = styled.div`
  height: 30px;
  background-color: #f7931e;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const LeftBorder = styled.div`
  background-color: #f7931e;
  position: fixed;
  left: 0;
  width: 30px;
  height: 100px;
  z-index: 1001;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
