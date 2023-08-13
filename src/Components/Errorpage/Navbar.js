import React from "react";
import { NavLink } from "react-router-dom";
import "./Page.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar ">
        <div className="container-fluid">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>

          <NavLink exact activeClassName="active" to="/about">
            About
          </NavLink>

          <NavLink exact activeClassName="active" to="/contact">
            ContactUs
          </NavLink>
        </div>
      </div>
    </div>
  );
}
