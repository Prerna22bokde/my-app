import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Project8/Language.css";

// pokemon api show

export default function ComA() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert("hii");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      const hero = res.data.moves;
      hero.map((val, index) => {
        return console.log(val.move.name);
      });
    }
    getData();
  });

  return (
    <>
      <h1>
        you select <span style={{ color: "red" }}>{num}</span> value
      </h1>
      <h1>
        My name is <span style={{ color: "red" }}> {name}</span>
      </h1>
      <h1>
        I have <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.currentTarget.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div id="google_translate_element"></div>
      {/* <div id="google_element"></div> */}

      {/* <script src="main.js"></scrip> */}
    </>
  );
}
