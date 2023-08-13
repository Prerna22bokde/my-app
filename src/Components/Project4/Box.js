import React, { useState } from "react";
import "./Box.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function Box() {
  const [data, setData] = useState(0);
  const Incre = () => {
    setData(data + 1);
  };

  const Dcre = () => {
    if (data > 0) {
      setData(data - 1);
    } else {
      alert("Sorry Zero limited");
      setData(0);
    }
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>{data}</h1>
        <div className="btn_div">
          <button onClick={Incre}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          {/* <button onClick={Dcre}>
            <i class="fa fa-minus" aria-hidden="true"></i>
          </button> */}
          <Tooltip title="minus">
            <Button variant="contained" onClick={Dcre}>
              <i class="fa fa-minus" aria-hidden="true"></i>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
