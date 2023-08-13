import React, { useState } from 'react';

export default function Handleform() {
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [intrest,setIntrest]=useState("");
    function getFormData(e)
    {
        console.warn(name,tnc,intrest)
        e.preventDefault()
    }
    function clear(){
        setName("")
        setTnc(false)
        setIntrest("")
    }
  return (
    <div>
      <h1> Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
<select onChange={(e)=>setIntrest(e.target.value)}>
    <option>select option</option>
    <option>marwal</option>
    <option>dc</option>
</select><br/><br/>
<input type='checkbox'onChange={(e)=>setTnc(e.target.checked)}/><span>Accepts terms and condition</span><br/><br/>
<button type='submit'>Submit</button>
<button type='reset' onClick={clear}>clear</button>
      </form>
    </div>
  );
}
