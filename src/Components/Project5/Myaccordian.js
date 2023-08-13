import React, { useState } from "react";
import "./Accordian.css";

export default function Myaccordian({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="main-heading">
        <p
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <i class="fa fa-minus" aria-hidden="true"></i>
          ) : (
            // "-"
            <i class="fa fa-plus" aria-hidden="true"></i>
            // "+"
          )}
        </p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </div>
  );
}
