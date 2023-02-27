import React, { useState } from "react";

import person_5 from "../../assets/img/person_5.jpg";
import person_6 from "../../assets/img/person_6.jpg";
import support_gif from "../../assets/img/support.gif";

import {
  Chat,
  ChatBox,
  ChatHeadTextDiv,
  ChatIcon,
  ChatPeopleDiv,
  ChatPersonDiv,
  ChatText,
  HeadeDiv,
  HeadText,
  HeadText2,
  LiveChat,
  PersonDetails,
  PersonDomain,
  PersonName,
  PersonOnline,
  PersonProfile,
  RemoveItem,
} from "./ChatDivElements";

const ChatDiv = () => {
  const [isChat, setIsChat] = useState(false);
  const redirectToWhatsapp = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.getAttribute("data-number");
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
  return (
    <>
      {isChat && (
        <ChatBox data-aos="zoom-in">
          <HeadeDiv>
            <RemoveItem onClick={() => setIsChat(false)}>
              <i className="fas fa-regular fa-xmark"></i>
            </RemoveItem>
            <ChatHeadTextDiv>
              <HeadText>Need Help? Chat with us</HeadText>
              <HeadText2>Click one of our representatives below</HeadText2>
            </ChatHeadTextDiv>
            <ChatPeopleDiv>
              <ChatPersonDiv
                href="#"
                target="_blank"
                onClick={redirectToWhatsapp}
                data-number="+918714703354"
              >
                <PersonProfile alt="..." src={person_5} />
                <PersonDetails>
                  <PersonName>Mia</PersonName>
                  <PersonDomain>Sales Support</PersonDomain>
                  <PersonOnline>I'm online</PersonOnline>
                </PersonDetails>
              </ChatPersonDiv>

              <ChatPersonDiv
                onClick={redirectToWhatsapp}
                data-number="+919562854321"
              >
                <PersonProfile alt="..." src={person_6} />
                <PersonDetails>
                  <PersonName>James</PersonName>
                  <PersonDomain>Customer Support</PersonDomain>
                  <PersonOnline>I'm online</PersonOnline>
                </PersonDetails>
              </ChatPersonDiv>
            </ChatPeopleDiv>
          </HeadeDiv>
        </ChatBox>
      )}

      <LiveChat onClick={() => setIsChat(!isChat)}>
        {!isChat && (
          <Chat data-aos="fade-left">
            <ChatText>Questions? Let's Chat</ChatText>
          </Chat>
        )}
        <ChatIcon src={support_gif} />
      </LiveChat>
    </>
  );
};

export default ChatDiv;
