import styled from "styled-components";

export const LiveChat = styled.div`
  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  bottom: 2.6rem;
  right: 2.6rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Chat = styled.div`
  transition: all 0.2s ease-out;
  display: grid;
  place-items: center;
  text-align: center;
`;
export const ChatText = styled.p`
  background-color: #0d0d0d4d;
  padding: 5px;
  font-size: 13px;
`;
export const ChatIcon = styled.img`
  margin-left: 1rem;
  width: 42px;
  height: 42px;
  padding: 5px;
`;

// Chat box

export const ChatBox = styled.div`
  transition: all 0.2s ease-out;
  width: 300px;
  height: 330px;
  background-color: #fff;
  color: #fff;
  position: fixed;
  bottom: 7rem;
  right: 2.5rem;
  border-radius: 8px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const HeadeDiv = styled.div`
  height: 100px;
  width: 100%;
  background-color: #f7931e;
  color: #fff;
  border-radius: 8px 8px 0 0;

  display: grid;
  place-items: center;
  text-align: center;
`;

export const ChatHeadTextDiv = styled.div``;
export const HeadText = styled.p`
  font-weight: 600;
`;
export const HeadText2 = styled.p`
  font-size: 14px;
`;

export const ChatPeopleDiv = styled.div`
  width: 300px;
  margin-top: 2rem;
  display: grid;
  place-content: center;
`;
export const ChatPersonDiv = styled.a`
  background: #f5f7f9;
  width: 230px;
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
`;
export const PersonProfile = styled.img`
  border: 2px solid #26c281;
  border-radius: 50%;
  display: block;
  width: 60px;
  height: 60px;
  background-color: #fff;
`;
export const PersonDetails = styled.div`
  font-size: 16px;
  margin-left: 1.5rem;
  display: grid;
  place-items: start;
`;
export const PersonName = styled.p`
  font-size: 14px;
  color: #383838;
  font-weight: bold;
  margin: 0;
`;
export const PersonDomain = styled.p`
  font-size: 11px;
  line-height: 18px;
  color: #8c8c8c;
  margin: 0;
`;
export const PersonOnline = styled.p`
  font-size: 10px;
  vertical-align: middle;
  color: #fff;
  background: #26c281;
  border-radius: 5px;
  display: inline-block;
  padding: 1px 5px;
  margin: 0;
`;

// remove button
export const RemoveItem = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  color: #fff;
  font-weight: 900;
  font-family: "Archivo Black", sans-serif;
  cursor: pointer;
`;
