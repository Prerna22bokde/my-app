import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Index2 from "./Index2";
import Navbar from "./Navbar";
import Service from "./Service";
import "./Style.css";
import User from "./User";
import Search from "./Search";

// in this component we used useparam and useNevigate hook

export default function Index() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About name="About" />} />
          <Route exact path="/service" element={<Service name="service" />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/user/:fname/:lname" element={<User />} /> */}
          <Route exact path="/user/:name" element={<User />} />
          <Route exact path="/search" element={<Search />} />
          {/* <Route exact path="/user" element={<User />} /> */}
          <Route path="*" element={<Index2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
