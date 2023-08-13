import React from "react";
import "../Projects/Netflix.css";
import "./Slot.css";

//this is matching slot project

const SlotM = (props) => {
  // let X = '😄';
  // let y = '😄';
  // let z = '🎅';

  // let X =props.X;
  // let y = props.y;
  // let z =props.z;

  let { X, y, z } = props;
  if (X === y && y === z) {
    return (
      <div className="slot_inner">
        <h1>
          {X} {y} {z}
        </h1>
        <h1>This is maching</h1>
        <hr></hr>
      </div>
    );
  } else {
    return (
      <div className="slot_inner">
        <h1>
          {X} {y} {z}
        </h1>
        <h1>This is not maching</h1>
        <hr></hr>
      </div>
    );
  }
};

export default function Slot() {
  return (
    <div>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot machine game</span> 🎰{" "}
      </h1>
      <div className="Slotmachine">
        <SlotM X="😄" y="😄" z="😄" />

        <SlotM X="😄" y="😆" z="😄" />

        <SlotM X="🍎" y="🍌" z="🍎" />

        <SlotM X="🍎" y="🍎" z="🍎" />
      </div>
    </div>
  );
}
