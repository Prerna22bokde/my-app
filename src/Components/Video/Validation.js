import React, { useState } from 'react';

export default function Validation() {
    const [password,setPassword]=useState("")
    const [passErr,setPassErr]=useState("")
    function getSubmit(e)
    {
        if(password.length<3){
           alert("not valid detail");
        }else{
            alert("confirm")
        }
    
        e.preventDefault()
    }
    function pass(e){
        let item =e.target.value;
     if(item.length<3){
       setPassErr(true)
     }else{
        setPassErr(false)
     }
     setPassword(item)
     }

  return (
    <div>
      <h1>Login from</h1><br/><br/>
      <form onSubmit={getSubmit}>
      <input type='text' placeholder='enter username'/><br/><br/>
      <input type='password' placeholder='enter password' onChange={pass}/>{passErr?<span>enter more than 3 charecter</span>:" "}<br/><br/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
