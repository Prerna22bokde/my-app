import React,{useState} from 'react';
import './Video.css';

//Events in react js

export default function Project5() {
    const purple ="purple"
    const [bg,setBg]=useState(purple);
    const [name,setName]= useState('Click me');
    

    const bgChange=()=>{
        let newBg = 'yellow';
        setBg(newBg);
        setName("yellow 😄")
    }

    const dubbgChange=()=>{
        
        setBg(purple);
        setName("purple 😄");
    }

   
  return (
    <div style={{backgroundColor: bg}} className='backColor'>
      <button className='setbutton' onClick={bgChange} onDoubleClick={dubbgChange}>{name}</button>
      <button className='setbutton' onMouseEnter={bgChange} onMouseLeave={dubbgChange}>{name}</button>
    </div>
  );
}
