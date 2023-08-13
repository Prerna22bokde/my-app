import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* below route is redirect  */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
