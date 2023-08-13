import React, { useState } from "react";
import './Video.css';

// its useState  video 11



// export default function One(){
//     const [data,setData]=useState("geeta")
//     function update()
//     {
//         setData("seema")
//     }
//     return(
//         <div>
//             <h1>{data}</h1>
//             <button onClick={update}>Click me</button>
//         </div>
//     )
// }

export default function One(){
    const [data,setData]=useState(0)
    function update()
    {
        setData(data+1)
    }
    return(
        <div className="diva">
            <h1>{data}</h1>
            <button onClick={update} className="setbutton">Click me</button>
        </div>
    )
}