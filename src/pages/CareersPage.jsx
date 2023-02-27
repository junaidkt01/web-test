import React from "react";
import Careers from "../components/Careers/Careers";
import Footer from "../components/CommenComponents/Footer/Footer";
import MenuBar from "../components/CommenComponents/Menubar/MenuBar";
import Navbar from "../components/CommenComponents/Navbar/Navbar";

const CareersPage = () => {
  return (
    <div className="imgHome">
      <Navbar />
      <Careers />
      <Footer />
      <MenuBar />
    </div>
  );
};

export default CareersPage;
