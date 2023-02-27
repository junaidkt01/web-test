import React from "react";
import About from "../components/About/About";
import Footer from "../components/CommenComponents/Footer/Footer";
import MenuBar from "../components/CommenComponents/Menubar/MenuBar";
import Navbar from "../components/CommenComponents/Navbar/Navbar";

const AboutPage = () => {
  return (

      <div className="imgHome">
        <Navbar />
        <About />
        <Footer />
        <MenuBar />
      </div>

  );
};

export default AboutPage;
