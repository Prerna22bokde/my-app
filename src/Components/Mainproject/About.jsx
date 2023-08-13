import React from "react";
import web from "../Mainproject/images/About.png.png";
import "./Main.css";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

export default function About() {
  return (
    <>
      <Comman
        name="Welcome to About page"
        imgsrc={web}
        visite="/contact"
        btnname="Contact Now"
      />
    </>
  );
}
