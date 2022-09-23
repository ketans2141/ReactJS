import React,{useState} from "react";

export function CountHooks(){
    const [count,setCount]=useState(0);

    return(
        <>
            <p>count {count}</p>
            <button onClick={()=>{setCount(count+2)}}>Increment</button>
        </>
    )
}