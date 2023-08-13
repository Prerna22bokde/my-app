import React from "react";


function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}

function mul(a,b){
    let mul = a*b;
    return mul;
}
function div(a,b){
    let div = a/b;
    return div;
}

const Calculator = ()=>{
  
    return(
<div>
<p>addition of two number     {add(40,3)}</p>
<p>subtraction of two number  {sub(48,3)}</p>
<p>multiplication of two number  {mul(4,3)}</p>
<p>division of two number  {div(10,2)}</p>
</div>
    )
}

export  default Calculator