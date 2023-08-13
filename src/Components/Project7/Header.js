import React from "react";
import logo from "./Images/logo.png";
import "./My.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <nav className="navbar ">
          <div className="container-fluid ">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logo" width="50" />
              <h3 className="d-inline-block align-text-top text-light">
                My Notes
              </h3>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
