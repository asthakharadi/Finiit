import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import Contact from "./pages/Contactpage/Contact";
import DomesticMarketExpertise from "./pages/DomesticMarketExpertise/DomesticMarketExpertise";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/domestic-market-expertise"
            element={<DomesticMarketExpertise />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;