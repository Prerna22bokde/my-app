import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar ">
        <div className="container-fluid">
          <NavLink exact activeClassName="active" to="/">
            AboutUs
          </NavLink>

          <NavLink exact activeClassName="active" to="/service">
            Service
          </NavLink>

          <NavLink exact activeClassName="active" to="/search">
            Search
          </NavLink>

          <NavLink exact activeClassName="active" to="/user/anil">
            user
          </NavLink>

          <NavLink exact activeClassName="active" to="/contact">
            ContactUs
          </NavLink>
        </div>
      </div>

      {/* this is second type of actve link */}
      {/* <NavLink
        exact
        ClassName={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to="/contact"
      >
        ContactUs
      </NavLink> */}
      <br />

      {/* this is anchor tage this not used in react */}
      {/* <a href="/"> AboutUs </a>
      <a href="/contact"> ContactUs </a> */}
    </>
  );
}
