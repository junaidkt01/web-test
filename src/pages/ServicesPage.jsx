import React from "react";
import Footer from "../components/CommenComponents/Footer/Footer";
import MenuBar from "../components/CommenComponents/Menubar/MenuBar";
import Navbar from "../components/CommenComponents/Navbar/Navbar";
import Services from "../components/Services/Services";

const ServicesPage = () => {
  return (
    <div className="imgHome">
      <Navbar />
      <Services />
      <Footer />
      <MenuBar />
    </div>
  );
};

export default ServicesPage;
