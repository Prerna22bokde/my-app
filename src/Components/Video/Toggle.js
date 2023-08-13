import React,{useState}from 'react';

export default function Toggle() {
    let [status,setStatus]=useState(true)
  return (
    <div>
        {
        status?
      <h1>Hide show and Toggle</h1>:null
        }
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>show</button> */}
      <button onClick={()=>setStatus(!status)} >Toggle</button>
    </div>
  );
}
