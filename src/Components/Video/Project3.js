import React, { useState } from 'react';
import './Video.css';

//useState project
export default function Project3() {

  let newTime = new Date().toLocaleTimeString();
  const [crtime,setCrtime] = useState(newTime);

  function Updatetime(){
    newTime = new Date().toLocaleTimeString();
    setCrtime(newTime);
  }
  return (
    <div className="diva">
            <h1>{crtime}</h1>
            <button  className="setbutton" onClick={Updatetime}>Get Time</button>
        </div>
  );
}
