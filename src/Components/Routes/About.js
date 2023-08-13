import React from "react";
import { NavLink } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <h1>this is {props.name} page</h1>
      <NavLink exact activeClassName="active" to="/user/anil">
        Anil
      </NavLink>

      <NavLink exact activeClassName="active" to="/user/peter">
        peter
      </NavLink>
    </>
  );
}
