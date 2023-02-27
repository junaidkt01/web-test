import styled from "styled-components";

export const ContactUsSection = styled.div`
  background-color: #fff;
  display: grid;
  place-items: center;
  padding-bottom: 5rem;
`;
export const FooterPage = styled.div`
  width: 100%;
  padding: 10rem 0 5rem 0;
`;
export const FooterAddress = styled.div`
  color: #f7931e;
  display: flex;
  justify-content: space-around;
  border-top: 3px solid #211f1f;
  border-bottom: 3px solid #211f1f;
  margin: 0 4rem;
  
  @media screen and (max-width: 700px) {
    display: block;
    justify-content: center;
    margin: 0 2rem;
  }
`;
export const ContactForm = styled.div`
  display: grid;
  place-items: center;
`;
export const ContactFormHead = styled.p`
  font-size: 36px;
  font-weight: 900;
  font-family: "Archivo Black", sans-serif;
`;
export const InputForm = styled.div`
  display: grid;
`;
export const InputArea = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  display: block;
  width: 650px;
  padding: 13px 15px;
  font-size: 17px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const TextInputArea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  display: block;
  width: 650px;
  padding: 13px 15px;
  font-size: 17px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const FormSubmitBtn = styled.button`
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  color: #171717;
  font-size: 16px;
  font-weight: 700;
  padding: 25px 65px;
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

  @media screen and (max-width: 700px) {
    padding: 20px 65px;
  }
`;
