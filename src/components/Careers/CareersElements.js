import styled from "styled-components";

export const CareerSection = styled.div`
  background-color: #fff;
  display: grid;
  place-items: center;
  padding: 5rem 0;
`;
export const CareerCards = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    display: grid;
  }
`;
export const CareerCard = styled.div`
  border: 4px solid orange;
  width: 257px;
  margin: 1rem;
  padding: 4rem 3rem;
  text-align: center;
  
  @media screen and (max-width: 900px) {
    width: auto;
    padding: 4rem 2rem;
  }
`;
export const CaDate = styled.p``;
export const CaDomain = styled.p`
  font-weight: 600;
`;
export const CaExperience = styled.p`
  font-weight: 600;
  color: #393939;
`;
export const CaTextDiv = styled.div`
  color: #393939;
  font-family: "Roboto", sans-serif;
  line-height: 1.8rem;
  letter-spacing: 0.5px;
`;
export const CaText = styled.p``;
export const EmailDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmailText = styled.p``;

export const CareerBtn = styled.button`
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  color: #171717;
  font-size: 16px;
  font-weight: 700;
  padding: 25px 80px;
  position: relative;
  outline: none;
  border: 4px solid #f7931e;

  margin: 3rem;
  cursor: pointer;

  transition: all 0.2s ease-out;
  background: linear-gradient(to top, #00000000 50%, #f7931e 50%);
  background-size: 100% 200%;
  background-position: bottom;

  &:hover {
    background-position: top;
  }

  @media screen and (max-width: 900px) {
    padding: 20px 30px;
  }
`;
