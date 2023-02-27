import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { sliderData } from "../../datas";

import index_one_about from "../../assets/img/index_one_about.png";
import love_gif from "../../assets/img/love.gif";
import testimonial_img from "../../assets/img/testimonial-img.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  AboutContent,
  AboutHeader,
  AboutImg,
  AboutMain,
  AboutSection,
  AboutText,
  ArrowIcon,
  BannerDiv,
  Business,
  BusinessBox,
  BusinessHead,
  BusinessImg,
  BusinessLine,
  BusinessText,
  ButtonReadMore,
  Buttons,
  Div,
  Head,
  HomeButton,
  HomeItem,
  HomeItemsLink,
  HomeMenu,
  ImgAndButton,
  MainContent,
  MainText,
  NewCard,
  NewCards,
  NewDiv,
  NewHead,
  NewIcon,
  NewText,
  PlayButton,
  QuoteHead,
  QuoteText,
  RiderRoboLine,
  Robo,
  RoboLine,
  RoboRider,
  RoboSection,
  RoboText,
  SuperRobo,
  Text,
  TextContent,
  WorkButton,
  WorkImg,
  WorkQuote,
  Works,
  WorksCard,
  WorkSection,
  WorksHead,
  WorksText,
  XIcon,
} from "./HomeElements";
import Aos from "aos";
import "aos/dist/aos.css";
import ChatDiv from "../ChatDiv/ChatDiv";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const navigate = useNavigate();
  const handleToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <Div>
        <MainText>
          <TypeAnimation
            sequence={[
              "WE ENJOY WHAT WE DO",
              2000,
              "INNOVATION DEFINS US",
              2000,
              "ALWAYS DELIGHTED TO UPGRADE YOUR BUSINESS!",
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </MainText>

        {/* BANNER SECTION START ------------ */}

        <BannerDiv>
          <TextContent>
            Welcome to Wisbato! Here, you’re always greeted with friendly
            smiles. Our unique perspectives and thirst for innovation makes us
            who we are!
          </TextContent>
          <Buttons data-aos="zoom-in">
            <HomeButton
              onClick={() => {
                navigate("//services");
                handleToTop();
              }}
            >
              SERVICES
            </HomeButton>
            <HomeButton
              onClick={() => {
                navigate("/contactus");
                handleToTop();
              }}
            >
              CONTACT US
            </HomeButton>
          </Buttons>
        </BannerDiv>
      </Div>

      <HomeMenu data-aos="zoom-in">
        <HomeItem>
          <HomeItemsLink to="/">ALL</HomeItemsLink>
        </HomeItem>
        <HomeItem>
          <HomeItemsLink to="/">WEB DESIGN</HomeItemsLink>
        </HomeItem>
        <HomeItem>
          <HomeItemsLink to="/">DEVELOPMENT</HomeItemsLink>
        </HomeItem>
        <HomeItem>
          <HomeItemsLink to="/">GRAPHIC DESIGN</HomeItemsLink>
        </HomeItem>
        <HomeItem>
          <HomeItemsLink to="/">BRANDING</HomeItemsLink>
        </HomeItem>
        <HomeItem>
          <HomeItemsLink to="/">IT SUPPORT</HomeItemsLink>
        </HomeItem>
      </HomeMenu>

      {/* BANNER SECTION END ------------ */}

      {/* ABOUT SECTION START ------------ */}

      <AboutSection>
        <AboutContent>
          <AboutHeader data-aos="zoom-in">About Us</AboutHeader>
          <AboutText data-aos="zoom-in">
            Wisbato is the brainchild of Bizcarta, one of the most pioneered
            organizations in the world.Wisbato believes in bringing real
            business value to you through our vision for a digital world
            peppered with innovative technology and a team of experts to answer
            your call.
          </AboutText>
        </AboutContent>

        <AboutMain>
          <AboutImg src={index_one_about} alt="..." />
          <MainContent>
            <Head>WHO WE ARE</Head>
            <Text>
              At Wisbato, we believe that innovation is the key to creativity.
              That’s why we create products and services which provide total
              communication and an informed solution for your needs. We provide
              services such as Web Design and Development, applications that are
              tailored for your personal needs, ERPs, CRMs, excellent e-commerce
              solutions, B2B and B2C applications are some of the few services
              we provide our esteemed clientele. Our testimony is the
              satisfaction and rave reviews of our clients who are pleased with
              the solutions we offer them.
            </Text>
            <ButtonReadMore
              onClick={() => {
                navigate("/about");
                handleToTop();
              }}
            >
              READ MORE
            </ButtonReadMore>
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
                <i class="fas fa-Thin fa-gem"></i>
              </NewIcon>
              <NewHead>CREATIVE DESIGN</NewHead>
              <NewText>Creative and unique designs assured</NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
                <i class="fas fa-Thin fa-magnifying-glass"></i>
              </NewIcon>
              <NewHead>WELL ORGANIZED</NewHead>
              <NewText>Well organized and easy to update in future</NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
                <i class="fas fa-Thin fa-gear"></i>
              </NewIcon>
              <NewHead>EASY TO CUSTOMIZE</NewHead>
              <NewText>
                Product customization according to client requirement
              </NewText>
            </NewCard>
            <XIcon>X</XIcon>
            <NewCard>
              <NewIcon>
                <i class="fas fa-Thin fa-star"></i>
              </NewIcon>
              <NewHead>SUPPORT 24/7</NewHead>
              <NewText>24/7 Support for every Wisbato Client</NewText>
            </NewCard>
          </NewCards>
        </NewDiv>

        <AboutContent>
          <AboutHeader data-aos="zoom-in">WHAT WE DO</AboutHeader>
          <AboutText data-aos="zoom-in">
            At Wisbato, we can assure our clients the highest terms of product
            quality, absolute client satisfaction and most importantly, timely
            delivery of clients’ requirements
          </AboutText>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <SuperRobo />
          </div>
          <RoboLine />
        </AboutContent>

        <WorkSection>
          <AliceCarousel
            disableDotsControls={true}
            renderNextButton={() => (
              <ArrowIcon className="inr inr-arrow-right" />
            )}
            renderPrevButton={() => (
              <ArrowIcon className="inr inr-arrow-left" />
            )}
            mouseTracking
            responsive={{ 0: { items: 1 } }}
            controlsStrategy="alternate"
          >
            {sliderData.map((slide, index) => {
              return (
                <WorksCard key={index}>
                  <>
                    <ImgAndButton>
                      <WorkImg src={slide.image} alt="..." />
                    </ImgAndButton>
                    <Works>
                      <WorksHead>{slide.title}</WorksHead>
                      <WorksText>{slide?.descriptionOne}</WorksText>
                      <WorksText>{slide?.descriptionTwo}</WorksText>
                      <WorkButton
                        onClick={() => {
                          navigate("/contactus");
                          handleToTop();
                        }}
                      >
                        CONTACT US
                      </WorkButton>
                    </Works>
                  </>
                </WorksCard>
              );
            })}
          </AliceCarousel>
        </WorkSection>
        <WorkQuote>
          <QuoteHead>WE LOVE OUR WORK</QuoteHead>
          <QuoteText>
            We are a team of creative mind that specialize in web design, web
            development, app development, and branding to name a few. Our
            expertise in technology will change your business!
          </QuoteText>
          <PlayButton>
            <i class="fas fa-Thin fa-play"></i>
          </PlayButton>
        </WorkQuote>

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
      {/* ABOUT SECTION END ------------ */}
      <ChatDiv />
    </>
  );
};

export default Home;
