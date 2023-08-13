import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Service(props) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>i am {props.name} page</h1>
      <NavLink exact activeClassName="active" to="/user/anil">
        Anil
      </NavLink>

      <NavLink exact activeClassName="active" to="/user/peter">
        peter
      </NavLink>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </div>
  );
}
