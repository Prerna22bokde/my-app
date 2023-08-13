import React, { useContext } from "react";
// import CompoC from "./CompoC";
import { FirstName, LastName } from "./CompoA";

// this is usecontext easy method

export default function CompoB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <div>
      <h1>
        my name is {fname} {lname}
      </h1>
    </div>
  );
}
