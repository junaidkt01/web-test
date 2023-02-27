import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
