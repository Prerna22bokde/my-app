import React from "react";
import web from "../Mainproject/images/home.png";
import "./Main.css";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

export default function Home() {
  return (
    <div>
      <Comman
        name="Grow your business with"
        imgsrc={web}
        visite="/service"
        btnname="Get Started"
      />
    </div>
  );
}
