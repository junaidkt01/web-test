import React from "react";
import "./style.css";
import Home from "../components/Home/Home";
import Navbar from "../components/CommenComponents/Navbar/Navbar";
import Footer from "../components/CommenComponents/Footer/Footer";
import MenuBar from "../components/CommenComponents/Menubar/MenuBar";

const HomePage = () => {
  return (
    <div className="imgHome">
      <Navbar />
      <Home />
      <Footer />
      <MenuBar />
    </div>
  );
};

export default HomePage;
