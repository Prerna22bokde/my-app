import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Createnote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const InputEvent = (val) => {
    // const value = val.target.value;
    // const name = val.target.name;

    const { name, value } = val.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  function expandIt() {
    setExpand(true);
  }

  function unexpand() {
    setExpand(false);
  }

  return (
    <div>
      <div className="main_note" onDoubleClick={unexpand}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="title"
              autoComplete="off"
            />
          ) : null}

          <textarea
            rows=""
            column=" "
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note..."
            onClick={expandIt}
            onDoubleClick={unexpand}
          ></textarea>

          {expand ? (
            <Button className="main_button" onClick={addEvent}>
              {/* <i className="fa fa-plus" aria-hidden="true"></i> */}+
            </Button>
          ) : null}
        </form>
      </div>
    </div>
  );
}
