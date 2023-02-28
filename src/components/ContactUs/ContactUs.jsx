import React, { useState } from "react";
// import { Map } from "google-maps-react";
import {
  AboutHead,
  AboutLink,
  AboutUs,
  Div,
  HomeLink,
} from "../About/AboutElements";
import {
  AddressDiv,
  AddressIcons,
  AddressText,
} from "../CommenComponents/Footer/FooterElements";
import {
  ContactForm,
  ContactFormHead,
  ContactUsSection,
  FooterAddress,
  FooterPage,
  FormSubmitBtn,
  InputArea,
  InputForm,
  TextInputArea,
} from "./ContactUsElements";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [recipient, setRecipient] = useState("");
  const [email, setEmial] = useState("");
  const [message, setMessage] = useState("");

  const handleToTop = () => window.scrollTo(0, 0);

  const sendEmail = () => {
    emailjs
      .send(
        "service_ccjrw2t",
        "template_0ltprvh",
        {
          to_email: email,
          subject: recipient,
          message: message,
        },
        "L7Q760-Vy9_cMfLUM"
      )
      .then(
        (data) => {
          console.log(data.text);
          alert("email success");
        },
        (error) => {
          console.log(error.text);
          alert("email faild");
        }
      );
  };
  return (
    <>
      <AboutUs>
        <Div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i className="fas fa-times"></i>
            <AboutHead data-aos="zoom-in">CONTACT US</AboutHead>
            <i className="fas fa-times"></i>
          </div>
          <AboutLink>
            <HomeLink onClick={handleToTop} to="/">
              Home
            </HomeLink>{" "}
            / Contact Us
          </AboutLink>
        </Div>
      </AboutUs>
      <ContactUsSection>
        <FooterPage>
          <FooterAddress>
            <AddressDiv data-aos="zoom-in">
              <AddressIcons>
                <i
                  style={{ color: "black" }}
                  className="service-icon cr-location"
                ></i>
              </AddressIcons>
              <AddressText>
                No. 2817/2 & D16/2, VV Mohalla Mysuru, Mysore, Karnataka
              </AddressText>
            </AddressDiv>
            <AddressDiv data-aos="zoom-in">
              <AddressIcons>
                <i style={{ color: "black" }} class="service-icon cr-phone"></i>
              </AddressIcons>
              <AddressText>(+91) 9562854321</AddressText>
            </AddressDiv>
            <AddressDiv data-aos="zoom-in">
              <AddressIcons>
                <i
                  style={{ color: "black" }}
                  class="service-icon cr-pencil"
                ></i>
              </AddressIcons>
              <AddressText>hello@wisbato.com</AddressText>
            </AddressDiv>
          </FooterAddress>
        </FooterPage>
        <ContactForm>
          <ContactFormHead data-aos="zoom-in"> GET IN TOUCH </ContactFormHead>
          <InputForm data-aos="zoom-in">
            <InputArea
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              type="text"
              placeholder="Your name:"
              name="user_name"
            />
            <InputArea
              value={email}
              onChange={(e) => setEmial(e.target.value)}
              type="email"
              placeholder="Your email:"
              name="user_email"
            />
            <TextInputArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Your Message:"
              name="message"
            />
          </InputForm>
          <FormSubmitBtn onClick={sendEmail} data-aos="zoom-in">
            SUBMIT
          </FormSubmitBtn>
        </ContactForm>
      </ContactUsSection>
    </>
  );
};

export default ContactUs;
