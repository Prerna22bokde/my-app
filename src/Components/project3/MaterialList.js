import React, { useState } from "react";

export default function MaterialList(props) {
  const [line, setLine] = useState(false);
  function cutIt() {
    setLine(true);
  }
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </span>

      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
