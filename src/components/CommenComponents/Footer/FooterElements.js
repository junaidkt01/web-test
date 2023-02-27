import styled from "styled-components";

export const FooterPage = styled.div`
  background-color: #211f1f;
  display: grid;
  place-items: center;
`;

export const FooterAddress = styled.div`
  width: 90%;
  color: #f7931e;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #fff;
  /* margin: 0 4rem 0 4rem; */
  @media screen and (max-width: 700px) {
    display: block;
    justify-content: center;
    /* margin: 0 2rem 0 2rem; */
  }
`;

export const AddressDiv = styled.div`
  max-width: 250px;
  padding: 4rem 0 4rem 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    padding: 2rem 0 2rem 2rem;
  }
`;

export const AddressIcons = styled.div`
  color: #fff;
  font-size: 40px;
  margin-right: 1rem;
`;

export const AddressText = styled.p``;

export const SocialMedia = styled.div`
  font-size: 20px;
  padding: 4rem 0 4rem 0;
  color: #f7931e;
  display: flex;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  margin: 1rem;
  margin-bottom: -2rem;
`;

export const CopyRight = styled.div`
  justify-content: center;
  color: #fff;
  margin-bottom: 4rem;

  @media screen and (max-width: 700px) {
    padding-bottom: 5rem;
  }
`;

export const Wisbato = styled.a`
  color: #f7931e;
`;
