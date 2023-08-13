import React, { createContext } from "react";
// import CompoD from "./CompoD";
import CompoB from "./CompoB";

const FirstName = createContext();
const LastName = createContext();

function CompoA() {
  return (
    <div>
      <FirstName.Provider value={"prerna "}>
        <LastName.Provider value={" Bokde"}>
          <CompoB />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default CompoA;
export { FirstName, LastName };
