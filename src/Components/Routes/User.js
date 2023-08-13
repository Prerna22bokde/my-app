import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function User() {
  // const { fname, lname } = useParams();
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  return (
    <div>
      <h1>
        {/* user {fname} {lname} page */}
        this is {name}'s page
      </h1>
      <p>my current location is {location.pathname}</p>
      {location.pathname === `/user/anil` ? <button>click me</button> : null}
      <button onClick={() => navigate("/service")}>About</button>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </div>
  );
}
