/* src: url("../../assets/fonts/crazy/crazy.ttf") format('truetype'); */
import styled from "styled-components";

export const ServicesTxtSection = styled.div`
  margin: 4rem 0 0 0;
  padding: 0 1rem;
`;

export const ServiceCardsDiv = styled.div`
  margin: 0 3rem 5rem;
  display: grid;
  place-items: center;
  @media screen and (max-width: 900px) {
    margin: 0 1rem;
  }
`;
export const ContactButton = styled.button`
  border: 4px solid #f7931e;
  width: 223.33px;
  height: 74.8px;
  margin: 1rem;
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
  @media screen and (max-width: 900px) {
    margin-bottom: 3rem;
  }
`;
export const ServiceCards = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    display: grid;
  }
`;
export const ServiceCard = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  width: 320px;
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 0;
    width: 300px;
  }
`;

export const CardText = styled.div`
  margin-left: 1.5rem;

    @media screen and (max-width: 900px) {
   margin-left: 1rem;
  }
`;
export const CardHead = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 2em;
  margin: 15px 0;
  color: #171717;
`;
export const CardHeadTxt = styled.p`
  font-family: "Roboto", sans-serif;
  color: #393939;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.5rem;
  @media screen and (max-width: 900px) {
    font-size: 15px;
    font-weight: 400;
  }
`;
export const ServiceSection = styled.div`
  background-color: #fff;
  display: grid;
  place-items: center;
`;
export const ServiceBorderDiv = styled.div`
  background-color: #fff;
  padding: 5rem 0 0 0;
`;
export const ServiceBorder = styled.div`
  border: 1.5px solid;
  margin: 0 3rem;
  background-color: green;

  @media screen and (max-width: 900px) {
    margin: 0 1rem;
  }
`;
export const WorkProcessCards = styled.div`
  display: flex;
  margin: 3rem 0;
  @media screen and (max-width: 900px) {
    display: grid;
    margin: 0 0 2rem 0;
  }
`;
export const WorkProcessCard = styled.div`
  margin: 0 2rem;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;
