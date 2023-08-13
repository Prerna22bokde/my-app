import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <div className="main">
        <h1>404 Error Page</h1>
        <p>Sorry,This page doen't exist</p>
        <NavLink to="/"> Go Back </NavLink>
      </div>
    </div>
  );
}
