import React from "react";
import { careers } from "../../datas";
import {
  AboutHead,
  AboutLink,
  AboutUs,
  Div,
  HomeLink,
} from "../About/AboutElements";
import {
  CaDate,
  CaDomain,
  CaExperience,
  CareerBtn,
  CareerCard,
  CareerCards,
  CareerSection,
  CaText,
  CaTextDiv,
  EmailDiv,
  EmailText,
} from "./CareersElements";

const Careers = () => {
  return (
    <>
      <AboutUs>
        <Div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-times"></i>
            <AboutHead data-aos="zoom-in">CAREERS</AboutHead>
            <i className="fas fa-times"></i>
          </div>
          <AboutLink>
            <HomeLink to="/" >Home</HomeLink> / Careers
          </AboutLink>
        </Div>
      </AboutUs>
      <CareerSection>
        <CareerCards>
          {careers?.map((items) => {
            return (
              <CareerCard>
                <CaDate>{items.date}</CaDate>
                <CaDomain>{items.domain}</CaDomain>
                <CaExperience>({items.experience})</CaExperience>
                <CaTextDiv>
                  <CaText>{items.abouts.about1}</CaText>
                  <CaText>{items.abouts.about2}</CaText>
                  <CaText>{items.abouts?.about3}</CaText>
                </CaTextDiv>
                <EmailDiv>
                  <i
                    style={{ marginRight: "0.5rem" }}
                    className="fas fa-envelope"
                  ></i>
                  <EmailText>{items.email}</EmailText>
                </EmailDiv>
              </CareerCard>
            );
          })}
        </CareerCards>
        <CareerBtn>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto:careers@wisbato.com"
          >
            Send you resume
          </a>
        </CareerBtn>
      </CareerSection>
    </>
  );
};

export default Careers;
