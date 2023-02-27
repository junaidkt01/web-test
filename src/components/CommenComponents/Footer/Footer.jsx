import React, { useEffect } from "react";
import {
  AddressDiv,
  AddressIcons,
  AddressText,
  CopyRight,
  FooterAddress,
  FooterPage,
  SocialIcons,
  SocialMedia,
  Wisbato,
} from "./FooterElements";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <FooterPage>
      <FooterAddress>
        <AddressDiv>
          <AddressIcons>
            {/* <i className="fas fa-light fa-location-dot"></i> */}
            <i className="service-icon cr-location"></i>
          </AddressIcons>
          <AddressText>
            No. 2817/2 & D16/2, VV Mohalla Mysuru, Mysore, Karnataka
          </AddressText>
        </AddressDiv>
        <AddressDiv>
          <AddressIcons>
            <i className="service-icon cr-phone"></i>
          </AddressIcons>
          <AddressText>(+91) 9562854321</AddressText>
        </AddressDiv>
        <AddressDiv>
          <AddressIcons>
            <i className="service-icon cr-pencil"></i>
          </AddressIcons>
          <AddressText>hello@wisbato.com</AddressText>
        </AddressDiv>
      </FooterAddress>

      <SocialMedia>
        <SocialIcons>
          <i className="fa fa-facebook fa-fw"></i>
        </SocialIcons>
        <SocialIcons>
          <i className="fa fa-twitter fa-fw"></i>
        </SocialIcons>
        <SocialIcons>
          <i className="fa fa-linkedin fa-fw"></i>
        </SocialIcons>
        <SocialIcons>
          <i className="fa fa-pinterest fa-fw"></i>
        </SocialIcons>
      </SocialMedia>
      <CopyRight>
        Copyright © 2022. Design by
        <Wisbato href="#">WISBATO</Wisbato>
      </CopyRight>
    </FooterPage>
  );
};

export default Footer;
