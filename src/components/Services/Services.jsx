import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AboutHead,
  AboutLink,
  AboutUs,
  HomeLink,
  Div,
  SkillsHead,
  SkillsText,
} from "../About/AboutElements";

import {
  CardHead,
  CardHeadTxt,
  CardText,
  ContactButton,
  ServiceBorder,
  ServiceBorderDiv,
  ServiceCard,
  ServiceCards,
  ServiceCardsDiv,
  ServiceSection,
  ServicesTxtSection,
  WorkProcessCard,
  WorkProcessCards,
} from "./ServicesElements";

const Services = () => {
  const navigate = useNavigate();
  const handleToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <AboutUs>
        <Div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-times"></i>
            <AboutHead data-aos="zoom-in">OUR SERVICES</AboutHead>
            <i className="fas fa-times"></i>
          </div>
          <AboutLink>
            <HomeLink onClick={handleToTop} to="/">
              Home
            </HomeLink>{" "}
            / Our Services
          </AboutLink>
        </Div>
      </AboutUs>
      <ServiceSection>
        <ServicesTxtSection>
          <SkillsHead data-aos="zoom-in">
            PROVIDING THE BEST SERVICES
          </SkillsHead>
          <SkillsText data-aos="zoom-in">
            At Wisbato, we are always dedicated to providing our clients with
            the highest terms of product quality, absolute client satisfaction
            and most importantly, timely delivery of clients’ requirements
          </SkillsText>
        </ServicesTxtSection>
        <ServiceCardsDiv>
          <ServiceCards>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-diamond"></i>
              <CardText>
                <CardHead>GRAPHIC DESIGN</CardHead>
                <CardHeadTxt>
                  As a leading graphics design company, our team has some of the
                  most experienced and creative designers who make it a mission
                  of coming up with out-of-the-box solutions for your needs.
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-star"></i>
              <CardText>
                <CardHead>MOBILE & APP DESIGN</CardHead>
                <CardHeadTxt>
                  Our team of highly sought after Mobile Application Developers
                  come up with out-of-the-box ideas, providing simple but
                  effective solutions for your mobile application needs.
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-light"></i>
              <CardText>
                <CardHead>WEB DEVELOPMENT</CardHead>
                <CardHeadTxt>
                  We know the importance of an informative and interactive
                  website. That’s why our team works closely with the world's
                  best web hosting servers to provide you the website experience
                  you need
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
          </ServiceCards>
          <ServiceCards>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-anchor"></i>
              <CardText>
                <CardHead>BRANDING</CardHead>
                <CardHeadTxt>
                  As one of the leading branding agencies we have plenty of
                  creative thoughts which will represent your brand’s identity
                  with a comprehensive set of guidelines.
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-flower"></i>
              <CardText>
                <CardHead>IT SUPPORT</CardHead>
                <CardHeadTxt>
                  Our team provides the best possible solution for your IT
                  needs, giving you the support you need to ensure the smooth
                  functioning of your company.
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
            <ServiceCard data-aos="zoom-in">
              <i className="service-icon cr-target"></i>
              <CardText>
                <CardHead>SEO & MARKETING</CardHead>
                <CardHeadTxt>
                  Our team of SEO and Digital Marketing wizards ensure that all
                  your SEO and digital marketing requirements are met smoothly
                  and without any obstacles in your path.
                </CardHeadTxt>
              </CardText>
            </ServiceCard>
          </ServiceCards>
        </ServiceCardsDiv>
      </ServiceSection>
      <ServiceBorderDiv>
        <ServiceBorder />
      </ServiceBorderDiv>
      <ServiceSection>
        <ServicesTxtSection style={{ display: "grid", placeItems: "center" }}>
          <SkillsHead data-aos="zoom-in">OUR WORK PROCESS</SkillsHead>
          <SkillsText data-aos="zoom-in">
            Every team has their modus operandi that make them quite unique. At
            Wisbato, we have a simple four step process that works well for us.
          </SkillsText>
        </ServicesTxtSection>
        <ServiceCardsDiv>
          <WorkProcessCards data-aos="zoom-in">
            <WorkProcessCard>
              <CardHead>01. DISCUSSION</CardHead>
              <CardHeadTxt>
                Every project and every new idea is tabled for discussion
                because we know how important perspective is.
              </CardHeadTxt>
            </WorkProcessCard>
            <WorkProcessCard>
              <CardHead>02. DESIGN</CardHead>
              <CardHeadTxt>
                Once the discussions have been tabled, we begin working on
                creating unique designs for your needs.
              </CardHeadTxt>
            </WorkProcessCard>
            <WorkProcessCard>
              <CardHead>03. DEVELOPMENT</CardHead>
              <CardHeadTxt>
                After the designs are ready comes the development. This is where
                the web development team showcases their skills
              </CardHeadTxt>
            </WorkProcessCard>
            <WorkProcessCard>
              <CardHead>04. RELEASE</CardHead>
              <CardHeadTxt>
                Once the project is ready, our team does a QC before unveiling
                it to our client on the promised date.
              </CardHeadTxt>
            </WorkProcessCard>
          </WorkProcessCards>
          <ContactButton
            onClick={() => {
              navigate("/contactus");
              handleToTop();
            }}
          >
            {" "}
            CONTACT US{" "}
          </ContactButton>
        </ServiceCardsDiv>
      </ServiceSection>
    </>
  );
};

export default Services;
