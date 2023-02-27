import React from "react";
import Footer from "../components/CommenComponents/Footer/Footer";
import MenuBar from "../components/CommenComponents/Menubar/MenuBar";
import Navbar from "../components/CommenComponents/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <div className="imgHome">
      <Navbar />
      <ContactUs />
      <Footer />
      <MenuBar />
    </div>
  );
};

export default ContactUsPage;
