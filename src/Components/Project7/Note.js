import React from "react";

export default function Note(props) {
  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <textarea>{props.content}</textarea>
        {/* <p>{props.content}</p> */}
        <button
          className="deleteicon"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
