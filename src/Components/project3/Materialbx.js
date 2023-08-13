import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Todo.css";
import MaterialList from "./MaterialList";

export default function Materialbx() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  function itemEvent(val) {
    setInputList(val.target.value);
  }

  function listofItems() {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  }

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>TODO LIST</h1>
        <br />
        <input
          type="text"
          value={inputList}
          placeholder="Add a items"
          onChange={itemEvent}
        />
        <Button className="newBtn" onClick={listofItems}>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </Button>
        <br />
        <ol>
          {Items.map((itemval, Index) => {
            return <MaterialList key={Index} text={itemval} />;
          })}
        </ol>
      </div>
    </div>
  );
}
