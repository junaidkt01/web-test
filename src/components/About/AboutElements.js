import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutUs = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  color: #fff;
`;
export const Div = styled.div`
  margin: 9rem 0;
`;
export const AboutHead = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: 1000;
  margin: 1rem;

  @media screen and (max-width: 900px) {
    font-size: 25px;
    font-weight: 1000;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;

  cursor: pointer;
  color: #fff;
  &:hover {
    color: #f7931e;
  }
`;
export const AboutLink = styled.div`
  font-size: 17px;
`;
export const SkillsSection = styled.div`
  margin: 4rem 0rem 9rem 0rem;

  @media screen and (max-width: 900px) {
    margin: 0.5rem;
  }
  `;
  export const SkillsHead = styled.p`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;
export const SkillsText = styled.p`
  text-align: center;
  width: 800px;
  margin-bottom: 4rem;
  font-size: 20px;
  line-height: 2rem;

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 16px;
  }
`;
export const SkillsDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: grid;
    place-items: center;
    width: 100%;
  }
`;
export const Skills = styled.div`
  width: 550px;
  margin-right: 1rem;
  @media screen and (max-width: 900px) {
    width: 310px;
  }
  `;
  export const SkillNames = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 15px;
  `;
  export const Skill = styled.div`
  margin-bottom: 30px;
`;
export const SkillBar = styled.div`
  height: 7px;
  background: #ddd;
  width: 100%;
`;
export const SkillFill = styled.div`
  height: 100%;
  background: #f7931e;
`;
export const SkillName = styled.p`
  margin: 0;
  margin-right: 0.5rem;
`;
export const SkillRange = styled.p`
  margin: 0;
  text-align: right;
  margin-top: 5px;
`;
