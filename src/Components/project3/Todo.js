import React, { useState } from "react";
import "./Todo.css";
import Todolist from "./Todolist";

export default function Todo() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  function itemEvent(val) {
    setInputList(val.target.value);
    console.log(val.target.value);
  }

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    // setInputList("");
  };

  const deleteItems = (id) => {
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, Index) => {
        return Index !== id;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a items"
          onChange={itemEvent}
          //   value={inputList}
        />
        <button onClick={listofItems}> +</button>

        <ol type="none">
          {/* <li>{inputList}</li> */}
          {Items.map((itemval, Index) => {
            return (
              <Todolist
                key={Index}
                id={Index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
