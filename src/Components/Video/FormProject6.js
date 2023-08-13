import React, { useState } from 'react';
import './Video.css';

//form submit

export default function FormProject6() {
    const [name,setName]=useState("");
    const [lastname,setLastName]=useState("");
    const [fullname,setFulltName]=useState();

    const getData=(val)=>
    {
       setName(val.target.value);
    };
    
    const getDatatwo=(val)=>
    {
       setLastName(val.target.value);
    };

    const onSubmit=(e)=>{
      e.preventDefault()
        setFulltName(name + "  " +lastname);
    };
  return (
    <div className="diva">
      <form onSubmit={onSubmit}>
     
    <h1>Hello {fullname}</h1>
        <input type='text' placeholder='Enter Your Name' onChange={getData} value={name}/><br/>
        
        <input type='text' placeholder='Enter Your Last Name' onChange={getDatatwo} value={lastname}/><br/>

        <button className='setbutton'  type='submit'>Submit</button>
        </form>
    </div>
  );
}

