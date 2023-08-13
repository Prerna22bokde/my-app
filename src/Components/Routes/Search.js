import React, { useState } from "react";
import Searchresult from "./Searchresult";

export default function Search() {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Anything"
        onChange={inputEvent}
        value={img}
      ></input>
      {img === " " ? null : <Searchresult name={img} />}
      {/* <Searchresult name={img} /> */}
    </div>
  );
}
