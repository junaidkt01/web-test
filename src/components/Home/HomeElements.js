import styled from "styled-components";
import { Link } from "react-router-dom";

import bg3 from "../../assets/img/bg3_.webp";
import superwis from "../../assets/img/superwis.webp";
import wis7 from "../../assets/img/wis7.png";

// BANNER SECTION START ------------

export const Div = styled.div`
  margin: 4rem;
  color: #fff;
  border-bottom: 3px solid #fff;
  display: grid;
  place-items: center;

  @media screen and (max-width: 600px) {
    margin: 2rem;
    border-bottom: none;
  }
`;
export const MainText = styled.p`
  font-size: 55px;
  font-weight: 900;
  /* min-height: 200px; */
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 34px;
    max-width: 400px;
    min-height: 200px;
    margin-bottom: 2rem;
  }
`;
export const BannerDiv = styled.div`
  text-align: center;
  width: 700px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const TextContent = styled.p`
  max-width: 700px;
  font-size: large;
  margin-bottom: 2rem;
  margin-top: -2rem;
  line-height: 1.5rem;
  text-align: center;

  @media screen and (max-width: 650px) {
    margin-top: -5rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;

  @media screen and (max-width: 600px) {
    display: grid;
  }
`;
export const HomeButton = styled.button`
  border: 4px solid #f7931e;
  width: 223.33px;
  height: 74.8px;
  margin: 1rem;
  color: #fff;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease-out;
  background: linear-gradient(to top, #00000000 50%, #f7931e 50%);
  background-size: 100% 200%;
  background-position: bottom;

  &:hover {
    background-position: top;
  }

  @media screen and (max-width: 800px) {
    height: 65px;
  }
`;
export const HomeMenu = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 3rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    margin-bottom: -8rem;
  }
`;

export const HomeItem = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const HomeItemsLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: large;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #f7931e;
  }
`;

// BANNER SECTION END ------------

// ABOUT SECTION START ------------

export const AboutSection = styled.div`
  background-color: #fff;
  /* display: grid;
  place-items: center; */
`;

export const AboutContent = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;

export const AboutHeader = styled.h1`
  text-transform: uppercase;
  font-family: "Archivo Black", sans-serif;
  font-weight: 1000;
  font-size: 120px;
  letter-spacing: 5px;
  color: #d7d7d7;
  line-height: 1em;
  margin: 4rem 0 2rem 0;
  max-width: 1000px;

  @media screen and (max-width: 900px) {
    font-size: 40px;
    max-width: 400px;
  }
`;

export const AboutText = styled.p`
  max-width: 700px;
  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #393939;

  @media screen and (max-width: 900px) {
    max-width: 400px;
    padding: 0 1rem;
  }
`;

export const AboutMain = styled.div`
  color: #fff;
  margin-top: 10rem;

  @media screen and (max-width: 900) {
    display: grid;
    justify-content: center;
  }

  /* dot */
  button.rec-dot {
    background-color: black;
    box-shadow: 0 0 1px 1px #fff;
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px #7a7272ad;
    background-color: #fff;
  }
  /* dot */
`;

export const AboutImg = styled.img`
  position: absolute;
  right: 7rem;
  margin-top: -75px;
  background-size: cover;
  background-position: center;
  width: auto;
  height: auto;

  @media screen and (max-width: 900px) {
    position: static;
    margin: 0;
    width: 100%;
    margin-top: -100px;
  }
`;
export const MainContent = styled.div`
  background-color: #01010f;
  max-width: 580px;
  min-height: 480px;
  position: relative;
  /* margin-top: 10rem; */
  /* margin-left: -30rem; */
  left: 4rem;
  padding-left: 5rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 900px) {
    left: 0;
    margin: 0rem;
    padding: 2rem;
    margin-top: -4px;
  }
`;
export const MainContext = styled.div`
  background-color: #01010f;
`;
export const ButtonReadMore = styled.button`
  border: 4px solid #f7931e;
  width: 223.33px;
  height: 74.8px;
  margin: 1rem;
  color: #fff;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease-out;
  background: linear-gradient(to top, #00000000 50%, #f7931e 50%);
  background-size: 100% 200%;
  background-position: bottom;

  &:hover {
    background-position: top;
  }
`;
export const Head = styled.h3`
  text-transform: uppercase;
  padding-top: 3rem;
  margin-bottom: 40px;
  padding-left: 0.5rem;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  line-height: 2em;
  font-family: "Archivo Black", sans-serif;
  margin: 15px 0;

  @media screen and (max-width: 900px) {
    margin: 0;
    padding-left: 0.5rem;
  }
`;
export const Text = styled.p`
  position: relative;
  // min-width: 320px;
  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #fff;
  margin: 30px 70px 30px 10px;

  @media screen and (max-width: 900px) {
    margin: 30px 0 30px 0;
  }
`;

export const RoboSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  margin-left: 1rem;

  @media screen and (max-width: 900px) {
    margin-left: 4rem;
    margin-right: 3rem;
  }
`;
export const RoboText = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 900px) {
    font-size: 35px;
    font-weight: 900;
  }
`;
export const Robo = styled.img`
  min-width: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NewDiv = styled.div`
  background-color: black;
  color: #fff;
`;
export const NewCards = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem;

  @media screen and (max-width: 700px) {
    display: block;
    justify-content: center;
  }
`;
export const NewCard = styled.div`
  display: grid;
  text-align: center;

  @media screen and (max-width: 700px) {
    margin-top: 2rem;
  }
`;
export const NewIcon = styled.div`
  color: #fff;
  font-size: 40px;
`;
export const NewHead = styled.h3``;
export const NewText = styled.p`
  @media screen and (max-width: 700px) {
    margin-top: -0.5rem;
  }
`;

export const XIcon = styled.p`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SuperRobo = styled.div`
  background-image: url(${superwis});
  width: 100px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 2rem;
`;
export const RoboLine = styled.p`
  margin-top: -1.2rem;
  border-bottom: 3.5px solid black;
`;

export const WorkButton = styled.button`
  border: 4px solid #f7931e;
  width: 223.33px;
  height: 74.8px;
  margin: 1rem 1rem 0 1rem;
  color: black;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease-out;
  background: linear-gradient(to top, #00000000 50%, #f7931e 50%);
  background-size: 100% 200%;
  background-position: bottom;

  &:hover {
    background-position: top;
  }
`;

export const WorkSection = styled.div`
  padding-bottom: 3rem;

  // @media screen and (max-width: 700px) {
  //   margin-top: 3rem;
  // }
`;

export const ArrowIcon = styled.i`
  cursor: pointer;
`;

export const WorksCard = styled.div`
  display: flex;
  margin: 0 3rem;
  border-top: 3px solid black;
  padding-top: 3rem;

  /* opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08); */

  @media screen and (max-width: 900px) {
    border-top: none;
    display: block;
    justify-content: center;
    margin: -4rem 0 0 0;
  }
`;
export const Works = styled.div`
  margin: 0.5rem 2rem 1rem 2rem;
`;
export const WorksHead = styled.h1`
  font-family: "Archivo Black", sans-serif;
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  color: #171717;
`;
export const WorksText = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 1.8rem;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #393939;
`;
export const WorkImg = styled.img`
  margin-bottom: 2rem;
  width: auto;
  height: auto;
  @media screen and (max-width: 900px) {
    margin-left: 1rem;
    max-width: 90%;
  }
`;
export const ImgAndButton = styled.div``;
export const ImgAndButton1 = styled.div`
  margin: 2rem;
  cursor: pointer;
  font-size: 30px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const ImgAndButton2 = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    margin-left: 2rem;
    cursor: pointer;
    font-size: 30px;
    margin-bottom: 1rem;
  }
`;

export const WorkQuote = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.89)),
    url(${bg3});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 130rem;
  background-position: center;
  color: #fff;
  width: 100%;

  display: grid;
  place-items: center;
  text-align: center;
`;

export const QuoteHead = styled.h2`
  font-size: 60px;
  font-weight: 900;
  font-family: "Archivo Black", sans-serif;
  @media screen and (max-width: 900px) {
    font-size: 45px;
  }
`;
export const QuoteText = styled.p`
  max-width: 600px;

  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const PlayButton = styled.div`
  display: grid;
  place-items: center;
  border: 4px solid #f7931e;
  width: 80px;
  height: 80px;
  margin: 1rem;
  color: #fff;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 3rem;

  transition: all 0.2s ease-out;
  background: linear-gradient(to top, #00000000 50%, #f7931e 50%);
  background-size: 100% 200%;
  background-position: bottom;

  &:hover {
    background-position: top;
  }
`;

export const Business = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: 900px) {
    margin: 1rem;
    padding-bottom: 2rem;
  }
`;
export const BusinessImg = styled.img`
  width: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 4rem -2rem 4rem 4rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const RoboRider = styled.div`
  background-image: url(${wis7});
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  animation-name: move;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-direction: normal;

  @keyframes move {
    from {
      left: 0;
    }
    to {
      left: 85%;
    }
  }
  @media screen and (max-width: 900px) {
    @keyframes move {
      from {
        left: 0;
      }
      to {
        left: 70%;
      }
    }
  }
`;
export const RiderRoboLine = styled.p`
  margin-top: -0.5rem;
  border-bottom: 3.5px solid black;
`;
export const BusinessLine = styled.div`
  max-width: 800px;
`;
export const BusinessBox = styled.div`
  background-color: black;
  color: #fff;
  padding: 4rem 3rem 0rem 3rem;
  height: 300px;

  @media screen and (max-width: 900px) {
    padding: 1rem;
    height: 400px;
  }
`;
export const BusinessHead = styled.h1``;
export const BusinessText = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

// ABOUT SECTION END ------------

export const LiveChat = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Chat = styled.div``;
export const ChatIcon = styled.img`
  margin-left: 1rem;
  width: 50px;
`;
