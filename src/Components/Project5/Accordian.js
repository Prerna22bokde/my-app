import React, { useState } from "react";
import questions from "./Questions";
import Myaccordian from "./Myaccordian";
import "./Accordian.css";

export default function Accordian() {
  const [data, setData] = useState(questions);
  return (
    <div>
      <section className="main-div">
        <h1>React Interview Questions </h1>
        {data.map((curElem) => {
          const { id, questions, answer } = curElem;
          return <Myaccordian key={id} {...curElem} />;
        })}
      </section>
    </div>
  );
}
