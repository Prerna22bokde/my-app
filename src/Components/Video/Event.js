import React from "react";

// its onClick Event function video 10
let data ="its not";

const Apple =()=>{
function red (){
    alert("function called");
}

function green (){
    data = "its me";
    alert(data);
}


return(
    <div>
        <button onClick={red}>click me</button>
        <button  onClick={()=>alert("hello")}>click here</button>
        <button onClick={green}>click me</button>
    </div>
)
}

export default Apple
