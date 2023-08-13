import  { useState } from "react"

function Input()
{
    const [data, setData]=useState(null)
    const [print, setPrint]=useState(false)
    function getData(val)
    {
        console.warn(val.target)
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <div>
            {/* <h1>{data}</h1> */}
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)} >print</button>
        </div>
    )
}
export default Input


