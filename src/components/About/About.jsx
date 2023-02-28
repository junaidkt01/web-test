import Aos from "aos";
import React, { useEffect } from "react";
import { aboutUs } from "../../datas";

import index_one_about from "../../assets/img/index_one_about.webp";
// import love_gif from "../../assets/img/love.gif";
import love_gif from "../../assets/img/love.webp";
import testimonial_img from "../../assets/img/testimonial-img.webp";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  AboutContent,
  AboutImg,
  AboutMain,
  AboutSection,
  Business,
  BusinessBox,
  BusinessHead,
  BusinessImg,
  BusinessLine,
  BusinessText,
  Head,
  MainContent,
  MainContext,
  NewCard,
  NewCards,
  NewDiv,
  NewHead,
  NewIcon,
  NewText,
  RiderRoboLine,
  Robo,
  RoboRider,
  RoboSection,
  RoboText,
  Text,
  XIcon,
} from "../Home/HomeElements";
import {
  AboutHead,
  AboutLink,
  AboutUs,
  Div,
  HomeLink,
  Skill,
  SkillBar,
  SkillFill,
  SkillName,
  SkillNames,
  SkillRange,
  Skills,
  SkillsDiv,
  SkillsHead,
  SkillsSection,
  SkillsText,
} from "./AboutElements";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const handleToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <AboutUs>
        <Div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-times"></i>
            <AboutHead data-aos="zoom-in">ABOUT US</AboutHead>
            <i className="fas fa-times"></i>
          </div>
          <AboutLink>
            <HomeLink onClick={handleToTop} to="/">
              Home
            </HomeLink>{" "}
            / About Us
          </AboutLink>
        </Div>
      </AboutUs>
      {/* ////////// */}
      <AboutSection>
        <AboutContent></AboutContent>

        <AboutMain>
          <AboutImg src={index_one_about} alt="..." />
          <MainContent>
            <AliceCarousel activeIndex={3} disableButtonsControls={true}>
              {aboutUs.map((items, index) => {
                return (
                  <MainContext key={index}>
                    <Head>{items.title}</Head>
                    <Text>{items.description}</Text>
                  </MainContext>
                );
              })}
            </AliceCarousel>
          </MainContent>
        </AboutMain>

        <RoboSection data-aos="zoom-in">
          <RoboText>IDEA + DESIGN + DEVELOPMENT + SUPPORT=</RoboText>
          <Robo src={love_gif} />
        </RoboSection>

        <NewDiv>
          <NewCards data-aos="zoom-in">
            <NewCard>
              <NewIcon>
              <i className="nw cr-diamnd"></i>
              </NewIcon>
              <NewHead>CREATIVE DESIGN</NewHead>
              <NewText>Creative and unique designs assured</NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
              <i className="nw cr-magnifier"></i>
              </NewIcon>
              <NewHead>WELL ORGANIZED</NewHead>
              <NewText>Well organized and easy to update in future</NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
              <i className="nw cr-gear"></i>
              </NewIcon>
              <NewHead>EASY TO CUSTOMIZE</NewHead>
              <NewText>
                Product customization according to client requirement
              </NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
              <i className="nw cr-star"></i>
              </NewIcon>
              <NewHead>SUPPORT 24/7</NewHead>
              <NewText>24/7 Support for every Wisbato Client</NewText>
            </NewCard>
          </NewCards>
        </NewDiv>

        <SkillsSection style={{ display: "grid", placeItems: "center" }}>
          <SkillsHead data-aos="zoom-in">OUR SKILLS</SkillsHead>
          <SkillsText data-aos="zoom-in">
            At Wisbato, every bright idea matters and we always go that extra
            mile to make those brilliant ideas a reality. Our team’s dedication
            towards the goal in sight makes them unique and dynamic.
          </SkillsText>
          <SkillsDiv data-aos="zoom-in">
            <Skills>
              <Skill>
                <SkillNames>
                  <SkillName>GRAPHIC DESIGN</SkillName>
                  <SkillRange class="skill-percent">97%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "97%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
              <Skill>
                <SkillNames>
                  <SkillName>WEB DEVELOPMENT</SkillName>
                  <SkillRange class="skill-percent">92%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "92%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
              <Skill>
                <SkillNames>
                  <SkillName>WEB APPLICATIONS</SkillName>
                  <SkillRange class="skill-percent">95%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "95%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
            </Skills>
            <Skills>
              <Skill>
                <SkillNames>
                  <SkillName>IT SUPPORT</SkillName>
                  <SkillRange class="skill-percent">98%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "98%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
              <Skill>
                <SkillNames>
                  <SkillName>DIGITAL MARKETING</SkillName>
                  <SkillRange class="skill-percent">95%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "95%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
              <Skill>
                <SkillNames>
                  <SkillName>SEO MARKETING</SkillName>
                  <SkillRange class="skill-percent">80%</SkillRange>
                </SkillNames>
                <SkillBar class="skill-bar">
                  <SkillFill
                    class="skill-bar-fill"
                    style={{ width: "80%" }}
                  ></SkillFill>
                </SkillBar>
              </Skill>
            </Skills>
          </SkillsDiv>
        </SkillsSection>

        <Business>
          <BusinessImg src={testimonial_img} />
          <BusinessLine>
            <RoboRider />
            <RiderRoboLine />
            <BusinessBox>
              <BusinessHead>JAMES JO</BusinessHead>
              <BusinessText>
                Wisbato offered me the perfect website solution for my
                publishing agency. I did not want my website to be too flashy
                but it needed to have a perfect blend of old school and
                modernity. The web development team at Wisbato knew what I
                needed and offered me the website of my dreams. Thank you
                Wisbato!
              </BusinessText>
            </BusinessBox>
          </BusinessLine>
        </Business>
      </AboutSection>
    </>
  );
};

export default About;
