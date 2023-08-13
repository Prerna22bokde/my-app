import React, { useState } from 'react';
import './Video.css';

//this is digital clock

export default function Project4() {
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);

    function Update(){
         time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Update,1000)
  return (
    <div className="diva">
        <h1>Current Time </h1>
      <h1>{ctime}</h1>
      {/* <button onClick={Update}>get time</button> */}
    </div>
  );
}
