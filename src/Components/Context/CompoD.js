import React from "react";
import { FirstName, LastName } from "./CompoA";

// this is context api large method

export default function CompoD() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    my name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}
